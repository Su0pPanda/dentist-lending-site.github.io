export type WhatsAppContext =
  | { type: 'generic'; source: string; intent?: string }
  | { type: 'service'; source: string; service: string }
  | { type: 'quiz'; source: string; answers: string[]; result: string; name?: string; phone?: string }
  | { type: 'appointment'; source: string; name: string; phone: string; service: string; preferredTime: string }

export const normalizeWhatsAppNumber = (value: string) => value.replace(/\D/g, '')

export function createWhatsAppMessage(context: WhatsAppContext) {
  const heading = 'Здравствуйте! Хочу записаться в стоматологическую клинику.'
  if (context.type === 'generic') return `${heading}\nЦель: ${context.intent ?? 'Запись на консультацию'}\nИсточник: ${context.source}`
  if (context.type === 'service') return `${heading}\nУслуга: ${context.service}\nИсточник: ${context.source}`
  if (context.type === 'quiz') return [heading, 'Ответы квиза:', ...context.answers.map((answer) => `• ${answer}`), `Ориентир: ${context.result}`, context.name ? `Имя: ${context.name}` : '', context.phone ? `Телефон: ${context.phone}` : '', `Источник: ${context.source}`].filter(Boolean).join('\n')
  return `${heading}\nИмя: ${context.name}\nТелефон: ${context.phone}\nУслуга: ${context.service}\nУдобное время: ${context.preferredTime}\nИсточник: ${context.source}`
}

export function buildWhatsAppUrl(number: string, context: WhatsAppContext): string | null {
  const digits = normalizeWhatsAppNumber(number)
  if (digits.length < 7 || digits.length > 15) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(createWhatsAppMessage(context))}`
}
