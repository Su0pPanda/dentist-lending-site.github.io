import type { ClinicContent } from '../../domain/clinic'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { PlaceholderBadge } from '../ui/PlaceholderBadge'
export function BenefitsSection({ content }: { content: ClinicContent }) { return <Section id="benefits" eyebrow="Почему нам доверяют" title="Спокойствие начинается с понятного подхода" intro="Мы продумали каждый этап — от первой консультации до завершения лечения."><div className="benefits-grid">{content.benefits.map((benefit) => <Card key={benefit.id} className="benefit-card"><span className="benefit-icon" aria-hidden="true">{benefit.icon}</span><h3>{benefit.title.value}</h3><p>{benefit.description.value}</p><PlaceholderBadge visible={benefit.placeholder}/></Card>)}</div></Section> }
