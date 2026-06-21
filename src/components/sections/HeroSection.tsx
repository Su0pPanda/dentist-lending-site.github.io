import type { ClinicContent } from '../../domain/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { ButtonLink } from '../ui/ButtonLink'
import { PlaceholderBadge } from '../ui/PlaceholderBadge'

export function HeroSection({ content }: { content: ClinicContent }) {
  const book = buildWhatsAppUrl(content.clinic.whatsappNumber.value, { type: 'generic', source: 'Первый экран', intent: 'Запись на приём' })
  const consult = buildWhatsAppUrl(content.clinic.whatsappNumber.value, { type: 'generic', source: 'Первый экран', intent: 'Получить консультацию' })
  return <section id="hero" className="hero" aria-labelledby="hero-title"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">{content.hero.eyebrow}</p><h1 id="hero-title">{content.hero.title}</h1><p className="hero-lead">{content.hero.description}</p><div className="hero-actions"><ButtonLink href={book}>Записаться в WhatsApp</ButtonLink><ButtonLink href={consult} variant="secondary">Получить консультацию</ButtonLink></div><ul className="trust-row">{content.hero.trustItems.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div><div className="hero-visual"><div className="hero-image-wrap"><img src={content.hero.image.src} alt={content.hero.image.alt} width={content.hero.image.width} height={content.hero.image.height} fetchPriority="high"/><PlaceholderBadge visible={content.hero.image.placeholder}/></div><div className="hero-note"><strong>4.9</strong><span>рейтинг пациентов</span><span aria-label="5 звёзд">★★★★★</span></div></div></div></section>
}
