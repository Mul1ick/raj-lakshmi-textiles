import { createWriteStream, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import https from 'node:https'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outputDir = join(root, 'src', 'assets', 'site')

const assets = [
  {
    filename: 'home-statuario-marble-hero.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFdcE2M007vRFBuUYn4w0fUWT0qb0_5MvMWobK524PtSuK1yIW-br0BEQl3GzwLLQsiqlCcMhY4DKNs3f7xFJNZNlQqWY3xdVjuL2STpCVQ8VQ-Ao0eDdGx1nsgDgbDq0luVm2qH6kngK-pMQDJrtD0-qqJ7CAj48DyYQF1C8DEKbmi5SL6rPq3uP3QI-aAoSdEDolPACHCiGPKbMR6t-jNWnL6-Xv-lJ1pAhJpGA5aNQwMC1AAtqXwr3zCF3J8YXmoK3DgNILyjfW',
  },
  {
    filename: 'calacatta-borghini-marble.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUC8v1u_zSVFgRSatlwSa1pvBmZYVPtZU6k0_5jBh4IyCFuLeeEbvvPwo-Khf2rBmbQ104dgSILEjvRC8Hxx5XbHQUCTmZf1Uqxz-hBxeQbW58r1wR7GpPUyGqLhn3gPMJdHzPdHnijEBGDGMDfU--nDW1zvFrY03IUU8m-Bbpk4zpMQuBjBpGYYoQpFeWJTTbub53-j64hIklkBF-vgdTmgXxQGH4cT1D7y8r1LQFSnUBtouLtXk2XC3rumdBh-77A5a7b6jNEFQp',
  },
  {
    filename: 'emerald-quartzite.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZJJP9xI4336CqoPgbxJXopY5GiP4lrOaUDm6lTwm9rqtzM3nxxgYknSZ7evBY7aCIKuQRzxRB_Il5QtWwlxCLuOKVikpYSUUx_KMfTTkVUdbQTjSST_kfyRxYwBEWwLO5j9FJDXvc46tAflfmOPeAgewNVsv0U5shNi5sgY4H5JPlBr-y0xUJUMyPDv1ydLUEprvPbg8HGCG-KWE5A2RHPLHI4wTvn84vZnVwEAZq6Qr5mU5TB8mjb0fRUeNynpSSmzX0VjZtAcv',
  },
  {
    filename: 'nero-marquina-marble.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASefmmr8DFQiE-Vmc9z2vmDwr96nW6-cck3Lae1LthL0G5Hv721QEcV6SwHKpgn9sclkpBEYxShtWaoEILpPGu0DmT7IcwiZjVJyXokKP0NFMvPVE4Ccv8-oQqXqw1YKaC0ip4mcggW-dqxPRe43IuBsuPLiAHXcBsONGCS6RdGe-MrL_Kdy3pg44ayQ5fkn6MuK-xl4CSUnK3K_-ce-kGAlDpobXRSTpt1rDMxTFrXGnXjWzTbUNGbRfa5MbiwzpzeZNhQzNnFAv4',
  },
  {
    filename: 'natural-stone-macro.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW9ganXFZsU-_Kj9KHvEL_YBI41TQPwjlkjyIv_Fr4d5iMWrjUL7NZCuXzbqV96Dg_Kl9Cj4XxlbqBzAFATk9we65N-6MafRY3yYmJ-5vwlb_ow_v5KH5H9O8R_5aNHqfTKToleb548Wne1nlvP6mlsBlj-L8NSUyTXtJINejAk2WKOvw8Ba9izu-gwQxVjBq6Fjx9X5K1eEbcNeR9yEuzGVpt1oupM4GIPq_2mWVCJV_aNX1-_8w-8S64uttrB1VeX12rxOpnPWw5',
  },
  {
    filename: 'marble-showroom-atelier.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbRHcmhp91Ex2kf0ICRa6cbIInI4rDTdR6cW9SQ468JPxboskzZ12qJZ2ni5H4-Jj0aUJQBke8AiXJ6otkZVg4fz6uvKyWH5OantNK9SQmGazA2Y3QraDez98_YL9uuTBhQJmvnP0qO_7yBFpuwt-pAVbo3_MpAZeV9ObbXBQ1FdvIdTrmdkceUTof6peN_JKWzDnvF4pYOWVPKsAKsHk0g2XzM5y9sFpdNxoWa0ggpkIb11M4-Ncl-uF-y244PmQGxqTA_P0jcCP3',
  },
  {
    filename: 'marble-sample-book.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzUdjCIUTx4ehZJxw-WjoVgJ8_DMXnAriKLbXkqDOXO9Nlyi106tOX6qo9BX-bcm_Foc4P2agW4pmOL2uzM6O4MhX-mtUtn4o1bxxaVGZx65QW951cjIJaGbgztrjviQYn3GlqBaF975COedVOOVpdKgp2DyrTLZ6Hs_9KiGV5p4KinWDkB-jgDJYxDnR8dKM6HrEUPL5yaEyHTQSP97Gak9IbcFR2y8lCmyY0zqu6w4-8PiJgdkicKHn7tFYNx2Dw7IdxCzLhbqb-',
  },
  {
    filename: 'marble-quarry-aerial.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcGWxN4P-HsDbXWVcei0nQO28gLwRslsifkO0h_C45ijEWdRICgWW_gg6WSSiUy5Nwf0BP1vGTIXZrVt9QMjL_9qPlcrFNgbJ78PRcl1PGHXn43FuvFrxzUDqfc9EkzJzIrcGa7og9xq5Ltmsxtbi9oqQRcZknxdKWIo2lo0ycOX3g4gDEUUWJNASMgJsxE8w-urAeWzfAb4F9wCc7936OE6lfyv1dAS6HFfs2E-Flc4mqZYlcemOfb_J5Ba8KIkbSih6wB5oJQhuW',
  },
  {
    filename: 'marble-first-cut.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpCc9K-sz8tfH2YBsmgKIFQ0VzpJY5nFOg8_Lx8RoAQ0wSMfnbvPSxLAbpPLeX1NEMj9hgbapCApC9vabhePvoEyi8KB1P4VUaVfLKDdy8h8wEB4CvLSJ-196B7jt7HS4kzsvP2s1nBfZBv_8BW8Ic0UWA4m8V2gmheRC1M8fkklVOMimr6q-HI_2LYj3SJWgYI1Y1e5eFIux9r7DFRj6gk2mneI2iMw_eZvCUpwlgHtfhO0g3hDf178lk8kqCA2G6DfCYpYspicV',
  },
  {
    filename: 'portoro-gold-veining.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8204NO6X7oFz36gZXJCn-ozkmDa8YZVl9YaX9-W1OBrNJ6GmJvUkkb3XzEDxepB1_lQaHYVuBCz-1CVkgYDA08MPQXRRBsXjTg7_0eF19d7Aj9Mhh2-VljEmupcIGx7N8KnuNZngUIFsBWEf3dUuJzPdB0Z8b-qIp-qH03sufETyh99ttPUkTIjopeD9AMeqTmdR_vqykbTplm7MTwig7IvznsX_YosYKw4Tdb47SRywsi4G2H9JoxpnpwZ7VAA-TuVgu-hfMb5oz',
  },
  {
    filename: 'marble-sample-tray.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLHuQcnKkYmh03V9avnXng0RAnWkTnr4v7eq_j8tM5mGjdqCmYu94U7ZENlC99GWDN-2cts9bTQ8oEBpyGhVa5_L_ApjSi6qqFoFEx7lDtqPseKrM-V1-_JRE_A_QwX72IiGGTKm-irSjpJplPAMoBrnSxADszmRqENo61XC4wC8f2EwN8r_N1-BJ1D100OnwDyKYLDB6b2V86UnB4wSnP6ilQ-N7Pe_WOIwbtvlx_d9E9cvMhZnK1rlWE8i6xaVJdWRALNEjcXC9',
  },
  {
    filename: 'luxury-marble-hotel-lobby.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDARRZYIZXS81R7HBCRtrMStXORd2gr5vxq3M5Mj2TUwePU39gjcFC1j41vKq4OJznbi9Yde5QFkFhnhmGixMoCabmgwIxUo0xtXVk_QHqhezd-p_EAWsGk5o7oIKFhMJqB2Mh-5fHEVkHnCLy00wfym4hYb7zVyviVwN9E3pCTcgMmF41tp-osceebM3z4YEnRwFITCgn1CMc0WWLyZIvUl2LzRpv2OiwfCLJTSKLekxar6nmpsFivXBRLwEmFnDHRjCpExCtZ9sFY',
  },
  {
    filename: 'nero-marquina-marble-staircase.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFmD3MmJQlm93BKGCK9BpqTLuwKCXLa66q4Ry2H1NR5wogwrRCcyC7P60u3kMBCm0jPI5G87XYLRmNp9MqxAloVI8znz28EGJtOAblxJYPF-K4-2l2_IF8RtgN-BhZ8eVajFtUdlq30AmeP9hAoFl0ZrPjPZpKoWtoKNNMQy6UBgQceae3ZfjjcH3UTFMKr8a6_4T8dBHWZfuJzWdFGkMqotL-qwWINlgx4l39AK5sG-TbzDkk0Q3wZI00p67tfhk_6MchWnoYmgA8',
  },
  {
    filename: 'white-marble-spa-bathroom.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc0OrNWOCeHaYDmj_m3HlS75uk9z8jvtgR7nqEBH3AT9LafxJ-ZugXvy3qmYauhTkzT5HzJOcVAxkH8o_dDfPN_hM1Hgq4VRlZ5_jKJhgb4Qpac3FknNZxRXOOq75flymI2U0pPCMOW83R-j1gO7Gl4hLVIbBh_SZgvvBhl9aUElIvRLNyPMT12HcuwkIHpy_Lo-HjsWdCZlNgerqCEoHipji_kXsCBHd8joveSNkIgPI79dXzSrivESfQjK4q0igHvmJnyL8M4T8M',
  },
  {
    filename: 'architect-portrait.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI1jukz-O4eSK8sxTL9Pj02bX75XxQi8ZOxxEyHROiqTr3ZW_nF0yVVmi3AjxFlEU7PmUSKUeX6ob_uHuXlpFDDKLULSpXwzfKjZnxHxOmfBzUvLIbJHLfu0nGQ1C5DIex4SSFkBRs6aIRVKt_BpD6GR5YSQjtL_ztYfuhrqZLTsLjYW0t5UI7mPieqKzSJSbfyAyVBvnL6KSAqgIPeRKFk0tpkkJmJ0wsEf_ehbZVRPeOkkhUc5DnSZ2tWZl-LBejSqBHYkaNqJU_',
  },
]

const download = (url, destination, redirects = 0) =>
  new Promise((resolve, reject) => {
    const request = https.get(
      url,
      { headers: { 'User-Agent': 'Mozilla/5.0 RajlaxmiMarblesAssetDownloader/1.0' } },
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

for (const asset of assets) {
  await download(asset.url, join(outputDir, asset.filename))
  console.log(`src/assets/site/${asset.filename}`)
}
