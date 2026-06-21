import { describe, expect, it } from 'vitest'
import { clinicContent } from '../content/clinic'
import { calculateQuizResult, formatQuizResult } from './quiz'

describe('quiz calculation', () => {
  it('returns configured range for complete answers', () => {
    const result = calculateQuizResult({ serviceId: 'braces', timingId: 'now', paymentId: 'kaspi' }, clinicContent.quiz)
    expect(result).toMatchObject({ minimum: 350000, maximum: 950000, isFallback: false })
    expect(formatQuizResult(result, 'fallback')).toContain('350')
  })
  it('returns fallback for incomplete or unsupported answers', () => {
    const result = calculateQuizResult({ serviceId: 'veneers', timingId: 'later', paymentId: 'full' }, clinicContent.quiz)
    expect(result.isFallback).toBe(true)
    expect(formatQuizResult(result, clinicContent.quiz.fallbackText)).toBe(clinicContent.quiz.fallbackText)
  })
})
