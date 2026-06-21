import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { clinicContent } from '../../content/clinic'
import { QuizSection } from './QuizSection'

describe('QuizSection', () => {
  it('blocks empty step, preserves answers and displays result disclaimer', async () => {
    const user = userEvent.setup()
    render(<QuizSection content={clinicContent}/>)
    await user.click(screen.getByRole('button', { name: 'Продолжить' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Выберите')
    await user.click(screen.getByText('Брекеты'))
    await user.click(screen.getByRole('button', { name: 'Продолжить' }))
    await user.click(screen.getByText('В ближайшие дни'))
    await user.click(screen.getByRole('button', { name: 'Продолжить' }))
    await user.click(screen.getByText('Рассрочка Kaspi'))
    await user.click(screen.getByRole('button', { name: 'Показать результат' }))
    expect(screen.getByText(/350.*950.*₸/)).toBeInTheDocument()
    expect(screen.getByText(/Расчёт ориентировочный/)).toBeInTheDocument()
    expect(screen.getByLabelText('Ваше имя')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Изменить ответы' }))
    await user.click(screen.getByRole('button', { name: 'Назад' }))
    await user.click(screen.getByRole('button', { name: 'Назад' }))
    expect(screen.getByRole('radio', { name: 'Брекеты' })).toBeChecked()
  })
})
