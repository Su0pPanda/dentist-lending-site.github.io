import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { DoctorsSection } from './DoctorsSection'
it('renders four doctors with accessible images and placeholders', () => { render(<DoctorsSection content={clinicContent}/>); expect(screen.getAllByRole('article')).toHaveLength(4); expect(screen.getAllByRole('img').every((img) => img.getAttribute('alt'))).toBe(true); expect(screen.getAllByText('Заменить контент')).toHaveLength(4) })
