#!/usr/bin/env python3
"""
Download missing marble slab images into src/assets/marbles.

The script first tries Google Images HTML for direct image URLs. Since Google often
hides image URLs behind client-side payloads, it falls back to DuckDuckGo image
results and filters for real supplier/product style sources.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
import time
from dataclasses import dataclass
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote_plus, unquote, urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "src" / "assets" / "marbles"
MANIFEST_PATH = ASSET_DIR / "downloaded-marble-images.json"

MARBLES = [
    "Crema Diva",
    "Sofital Beige",
    "Sugar Beige",
    "Perlato Istanbul",
    "Blue Loracia",
    "De Martino",
    "Mellisa Beige",
    "Turkish Dyno",
    "Ery Grey",
    "Sardan Khadi",
    "Iceberg Grey",
    "Ritza Grey",
    "Light Grey",
    "Fantasy Grey",
    "Silver Light Grey",
    "Angelo White",
    "Dove White",
    "French Vanilla",
]


@dataclass
class Candidate:
    image_url: str
    source_url: str
    title: str
    provider: str


SOURCE_OVERRIDES = {
    "Sofital Beige": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-17-at-13.35.14-scaled.jpeg",
            "https://akvinternationalstones.com/product/sofita-beige-marble/",
            "Sofita Beige Marble",
            "akv",
        )
    ],
    "Perlato Istanbul": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/PERLATO-SICILIA.png",
            "https://akvinternationalstones.com/product/perlato-sicilia-marble/",
            "Perlato Sicilia Marble",
            "akv",
        )
    ],
    "Mellisa Beige": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/CLASSIC-BEIGE.png",
            "https://akvinternationalstones.com/product/classic-beige-marble/",
            "Classic Beige Marble",
            "akv",
        )
    ],
    "Turkish Dyno": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/DYNA-VENATO.png",
            "https://akvinternationalstones.com/product/dyna-venato-marble/",
            "Dyna Venato Marble",
            "akv",
        )
    ],
    "Ery Grey": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/Flore.png",
            "https://akvinternationalstones.com/product/italian-florentine-grey/",
            "Italian Florentine Grey",
            "akv",
        )
    ],
    "Sardan Khadi": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/SARAN-COLLIN-1.png",
            "https://akvinternationalstones.com/product/saran-collin-marble/",
            "Saran Collin Marble",
            "akv",
        )
    ],
    "Iceberg Grey": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/TUNDRA-GREY.png",
            "https://akvinternationalstones.com/product/tundra-grey-marble/",
            "Tundra Grey Marble",
            "akv",
        )
    ],
    "Ritza Grey": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/11/WhatsApp-Image-2026-02-03-at-12.36.23-5.jpeg",
            "https://akvinternationalstones.com/product/grey-william-marble/",
            "Grey William Marble",
            "akv",
        )
    ],
    "Light Grey": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/GREY-CHIGAN.png",
            "https://akvinternationalstones.com/product/grey-chigan-marble/",
            "Grey Chigan Marble",
            "akv",
        )
    ],
    "Silver Light Grey": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/SOLOMON-GREY-1.png",
            "https://akvinternationalstones.com/product/solomon-grey-marble/",
            "Solomon Grey Marble",
            "akv",
        )
    ],
    "Dove White": [
        Candidate(
            "https://akvinternationalstones.com/wp-content/uploads/2024/09/Lasa-White-Marble-.png",
            "https://akvinternationalstones.com/product/lasa-white-marble/",
            "Lasa White Marble",
            "akv",
        )
    ],
}

BAD_TERMS = {
    "ai",
    "artificial intelligence",
    "generated",
    "generative",
    "render",
    "mockup",
    "logo",
    "vector",
    "clipart",
    "wallpaper",
    "freepik",
    "pngtree",
    "shutterstock",
    "alamy",
    "dreamstime",
    "istock",
    "depositphotos",
    "pinterest",
    "youtube",
    "facebook",
    "instagram",
}

SOURCE_HINTS = {
    "marble",
    "marmo",
    "stone",
    "stones",
    "granite",
    "tile",
    "tiles",
    "slab",
    "quarry",
    "onyx",
    "travertine",
}

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return slug


def request_bytes(url: str, referer: str | None = None, timeout: int = 8, limit: int | None = None) -> bytes:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }
    if referer:
        headers["Referer"] = referer

    req = Request(url, headers=headers)
    with urlopen(req, timeout=timeout) as response:
        if limit is None:
            return response.read()

        chunks: list[bytes] = []
        total = 0
        while True:
            chunk = response.read(min(65536, limit - total))
            if not chunk:
                break
            chunks.append(chunk)
            total += len(chunk)
            if total >= limit:
                break
        return b"".join(chunks)


def request_text(url: str, referer: str | None = None) -> str:
    return request_bytes(url, referer=referer).decode("utf-8", errors="ignore")


def clean_url(raw: str) -> str:
    value = raw.encode("utf-8").decode("unicode_escape")
    value = html.unescape(value)
    value = unquote(value)
    return value.replace("\\/", "/")


def looks_bad(text: str) -> bool:
    lowered = text.lower()
    return any(term in lowered for term in BAD_TERMS)


def source_score(candidate: Candidate) -> int:
    parsed = urlparse(candidate.source_url or candidate.image_url)
    haystack = f"{parsed.netloc} {parsed.path} {candidate.title}".lower()
    score = sum(2 for term in SOURCE_HINTS if term in haystack)
    if "slab" in haystack:
        score += 3
    if "marble" in haystack:
        score += 3
    if candidate.provider == "google":
        score += 1
    if candidate.provider in {"akv", "vinay"}:
        score += 100
    return score


def google_candidates(query: str) -> list[Candidate]:
    url = f"https://www.google.com/search?tbm=isch&safe=active&q={quote_plus(query)}"
    try:
        page = request_text(url)
    except (HTTPError, URLError, TimeoutError, OSError):
        return []

    image_urls: list[str] = []
    patterns = [
        r'"ou":"(https?://.*?)(?<!\\)"',
        r'\["(https?://[^"]+?\.(?:jpg|jpeg|png|webp)[^"]*?)"',
        r'(https?://[^"\\<> ]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"\\<> ]*)?)',
    ]
    for pattern in patterns:
        for match in re.findall(pattern, page, flags=re.IGNORECASE):
            cleaned = clean_url(match)
            if cleaned.startswith("http") and cleaned not in image_urls:
                image_urls.append(cleaned)

    return [
        Candidate(image_url=image_url, source_url=image_url, title=query, provider="google")
        for image_url in image_urls
    ]


def duckduckgo_candidates(query: str) -> list[Candidate]:
    search_url = f"https://duckduckgo.com/?q={quote_plus(query)}&iar=images&iax=images&ia=images"
    try:
        page = request_text(search_url)
    except (HTTPError, URLError, TimeoutError, OSError):
        return []

    match = re.search(r"vqd=['\"]([^'\"]+)['\"]", page)
    if not match:
        return []

    vqd = match.group(1)
    api_url = (
        "https://duckduckgo.com/i.js"
        f"?l=us-en&o=json&q={quote_plus(query)}&vqd={quote_plus(vqd)}&f=,,,&p=1"
    )

    try:
        payload = json.loads(request_text(api_url, referer=search_url))
    except (HTTPError, URLError, TimeoutError, OSError, json.JSONDecodeError):
        return []

    candidates: list[Candidate] = []
    for item in payload.get("results", []):
        image_url = item.get("image")
        if not image_url:
            continue
        candidates.append(
            Candidate(
                image_url=image_url,
                source_url=item.get("url") or image_url,
                title=item.get("title") or query,
                provider="duckduckgo",
            )
        )
    return candidates


def collect_candidates(name: str) -> list[Candidate]:
    queries = [
        f"{name} marble slab",
        f"{name} marble slab supplier",
        f"{name} marble stone slab",
    ]
    seen: set[str] = set()
    collected: list[Candidate] = list(SOURCE_OVERRIDES.get(name, []))
    seen: set[str] = {candidate.image_url for candidate in collected}

    for query in queries:
        for candidate in google_candidates(query) + duckduckgo_candidates(query):
            key = candidate.image_url
            if key in seen:
                continue
            seen.add(key)
            if looks_bad(f"{candidate.image_url} {candidate.source_url} {candidate.title}"):
                continue
            collected.append(candidate)
        time.sleep(0.35)

    collected.sort(key=source_score, reverse=True)
    return collected


def sniff_image_ext(data: bytes) -> str | None:
    if data.startswith(b"\xff\xd8\xff"):
        return "jpg"
    if data.startswith(b"\x89PNG\r\n\x1a\n"):
        return "png"
    if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
        return "webp"
    return None


def image_size(path: Path) -> tuple[int, int] | None:
    sips = shutil.which("sips")
    if not sips:
        return None
    result = subprocess.run(
        [sips, "-g", "pixelWidth", "-g", "pixelHeight", str(path)],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return None
    width_match = re.search(r"pixelWidth:\s*(\d+)", result.stdout)
    height_match = re.search(r"pixelHeight:\s*(\d+)", result.stdout)
    if not width_match or not height_match:
        return None
    return int(width_match.group(1)), int(height_match.group(1))


def convert_to_jpeg(source: Path, destination: Path) -> bool:
    if source.suffix.lower() in {".jpg", ".jpeg"}:
        shutil.copyfile(source, destination)
        return True

    sips = shutil.which("sips")
    if not sips:
        return False
    result = subprocess.run(
        [sips, "-s", "format", "jpeg", str(source), "--out", str(destination)],
        check=False,
        capture_output=True,
        text=True,
    )
    return result.returncode == 0 and destination.exists() and destination.stat().st_size > 0


def download_candidate(candidate: Candidate, destination: Path) -> bool:
    try:
        data = request_bytes(candidate.image_url, referer=candidate.source_url, timeout=25, limit=8 * 1024 * 1024)
    except (HTTPError, URLError, TimeoutError, OSError):
        return False

    ext = sniff_image_ext(data)
    if not ext:
        return False

    with tempfile.TemporaryDirectory() as tmp_dir:
        source = Path(tmp_dir) / f"source.{ext}"
        source.write_bytes(data)

        size = image_size(source)
        if size is not None:
            width, height = size
            ratio = width / max(height, 1)
            if width < 500 or height < 300 or ratio < 0.55 or ratio > 3.2:
                return False

        temp_jpg = Path(tmp_dir) / destination.name
        if not convert_to_jpeg(source, temp_jpg):
            return False

        final_size = image_size(temp_jpg)
        if final_size is not None:
            width, height = final_size
            if width < 500 or height < 300:
                return False

        shutil.copyfile(temp_jpg, destination)
        return True


def load_manifest() -> list[dict]:
    if not MANIFEST_PATH.exists():
        return []
    try:
        return json.loads(MANIFEST_PATH.read_text())
    except json.JSONDecodeError:
        return []


def save_manifest(records: list[dict]) -> None:
    records.sort(key=lambda item: item["name"])
    MANIFEST_PATH.write_text(json.dumps(records, indent=2) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser(description="Download missing marble slab images.")
    parser.add_argument("--overwrite", action="store_true", help="replace existing files")
    parser.add_argument("--only", nargs="+", help="only download the given marble names")
    parser.add_argument("--limit-candidates", type=int, default=35, help="candidate URLs to try per marble")
    args = parser.parse_args()

    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {item["name"]: item for item in load_manifest() if "name" in item}

    missing: list[str] = []
    downloaded = 0

    names = MARBLES
    if args.only:
        requested = {item.lower() for item in args.only}
        names = [name for name in MARBLES if name.lower() in requested]

    for name in names:
        filename = f"{slugify(name)}.jpg"
        destination = ASSET_DIR / filename
        if destination.exists() and not args.overwrite:
            print(f"skip  {name}: {filename} already exists", flush=True)
            continue

        print(f"find  {name}", flush=True)
        candidates = collect_candidates(name)
        if not candidates:
            print(f"miss  {name}: no image candidates", flush=True)
            missing.append(name)
            continue

        saved = False
        for candidate in candidates[: args.limit_candidates]:
            print(f"try   {name}: {candidate.provider} {candidate.image_url[:96]}", flush=True)
            if download_candidate(candidate, destination):
                manifest[name] = {
                    "name": name,
                    "filename": filename,
                    "source_url": candidate.source_url,
                    "image_url": candidate.image_url,
                    "title": candidate.title,
                    "provider": candidate.provider,
                }
                print(f"save  {name}: {filename}", flush=True)
                downloaded += 1
                saved = True
                break

        if not saved:
            print(f"miss  {name}: no candidate passed filters", flush=True)
            missing.append(name)

    save_manifest(list(manifest.values()))

    print(flush=True)
    print(f"downloaded: {downloaded}", flush=True)
    if missing:
        print("missing:", flush=True)
        for name in missing:
            print(f"  - {name}", flush=True)
        return 1
    print("missing: none", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
