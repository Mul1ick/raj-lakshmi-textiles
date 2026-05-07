#!/usr/bin/env python3
"""
Crop downloaded marble photos down to marble-only surface patches.

No third-party Python packages are used. The script asks macOS `sips` to decode
images to BMP, scans candidate square crops for marble-like pixels, avoids dark
surroundings and saturated logo/text regions, then writes a JPEG back.
"""

from __future__ import annotations

import argparse
import math
import shutil
import struct
import subprocess
import sys
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "src" / "assets" / "marbles"

NEW_MARBLE_FILES = [
    "crema-diva.jpg",
    "sofital-beige.jpg",
    "sugar-beige.jpg",
    "perlato-istanbul.jpg",
    "blue-loracia.jpg",
    "de-martino.jpg",
    "mellisa-beige.jpg",
    "turkish-dyno.jpg",
    "ery-grey.jpg",
    "sardan-khadi.jpg",
    "iceberg-grey.jpg",
    "ritza-grey.jpg",
    "light-grey.jpg",
    "fantasy-grey.jpg",
    "silver-light-grey.jpg",
    "angelo-white.jpg",
    "dove-white.jpg",
    "french-vanilla.jpg",
]

MANUAL_CROPS = {
    "crema-diva.jpg": (0, 0, 900),
    "sofital-beige.jpg": (170, 285, 620),
    "blue-loracia.jpg": (20, 0, 760),
    "de-martino.jpg": (0, 0, 900),
    "ritza-grey.jpg": (60, 80, 650),
    "light-grey.jpg": (0, 190, 810),
    "fantasy-grey.jpg": (0, 0, 900),
    "angelo-white.jpg": (0, 280, 720),
    "dove-white.jpg": (0, 250, 750),
    "french-vanilla.jpg": (0, 250, 750),
}


def run(command: list[str]) -> None:
    subprocess.run(command, check=True, capture_output=True, text=True)


def convert_with_sips(source: Path, destination: Path, image_format: str) -> None:
    run(["sips", "-s", "format", image_format, str(source), "--out", str(destination)])


def read_bmp(path: Path) -> tuple[int, int, list[tuple[int, int, int]]]:
    data = path.read_bytes()
    if data[:2] != b"BM":
        raise ValueError(f"{path} is not a BMP file")

    offset = struct.unpack_from("<I", data, 10)[0]
    dib_size = struct.unpack_from("<I", data, 14)[0]
    if dib_size < 40:
        raise ValueError("unsupported BMP DIB header")

    width = struct.unpack_from("<i", data, 18)[0]
    raw_height = struct.unpack_from("<i", data, 22)[0]
    planes = struct.unpack_from("<H", data, 26)[0]
    bits = struct.unpack_from("<H", data, 28)[0]
    compression = struct.unpack_from("<I", data, 30)[0]

    if planes != 1 or bits != 24 or compression != 0:
        raise ValueError("only uncompressed 24-bit BMP files are supported")

    height = abs(raw_height)
    top_down = raw_height < 0
    row_stride = ((width * 3 + 3) // 4) * 4
    pixels: list[tuple[int, int, int]] = [(0, 0, 0)] * (width * height)

    for y in range(height):
        source_y = y if top_down else height - 1 - y
        row_start = offset + source_y * row_stride
        for x in range(width):
            b, g, r = data[row_start + x * 3 : row_start + x * 3 + 3]
            pixels[y * width + x] = (r, g, b)

    return width, height, pixels


def write_bmp(path: Path, width: int, height: int, pixels: list[tuple[int, int, int]]) -> None:
    row_stride = ((width * 3 + 3) // 4) * 4
    image_size = row_stride * height
    file_size = 54 + image_size
    header = bytearray()
    header += b"BM"
    header += struct.pack("<IHHI", file_size, 0, 0, 54)
    header += struct.pack("<IiiHHIIiiII", 40, width, -height, 1, 24, 0, image_size, 2835, 2835, 0, 0)

    rows = bytearray(image_size)
    for y in range(height):
        row_start = y * row_stride
        for x in range(width):
            r, g, b = pixels[y * width + x]
            start = row_start + x * 3
            rows[start : start + 3] = bytes((b, g, r))

    path.write_bytes(bytes(header) + bytes(rows))


def pixel_features(pixel: tuple[int, int, int]) -> tuple[float, float, float, float]:
    r, g, b = pixel
    brightness = (r + g + b) / 3.0
    high = max(r, g, b)
    low = min(r, g, b)
    saturation = 0.0 if high == 0 else (high - low) / high
    warmth = (r - b) / 255.0
    colorfulness = math.sqrt((r - g) ** 2 + (g - b) ** 2 + (b - r) ** 2) / 255.0
    return brightness, saturation, warmth, colorfulness


def crop_score(
    width: int,
    height: int,
    pixels: list[tuple[int, int, int]],
    x0: int,
    y0: int,
    size: int,
) -> float:
    sample = max(4, size // 28)
    bad = 0
    dark = 0
    colored = 0
    very_light = 0
    values: list[float] = []

    for y in range(y0, y0 + size, sample):
        for x in range(x0, x0 + size, sample):
            brightness, saturation, warmth, colorfulness = pixel_features(pixels[y * width + x])
            values.append(brightness)
            if brightness < 38:
                dark += 1
                bad += 2
            if brightness > 245 and saturation < 0.05:
                very_light += 1
            if saturation > 0.42 and colorfulness > 0.45:
                colored += 1
                bad += 3
            if brightness < 70 and saturation > 0.25:
                bad += 1

    count = max(len(values), 1)
    mean = sum(values) / count
    variance = sum((value - mean) ** 2 for value in values) / count
    texture = math.sqrt(variance)

    center_x = x0 + size / 2
    center_y = y0 + size / 2
    center_penalty = abs(center_x - width / 2) / width + abs(center_y - height / 2) / height

    score = 0.0
    score += texture * 1.2
    score += mean * 0.15
    score -= bad * 3.0
    score -= dark * 2.8
    score -= colored * 5.0
    score -= very_light * 0.45
    score -= center_penalty * 18.0
    return score


def find_crop(width: int, height: int, pixels: list[tuple[int, int, int]]) -> tuple[int, int, int]:
    base = min(width, height)
    sizes = [
        int(base * 0.88),
        int(base * 0.76),
        int(base * 0.64),
        int(base * 0.54),
    ]
    best: tuple[float, int, int, int] | None = None

    for size in sizes:
        size = max(360, min(size, base))
        if size > width or size > height:
            continue

        step = max(20, size // 7)
        xs = list(range(0, max(1, width - size + 1), step))
        ys = list(range(0, max(1, height - size + 1), step))
        if xs[-1] != width - size:
            xs.append(width - size)
        if ys[-1] != height - size:
            ys.append(height - size)

        for y in ys:
            for x in xs:
                score = crop_score(width, height, pixels, x, y, size)
                if best is None or score > best[0]:
                    best = (score, x, y, size)

    if best is None:
        size = min(width, height)
        return (max(0, (width - size) // 2), max(0, (height - size) // 2), size)

    _, x, y, size = best
    return x, y, size


def crop_pixels(
    width: int,
    pixels: list[tuple[int, int, int]],
    x0: int,
    y0: int,
    size: int,
) -> list[tuple[int, int, int]]:
    cropped: list[tuple[int, int, int]] = []
    for y in range(y0, y0 + size):
        start = y * width + x0
        cropped.extend(pixels[start : start + size])
    return cropped


def process_file(path: Path, dry_run: bool) -> None:
    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        bmp = tmp / "source.bmp"
        cropped_bmp = tmp / "cropped.bmp"
        cropped_jpg = tmp / "cropped.jpg"

        convert_with_sips(path, bmp, "bmp")
        width, height, pixels = read_bmp(bmp)
        x, y, size = MANUAL_CROPS.get(path.name, find_crop(width, height, pixels))
        x = min(max(0, x), max(0, width - size))
        y = min(max(0, y), max(0, height - size))
        print(f"{path.name}: crop x={x} y={y} size={size}")

        if dry_run:
            return

        cropped = crop_pixels(width, pixels, x, y, size)
        write_bmp(cropped_bmp, size, size, cropped)
        convert_with_sips(cropped_bmp, cropped_jpg, "jpeg")
        run(["sips", "-Z", "1000", str(cropped_jpg), "--out", str(path)])


def main() -> int:
    parser = argparse.ArgumentParser(description="Crop marble images to marble-only square surface patches.")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--files", nargs="+", default=NEW_MARBLE_FILES)
    args = parser.parse_args()

    if not shutil.which("sips"):
        print("sips is required on macOS", file=sys.stderr)
        return 1

    for filename in args.files:
        path = ASSET_DIR / filename
        if not path.exists():
            print(f"skip missing: {filename}")
            continue
        process_file(path, args.dry_run)

    return 0


if __name__ == "__main__":
    sys.exit(main())
