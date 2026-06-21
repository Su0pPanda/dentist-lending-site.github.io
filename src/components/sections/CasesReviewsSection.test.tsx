import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { CasesReviewsSection } from './CasesReviewsSection'
it('renders before/after case disclaimer and rated reviews', () => { render(<CasesReviewsSection content={clinicContent}/>); expect(screen.getByText(/Результат индивидуален/)).toBeInTheDocument(); expect(screen.getAllByLabelText('5 из 5 звёзд')).toHaveLength(3); expect(screen.getByAltText(/до лечения/)).toBeInTheDocument() })
