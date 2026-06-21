import { useState } from 'react'
import type { ServiceId } from '../../domain/clinic'
import type { PaymentId, QuizResponse, QuizView, TimingId } from '../../domain/quiz'
import type { ClinicContent } from '../../domain/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { calculateQuizResult, formatQuizResult } from '../../lib/quiz'
import { Section } from '../layout/Section'
import { ButtonLink } from '../ui/ButtonLink'
import { QuizLeadForm } from './QuizLeadForm'

const empty: QuizResponse = { serviceId: null, timingId: null, paymentId: null }
export function QuizSection({ content }: { content: ClinicContent }) {
  const [view, setView] = useState<QuizView>(0)
  const [response, setResponse] = useState<QuizResponse>(empty)
  const [error, setError] = useState('')
  const index = view === 'result' ? 2 : view
  const step = content.quiz.steps[index]
  const selected = step.id === 'service' ? response.serviceId : step.id === 'timing' ? response.timingId : response.paymentId
  const select = (id: string) => {
    setError('')
    if (step.id === 'service') setResponse((old) => ({ ...old, serviceId: id as ServiceId }))
    if (step.id === 'timing') setResponse((old) => ({ ...old, timingId: id as TimingId }))
    if (step.id === 'payment') setResponse((old) => ({ ...old, paymentId: id as PaymentId }))
  }
  const next = () => { if (!selected) { setError('Выберите один вариант, чтобы продолжить.'); return } setView(index === 2 ? 'result' : (index + 1) as QuizView) }
  const back = () => { setError(''); setView(view === 'result' ? 2 : Math.max(0, index - 1) as QuizView) }
  const result = calculateQuizResult(response, content.quiz)
  const resultText = formatQuizResult(result, content.quiz.fallbackText)
  const answers = [
    `Услуга: ${content.services.find((item) => item.id === response.serviceId)?.name.value ?? '—'}`,
    `Срок: ${content.quiz.steps[1].options.find((item) => item.id === response.timingId)?.label ?? '—'}`,
    `Оплата: ${content.quiz.steps[2].options.find((item) => item.id === response.paymentId)?.label ?? '—'}`,
  ]
  const href = buildWhatsAppUrl(content.clinic.whatsappNumber.value, { type: 'quiz', source: 'Результат квиза', answers, result: resultText })
  return <Section id="quiz" className="quiz-section" eyebrow="3 коротких шага" title="Узнайте ориентировочную стоимость" intro="Ответьте на несколько вопросов — это займёт меньше минуты."><div className="quiz-card">{view !== 'result' ? <><div className="quiz-progress"><span>Шаг {index + 1} из 3</span><div aria-hidden="true"><i style={{ width: `${((index + 1) / 3) * 100}%` }}/></div></div><fieldset><legend>{step.title}</legend><div className="quiz-options">{step.options.map((option) => <label key={option.id} className={selected === option.id ? 'is-selected' : ''}><input type="radio" name={step.id} value={option.id} checked={selected === option.id} onChange={() => select(option.id)}/><span>{option.label}</span><b aria-hidden="true">{selected === option.id ? '✓' : '○'}</b></label>)}</div></fieldset>{error && <p className="form-error" role="alert">{error}</p>}<div className="quiz-nav">{index > 0 && <button type="button" className="button button--ghost" onClick={back}>Назад</button>}<button type="button" className="button button--primary" onClick={next}>{index === 2 ? 'Показать результат' : 'Продолжить'}</button></div></> : <div className="quiz-result" aria-live="polite"><p className="eyebrow">Ваш ориентир</p><h3>{resultText}</h3><ul>{answers.map((answer) => <li key={answer}>{answer}</li>)}</ul><p>{result.disclaimer}</p><div className="hero-actions"><ButtonLink href={href}>Обсудить в WhatsApp</ButtonLink><button className="button button--secondary" type="button" onClick={back}>Изменить ответы</button></div><QuizLeadForm content={content} response={response} result={result} resultText={resultText}/></div>}</div></Section>
}
