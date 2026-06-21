import { useEffect, useState } from 'react'
import type { ClinicProfile } from '../../domain/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { ButtonLink } from '../ui/ButtonLink'

const links = [['services', 'Услуги'], ['quiz', 'Расчёт'], ['doctors', 'Врачи'], ['results', 'Результаты'], ['contacts', 'Контакты']] as const

export function Header({ clinic }: { clinic: ClinicProfile }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  const href = buildWhatsAppUrl(clinic.whatsappNumber.value, { type: 'generic', source: 'Шапка сайта' })
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#hero" aria-label="На первый экран"><span className="brand__mark" aria-hidden="true">D</span><span>{clinic.logoText.value}</span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span>{open ? 'Закрыть' : 'Меню'}</span><span className="menu-toggle__icon" aria-hidden="true">{open ? '×' : '≡'}</span></button>
    <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Основная навигация">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<ButtonLink href={href} className="header-cta">WhatsApp</ButtonLink></nav>
  </div></header>
}
