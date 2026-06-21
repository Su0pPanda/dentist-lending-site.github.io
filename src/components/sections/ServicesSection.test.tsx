import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders six services, three featured cards and contextual links', () => {
    const { container } = render(<ServicesSection content={clinicContent}/>)
    expect(container.querySelectorAll('.service-card')).toHaveLength(6)
    expect(container.querySelectorAll('.service-card--featured')).toHaveLength(3)
    expect(screen.getByText('от 350 000 ₸')).toBeInTheDocument()
    expect(decodeURIComponent(screen.getByRole('link', { name: /Записаться: Брекеты/ }).getAttribute('href')!)).toContain('Брекеты')
  })
})
