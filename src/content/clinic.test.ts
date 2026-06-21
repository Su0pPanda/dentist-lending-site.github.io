import { describe, expect, it } from 'vitest'
import { clinicContent } from './clinic'

describe('clinic content contract', () => {
  it('has fixed collection cardinality', () => {
    expect(clinicContent.services).toHaveLength(6)
    expect(clinicContent.services.filter((item) => item.featured)).toHaveLength(3)
    expect(clinicContent.benefits.length).toBeGreaterThanOrEqual(5)
    expect(clinicContent.doctors.length).toBeGreaterThanOrEqual(3)
    expect(clinicContent.doctors.length).toBeLessThanOrEqual(4)
    expect(clinicContent.quiz.steps).toHaveLength(3)
  })
  it('uses stable service IDs and accessible image alternatives', () => {
    expect(clinicContent.services.map((item) => item.id)).toEqual(['braces', 'whitening', 'caries', 'veneers', 'implants', 'cleaning'])
    expect(clinicContent.doctors.every((doctor) => doctor.photo.alt.length > 0)).toBe(true)
    expect(clinicContent.cases.every((item) => item.beforeImage.alt && item.afterImage.alt && item.disclaimer)).toBe(true)
  })
  it('marks clinic-specific content as placeholders', () => expect(clinicContent.clinic.name.placeholder && clinicContent.doctors.every((doctor) => doctor.placeholder)).toBe(true))
})
