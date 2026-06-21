import { useRef, useState, type FormEvent } from 'react'
import type { ClinicContent } from '../../domain/clinic'
import type { QuizResponse, QuizResult } from '../../domain/quiz'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Field } from '../ui/Field'

export function QuizLeadForm({ content, response, resultText }: { content: ClinicContent; response: QuizResponse; result: QuizResult; resultText: string }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const nameRef = useRef<HTMLInputElement>(null)
  const service = content.services.find((item) => item.id === response.serviceId)?.name.value ?? 'Не выбрана'
  const timing = content.quiz.steps[1].options.find((item) => item.id === response.timingId)?.label ?? 'Не выбран'
  const payment = content.quiz.steps[2].options.find((item) => item.id === response.paymentId)?.label ?? 'Не выбран'
  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next = { name: name.trim().length < 2 ? 'Укажите имя.' : undefined, phone: phone.replace(/\D/g, '').length < 7 ? 'Укажите корректный телефон.' : undefined }
    setErrors(next)
    if (next.name || next.phone) { nameRef.current?.focus(); return }
    const href = buildWhatsAppUrl(content.clinic.whatsappNumber.value, { type: 'quiz', source: 'Форма после квиза', answers: [`Услуга: ${service}`, `Срок: ${timing}`, `Оплата: ${payment}`], result: resultText, name, phone })
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
  }
  return <form className="quiz-lead" onSubmit={submit} noValidate><h4>Сохранить расчёт и уточнить детали</h4><div className="form-row"><Field ref={nameRef} id="quiz-name" label="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} error={errors.name}/><Field id="quiz-phone" label="Телефон" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} error={errors.phone}/></div><button className="button button--primary" type="submit">Перейти в WhatsApp <span aria-hidden="true">↗</span></button><small>Данные не сохраняются на сайте и будут переданы в WhatsApp после нажатия.</small></form>
}
