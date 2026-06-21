import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { AppointmentSection } from './AppointmentSection'

describe('AppointmentSection', () => {
  beforeEach(() => vi.stubGlobal('open', vi.fn()))
  it('reports errors, focuses first field and hands valid values to WhatsApp without fetch', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    render(<AppointmentSection content={clinicContent}/>)
    await user.click(screen.getByRole('button', { name: /Записаться через/ }))
    expect(screen.getByLabelText('Ваше имя')).toHaveFocus()
    expect(screen.getByText('Выберите услугу.')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Ваше имя'), 'Анна')
    await user.type(screen.getByLabelText('Телефон'), '+7 700 123 45 67')
    await user.selectOptions(screen.getByLabelText('Услуга'), 'cleaning')
    await user.type(screen.getByLabelText('Удобное время'), 'После 18:00')
    await user.click(screen.getByRole('button', { name: /Записаться через/ }))
    expect(window.open).toHaveBeenCalledWith(expect.stringContaining('https://wa.me/'), '_blank', 'noopener,noreferrer')
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
