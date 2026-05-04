import { createWriteStream, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import https from 'node:https'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outputDir = join(root, 'src', 'assets', 'clients')

const logos = [
  { filename: 'ahluwalia-contracts.png', url: 'https://logo.clearbit.com/ahluwalia.in' },
  { filename: 'zara.png', url: 'https://logo.clearbit.com/zara.com' },
  { filename: 'dlf.png', url: 'https://logo.clearbit.com/dlf.in' },
  { filename: 'max.png', url: 'https://logo.clearbit.com/maxfashion.in' },
  { filename: 'le-meridien.png', url: 'https://logo.clearbit.com/lemeridien.com' },
  { filename: 'marriott.png', url: 'https://logo.clearbit.com/marriott.com' },
]

const download = (url, destination, redirects = 0) =>
  new Promise((resolve, reject) => {
    const request = https.get(
      url,
      { headers: { 'User-Agent': 'Mozilla/5.0 RajLakshmiClientLogoDownloader/1.0' } },
      (response) => {
        if (
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location &&
          redirects < 5
        ) {
          response.resume()
          resolve(download(new URL(response.headers.location, url).toString(), destination, redirects + 1))
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
    request.setTimeout(30000, () => request.destroy(new Error(`Timed out: ${url}`)))
  })

mkdirSync(outputDir, { recursive: true })

for (const logo of logos) {
  await download(logo.url, join(outputDir, logo.filename))
  console.log(`src/assets/clients/${logo.filename}`)
}
