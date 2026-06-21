import { describe, expect, it } from 'vitest'
import { firstInvalidField, validateAppointment } from './validation'

describe('appointment validation', () => {
  it('returns all required field errors', () => {
    const errors = validateAppointment({ name: '', phone: '', serviceId: '', preferredTime: '' })
    expect(Object.keys(errors)).toEqual(['name', 'phone', 'serviceId', 'preferredTime'])
    expect(firstInvalidField(errors)).toBe('name')
  })
  it('accepts a valid request and formatted phone', () => expect(validateAppointment({ name: 'Анна', phone: '+7 700 123 45 67', serviceId: 'cleaning', preferredTime: 'После 18:00' })).toEqual({}))
})
