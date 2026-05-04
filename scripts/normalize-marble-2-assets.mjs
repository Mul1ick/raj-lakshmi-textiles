import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { execFileSync } from 'node:child_process'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const sourceDir = join(root, 'src', 'assets', 'marbels_2')
const targetDir = join(root, 'src', 'assets', 'marbles')

const displayNames = new Map([
  ['Angelo White', 'Angelo White'],
  ['Royal Beige', 'Royal Beige'],
  ['Plain Grey', 'Plain Grey'],
  ['Grey Milano', 'Grey Milano'],
  ['Burberry Beige', 'Burberry Beige'],
  ['Brecia Aurora', 'Brescia Aurora'],
  ['Brescia Aurora', 'Brescia Aurora'],
  ['Moon Stone Silver', 'Moon Stone Silver'],
  ['Premium Grey', 'Premium Grey'],
  ['French Vanila', 'French Vanilla'],
  ['Black Rose', 'Black Rose'],
  ['Silver Light Grey', 'Silver Light Grey'],
  ['Bulgari Grey', 'Bulgari Grey'],
  ['IMG_6253', 'Imported Marble 6253'],
  ['Iceberg Grey', 'Iceberg Grey'],
  ['Vanila Spider', 'Vanilla Spider'],
  ['Cream Karaman 2', 'Cream Karaman 2'],
  ['Sugar Beige', 'Sugar Beige'],
  ['Cosmo Grey', 'Cosmo Grey'],
  ['Kaman Beige', 'Kaman Beige'],
  ['Sofital Beige', 'Sofital Beige'],
  ['De Martino', 'De Martino'],
  ['Erey Grey', 'Erey Grey'],
  ['Fantasy Grey', 'Fantasy Grey'],
  ['Symphony Grey', 'Symphony Grey'],
  ['Saran Koli', 'Saran Koli'],
  ['Volakas White', 'Volakas White'],
  ['Armani Bronze', 'Armani Bronze'],
  ['Rosso Alicante', 'Rosso Alicante'],
  ['Moca Cream Fine Grain', 'Moca Cream Fine Grain'],
  ['Moon Cream', 'Moon Cream'],
  ['Golden Spider', 'Golden Spider'],
  ['Dover White', 'Dover White'],
  ['Golden Emperador', 'Golden Emperador'],
])

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const baseName = (filename) => filename.replace(/\.[^.]+$/, '')
const isJpeg = (filename) => ['.jpg', '.jpeg'].includes(extname(filename).toLowerCase())
const uniqueTarget = (slug) => {
  let suffix = 1
  let filename = `${slug}.jpg`
  while (existsSync(join(targetDir, filename))) {
    suffix += 1
    filename = `${slug}-${suffix}.jpg`
  }
  return filename
}

if (!existsSync(sourceDir)) {
  console.log('No src/assets/marbels_2 folder found.')
  process.exit(0)
}

mkdirSync(targetDir, { recursive: true })

const outputs = []

for (const file of readdirSync(sourceDir)) {
  const rawName = baseName(file)
  const name = displayNames.get(rawName) ?? rawName
  const filename = uniqueTarget(slugify(name))
  const source = join(sourceDir, file)
  const target = join(targetDir, filename)

  if (isJpeg(file)) {
    copyFileSync(source, target)
  } else {
    execFileSync('sips', ['-s', 'format', 'jpeg', source, '--out', target], { stdio: 'ignore' })
    if (statSync(target).size < 5000) {
      rmSync(target, { force: true })
      console.warn(`Skipped ${file}: HEIC conversion did not produce a usable JPEG.`)
      continue
    }
  }

  outputs.push({ source: file, name, filename })
  console.log(`${file} -> src/assets/marbles/${filename}`)
}

rmSync(sourceDir, { recursive: true, force: true })

console.log('\nCatalog entries:')
for (const output of outputs) {
  console.log(`{ name: '${output.name}', src: asset('${output.filename}') },`)
}
