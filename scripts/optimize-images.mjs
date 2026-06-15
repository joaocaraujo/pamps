import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walk(full))
    } else if (IMAGE_EXT.has(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function optimize(file) {
  const ext = extname(file).toLowerCase()
  const base = file.slice(0, -ext.length)
  const webpOut = `${base}.webp`

  const input = sharp(file)
  const meta = await input.metadata()

  let pipeline = sharp(file)

  if (file.includes('cap.png') || file.endsWith('logo.png')) {
    pipeline = pipeline.resize({ width: 400, withoutEnlargement: true })
  } else if (file.includes('hero-image')) {
    pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true })
  } else if (meta.width && meta.width > 1400) {
    pipeline = pipeline.resize({ width: 1400, withoutEnlargement: true })
  }

  await pipeline.webp({ quality: 82, effort: 6 }).toFile(webpOut)

  const before = (await stat(file)).size
  const after = (await stat(webpOut)).size
  const rel = file.replace(publicDir, '').replace(/\\/g, '/')
  console.log(`${rel} → ${rel.replace(ext, '.webp')} (${(before / 1024).toFixed(0)} KiB → ${(after / 1024).toFixed(0)} KiB)`)
}

const files = await walk(publicDir)
for (const file of files) {
  if (file.endsWith('.webp')) continue
  await optimize(file)
}

console.log(`\nOptimized ${files.filter(f => !f.endsWith('.webp')).length} images.`)
