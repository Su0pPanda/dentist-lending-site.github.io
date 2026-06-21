import { useRef, useState, type FormEvent } from 'react'
import type { AppointmentField, AppointmentRequest } from '../../domain/appointment'
import type { ClinicContent, ServiceId } from '../../domain/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { firstInvalidField, validateAppointment } from '../../lib/validation'
import { Section } from '../layout/Section'
import { Field } from '../ui/Field'

const initial: AppointmentRequest = { name: '', phone: '', serviceId: '', preferredTime: '' }
export function AppointmentSection({ content }: { content: ClinicContent }) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<ReturnType<typeof validateAppointment>>({})
  const refs = { name: useRef<HTMLInputElement>(null), phone: useRef<HTMLInputElement>(null), serviceId: useRef<HTMLSelectElement>(null), preferredTime: useRef<HTMLInputElement>(null) }
  const update = (field: AppointmentField, value: string) => setValues((old) => ({ ...old, [field]: value }))
  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next = validateAppointment(values)
    setErrors(next)
    const invalid = firstInvalidField(next)
    if (invalid) { refs[invalid].current?.focus(); return }
    const service = content.services.find((item) => item.id === values.serviceId)?.name.value ?? values.serviceId
    const href = buildWhatsAppUrl(content.clinic.whatsappNumber.value, { type: 'appointment', source: 'Форма записи', name: values.name.trim(), phone: values.phone, service, preferredTime: values.preferredTime.trim() })
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
  }
  return <Section id="appointment" className="appointment-section" eyebrow="Удобная запись" title="Сделайте первый шаг к здоровой улыбке" intro="Оставьте удобные для сообщения данные — WhatsApp откроется с уже подготовленным текстом."><div className="appointment-wrap"><div className="appointment-aside"><span>01</span><h3>Заполните короткую форму</h3><p>Администратор ответит в ближайшее рабочее время, уточнит детали и предложит свободные окна.</p><div className="privacy-note"><b aria-hidden="true">⌁</b><p>Сайт не сохраняет введённые данные. Передача произойдёт только после перехода в WhatsApp.</p></div></div><form className="appointment-form" onSubmit={submit} noValidate><div className="form-grid"><Field ref={refs.name} id="name" label="Ваше имя" autoComplete="name" value={values.name} onChange={(e) => update('name', e.target.value)} error={errors.name}/><Field ref={refs.phone} id="phone" label="Телефон" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} error={errors.phone}/><Field ref={refs.serviceId} as="select" options={content.services.map((service) => ({ value: service.id, label: service.name.value }))} id="serviceId" label="Услуга" value={values.serviceId} onChange={(e) => update('serviceId', e.target.value as ServiceId)} error={errors.serviceId}/><Field ref={refs.preferredTime} id="preferredTime" label="Удобное время" placeholder="Например, будни после 18:00" value={values.preferredTime} onChange={(e) => update('preferredTime', e.target.value)} error={errors.preferredTime}/></div><button className="button button--primary button--wide" type="submit">Записаться через WhatsApp <span aria-hidden="true">↗</span></button><p className="form-consent">Нажимая кнопку, вы соглашаетесь с <a href={content.legal.privacy}>политикой конфиденциальности</a> и передачей данных в WhatsApp.</p></form></div></Section>
}
