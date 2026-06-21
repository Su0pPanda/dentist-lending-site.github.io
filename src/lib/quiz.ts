import type { QuizConfig, QuizResponse, QuizResult } from '../domain/quiz'

export function calculateQuizResult(response: QuizResponse, config: QuizConfig): QuizResult {
  const range = config.ranges.find((item) => item.serviceId === response.serviceId)
  if (!range || !response.timingId || !response.paymentId) return { minimum: 0, maximum: 0, currency: '₸', disclaimer: config.disclaimer, isFallback: true }
  return { minimum: range.minimum, maximum: range.maximum, currency: '₸', disclaimer: config.disclaimer, isFallback: false }
}

export function formatQuizResult(result: QuizResult, fallbackText: string) {
  if (result.isFallback) return fallbackText
  return `${result.minimum.toLocaleString('ru-RU')}–${result.maximum.toLocaleString('ru-RU')} ${result.currency}`
}
