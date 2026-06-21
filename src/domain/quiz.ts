import type { ServiceId } from './clinic'

export type TimingId = 'now' | 'month' | 'later'
export type PaymentId = 'full' | 'kaspi' | 'consult'
export type QuizStepId = 'service' | 'timing' | 'payment'
export interface QuizOption { id: string; label: string }
export interface QuizStep { id: QuizStepId; title: string; options: QuizOption[] }
export interface QuizResponse { serviceId: ServiceId | null; timingId: TimingId | null; paymentId: PaymentId | null }
export interface QuizResult { minimum: number; maximum: number; currency: string; disclaimer: string; isFallback: boolean }
export interface PriceRangeRule { serviceId: ServiceId; minimum: number; maximum: number }
export interface QuizConfig { steps: [QuizStep, QuizStep, QuizStep]; ranges: PriceRangeRule[]; fallbackText: string; disclaimer: string }
export type QuizView = 0 | 1 | 2 | 'result'
