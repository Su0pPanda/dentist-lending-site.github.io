import type { ServiceId } from './clinic'

export interface AppointmentRequest { name: string; phone: string; serviceId: ServiceId | ''; preferredTime: string }
export type AppointmentField = keyof AppointmentRequest
export type AppointmentErrors = Partial<Record<AppointmentField, string>>
export interface AppointmentFormState { values: AppointmentRequest; errors: AppointmentErrors; touched: Partial<Record<AppointmentField, boolean>> }
