import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { Header } from './Header'

describe('Header', () => {
  it('opens, closes with Escape and closes after anchor choice', async () => {
    const user = userEvent.setup()
    render(<Header clinic={clinicContent.clinic}/>)
    const toggle = screen.getByRole('button', { name: /меню/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    await user.click(screen.getByRole('link', { name: 'Услуги' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
