import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { BenefitsSection } from './BenefitsSection'
it('renders trust benefits and equipment argument', () => { render(<BenefitsSection content={clinicContent}/>); expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(5); expect(screen.getByText('Современное оснащение')).toBeInTheDocument() })
