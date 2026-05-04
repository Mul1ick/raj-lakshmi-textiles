import { createWriteStream, mkdirSync, readFileSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import https from 'node:https'
import http from 'node:http'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dataPath = join(root, 'src', 'curated-marbles.json')
const outputDir = join(root, 'src', 'assets', 'marbles')

const marbles = JSON.parse(readFileSync(dataPath, 'utf8'))

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const extensionFor = (url) => {
  const ext = extname(new URL(url).pathname).toLowerCase()
  return ext || '.jpg'
}

const download = (url, destination, redirects = 0) =>
  new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http
    const request = client.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 RajlaxmiMarblesAssetDownloader/1.0',
        },
      },
      (response) => {
        if (
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location &&
          redirects < 5
        ) {
          response.resume()
          const nextUrl = new URL(response.headers.location, url).toString()
          resolve(download(nextUrl, destination, redirects + 1))
          return
        }

        if (response.statusCode !== 200) {
          response.resume()
          reject(new Error(`Failed ${url}: HTTP ${response.statusCode}`))
          return
        }

        const file = createWriteStream(destination)
        response.pipe(file)
        file.on('finish', () => file.close(resolve))
        file.on('error', reject)
      },
    )

    request.on('error', reject)
    request.setTimeout(30000, () => {
      request.destroy(new Error(`Timed out: ${url}`))
    })
  })

mkdirSync(outputDir, { recursive: true })

for (const marble of marbles) {
  const filename = `${slugify(marble.name)}${extensionFor(marble.src)}`
  const destination = join(outputDir, filename)
  await download(marble.src, destination)
  console.log(`${marble.name} -> src/assets/marbles/${filename}`)
}
