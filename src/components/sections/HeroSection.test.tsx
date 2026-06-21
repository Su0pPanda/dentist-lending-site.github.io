import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders primary offer, two CTA and trust points', () => {
    render(<HeroSection content={clinicContent}/>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByText('Врачи с опытом от 4 лет')).toBeInTheDocument()
    expect(screen.getByText('Заменить контент')).toBeInTheDocument()
  })
  it('renders disabled-safe CTA for invalid WhatsApp number', () => {
    const content = { ...clinicContent, clinic: { ...clinicContent.clinic, whatsappNumber: { ...clinicContent.clinic.whatsappNumber, value: 'x' } } }
    render(<HeroSection content={content}/>)
    expect(screen.getAllByText(/Записаться|Получить консультацию/).every((node) => node.getAttribute('aria-disabled') === 'true')).toBe(true)
  })
})
