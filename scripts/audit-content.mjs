import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../src/content/clinic.ts', import.meta.url), 'utf8')
const placeholderCount = (source.match(/placeholder:\s*true/g) ?? []).length + (source.match(/\bp\(/g) ?? []).length
const requiredTokens = ['[НАЗВАНИЕ КЛИНИКИ]', 'whatsappNumber', 'services:', 'doctors:', 'legal:']
const missing = requiredTokens.filter((token) => !source.includes(token))
if (missing.length) {
  console.error(`Content contract is incomplete. Missing: ${missing.join(', ')}`)
  process.exit(1)
}
console.log(`Content audit passed. ${placeholderCount} explicit placeholder markers remain for owner replacement.`)
