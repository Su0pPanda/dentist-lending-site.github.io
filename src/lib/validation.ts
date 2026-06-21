import type { AppointmentErrors, AppointmentField, AppointmentRequest } from '../domain/appointment'

export function validateAppointment(values: AppointmentRequest): AppointmentErrors {
  const errors: AppointmentErrors = {}
  const name = values.name.trim()
  const phone = values.phone.replace(/\D/g, '')
  const time = values.preferredTime.trim()
  if (name.length < 2 || name.length > 80) errors.name = 'Укажите имя длиной от 2 до 80 символов.'
  if (phone.length < 7 || phone.length > 15) errors.phone = 'Укажите телефон от 7 до 15 цифр.'
  if (!values.serviceId) errors.serviceId = 'Выберите услугу.'
  if (time.length < 2 || time.length > 120) errors.preferredTime = 'Укажите удобное время.'
  return errors
}

export function firstInvalidField(errors: AppointmentErrors): AppointmentField | null {
  const order: AppointmentField[] = ['name', 'phone', 'serviceId', 'preferredTime']
  return order.find((field) => errors[field]) ?? null
}
