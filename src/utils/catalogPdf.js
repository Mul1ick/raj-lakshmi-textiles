const marbleAssetModules = import.meta.glob('../assets/marbles/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const PAGE_MARGIN = 42
const IMAGE_WIDTH = 230
const IMAGE_HEIGHT = 172
const IMAGE_EXPORT_WIDTH = 920
const IMAGE_EXPORT_HEIGHT = 688

const titleCase = (value) =>
  value
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

const escapePdfText = (value) =>
  String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')

const binaryStringToUint8Array = (binary) => {
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }
  return bytes
}

const dataUrlToBytes = (dataUrl) => {
  const base64 = dataUrl.split(',')[1]
  return binaryStringToUint8Array(window.atob(base64))
}

const loadImage = async (src) => {
  const response = await fetch(src)
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)

  try {
    return await new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => resolve(image)
      image.onerror = reject
      image.src = url
    })
  } finally {
    URL.revokeObjectURL(url)
  }
}

const imageToJpegBytes = async (src) => {
  const image = await loadImage(src)
  const canvas = document.createElement('canvas')
  canvas.width = IMAGE_EXPORT_WIDTH
  canvas.height = IMAGE_EXPORT_HEIGHT

  const context = canvas.getContext('2d')
  context.fillStyle = '#f7f5ef'
  context.fillRect(0, 0, canvas.width, canvas.height)

  const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
  const width = image.naturalWidth * scale
  const height = image.naturalHeight * scale
  const x = (canvas.width - width) / 2
  const y = (canvas.height - height) / 2
  context.drawImage(image, x, y, width, height)

  return dataUrlToBytes(canvas.toDataURL('image/jpeg', 0.82))
}

const getMarbleImages = () => {
  const byName = new Map()

  Object.entries(marbleAssetModules).forEach(([path, src]) => {
    const filename = path.split('/').pop()
    const key = filename.replace(/\.[^.]+$/, '')
    if (!byName.has(key)) {
      byName.set(key, {
        filename,
        name: titleCase(filename),
        src,
      })
    }
  })

  return Array.from(byName.values()).sort((a, b) => a.name.localeCompare(b.name))
}

const text = (value, x, y, size = 10, font = 'F1') =>
  `BT /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(value)}) Tj ET\n`

const centeredText = (value, x, y, boxWidth, size = 10, font = 'F1') => {
  const approximateWidth = value.length * size * 0.5
  const textX = x + Math.max(0, (boxWidth - approximateWidth) / 2)
  return text(value, textX, y, size, font)
}

const makeImageDraw = (resourceName, x, y, width, height) =>
  `q ${width} 0 0 ${height} ${x} ${y} cm /${resourceName} Do Q\n`

const makePageContent = (items, pageNumber, totalPages) => {
  const content = []
  content.push('q 0.92 0.92 0.9 rg BT /F2 72 Tf 50 394 Td (RAJ LAKSHMI) Tj ET Q\n')
  content.push(text('Raj Lakshmi Marbles Catalogue', PAGE_MARGIN, 800, 16, 'F2'))
  content.push(text(`Page ${pageNumber} of ${totalPages}`, 494, 802, 8))
  content.push('0.75 0.05 0.08 RG 42 786 m 553 786 l S\n')

  const positions = [
    [PAGE_MARGIN, 554],
    [323, 554],
    [PAGE_MARGIN, 300],
    [323, 300],
    [PAGE_MARGIN, 46],
    [323, 46],
  ]

  items.forEach((item, index) => {
    const [x, y] = positions[index]
    content.push('0.96 0.95 0.92 rg\n')
    content.push(`${x - 8} ${y - 42} ${IMAGE_WIDTH + 16} ${IMAGE_HEIGHT + 66} re f\n`)
    content.push(makeImageDraw(item.resourceName, x, y, IMAGE_WIDTH, IMAGE_HEIGHT))
    content.push('1 1 1 rg\n')
    content.push(`${x} ${y - 36} ${IMAGE_WIDTH} 28 re f\n`)
    content.push('0.75 0.05 0.08 RG\n')
    content.push(`${x} ${y - 8} m ${x + IMAGE_WIDTH} ${y - 8} l S\n`)
    content.push('0.10 0.10 0.11 rg\n')
    content.push(centeredText(item.name, x, y - 25, IMAGE_WIDTH, 11, 'F2'))
  })

  return content.join('')
}

const buildPdf = (images) => {
  const objects = []
  const addObject = (body) => {
    objects.push(body)
    return objects.length
  }

  const catalogId = addObject('<< /Type /Catalog /Pages 2 0 R >>')
  const pagesId = addObject('')
  const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  const boldFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

  const imageObjects = images.map((image, index) => ({
    ...image,
    resourceName: `Im${index + 1}`,
    objectId: addObject(
      `<< /Type /XObject /Subtype /Image /Width ${IMAGE_EXPORT_WIDTH} /Height ${IMAGE_EXPORT_HEIGHT} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.bytes.length} >>\nstream\n`,
    ),
  }))

  const pages = []
  const chunks = []
  for (let index = 0; index < imageObjects.length; index += 6) {
    chunks.push(imageObjects.slice(index, index + 6))
  }

  chunks.forEach((chunk, index) => {
    const content = makePageContent(chunk, index + 1, chunks.length)
    const contentId = addObject(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
    const xObjects = chunk.map((item) => `/${item.resourceName} ${item.objectId} 0 R`).join(' ')
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontId} 0 R /F2 ${boldFontId} 0 R >> /XObject << ${xObjects} >> >> /Contents ${contentId} 0 R >>`,
    )
    pages.push(pageId)
  })

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pages.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`

  const parts = ['%PDF-1.4\n%\xE2\xE3\xCF\xD3\n']
  const offsets = [0]
  const encoder = new TextEncoder()
  let length = encoder.encode(parts[0]).length

  objects.forEach((body, index) => {
    offsets.push(length)
    const objectHeader = `${index + 1} 0 obj\n`
    parts.push(objectHeader)
    length += encoder.encode(objectHeader).length

    if (imageObjects.some((image) => image.objectId === index + 1)) {
      const image = imageObjects.find((item) => item.objectId === index + 1)
      parts.push(body)
      length += encoder.encode(body).length
      parts.push(image.bytes)
      length += image.bytes.length
      parts.push('\nendstream\nendobj\n')
      length += encoder.encode('\nendstream\nendobj\n').length
    } else {
      const objectBody = `${body}\nendobj\n`
      parts.push(objectBody)
      length += encoder.encode(objectBody).length
    }
  })

  const xrefOffset = length
  const xrefRows = ['xref\n', `0 ${objects.length + 1}\n`, '0000000000 65535 f \n']
  offsets.slice(1).forEach((offset) => {
    xrefRows.push(`${String(offset).padStart(10, '0')} 00000 n \n`)
  })
  xrefRows.push(
    `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`,
  )
  parts.push(xrefRows.join(''))

  return new Blob(parts, { type: 'application/pdf' })
}

export const downloadCataloguePdf = async () => {
  const marbleImages = getMarbleImages()
  const images = []

  for (const marble of marbleImages) {
    images.push({
      ...marble,
      bytes: await imageToJpegBytes(marble.src),
    })
  }

  const blob = buildPdf(images)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'raj-lakshmi-marble-catalogue.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
