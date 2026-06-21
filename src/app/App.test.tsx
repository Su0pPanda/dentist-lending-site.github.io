import { render } from '@testing-library/react'
import { expect, it } from 'vitest'
import { App } from './App'
it('renders exactly eight semantic sections and one h1', () => { const { container } = render(<App/>); expect(container.querySelectorAll('main > section')).toHaveLength(8); expect(container.querySelectorAll('h1')).toHaveLength(1) })
