import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, createWhatsAppMessage, normalizeWhatsAppNumber } from './whatsapp'

describe('WhatsApp URL builder', () => {
  it('normalizes a formatted phone and encodes context', () => {
    const url = buildWhatsAppUrl('+7 (700) 123-45-67', { type: 'service', source: 'Карточка', service: 'Брекеты' })
    expect(url).toContain('https://wa.me/77001234567?text=')
    expect(decodeURIComponent(url!)).toContain('Услуга: Брекеты')
  })
  it('rejects invalid configuration', () => expect(buildWhatsAppUrl('123', { type: 'generic', source: 'Hero' })).toBeNull())
  it('removes all non-digits', () => expect(normalizeWhatsAppNumber('+7 701-000-00-00')).toBe('77010000000'))
  it('includes appointment fields without HTML interpolation', () => expect(createWhatsAppMessage({ type: 'appointment', source: 'Форма', name: '<Анна>', phone: '7701', service: 'Чистка', preferredTime: '18:00' })).toContain('Имя: <Анна>'))
})
