import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { ContactsSection } from './ContactsSection'
it('renders contacts, map placeholder and repeated CTA', () => { render(<ContactsSection content={clinicContent}/>); expect(screen.getByText(clinicContent.clinic.address.value)).toBeInTheDocument(); expect(screen.getByAltText(/Карта/)).toBeInTheDocument(); expect(screen.getByRole('link', { name: /Написать в WhatsApp/ })).toHaveAttribute('href', expect.stringContaining('wa.me')) })
