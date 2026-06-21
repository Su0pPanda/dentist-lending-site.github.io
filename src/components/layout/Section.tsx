import type { ReactNode } from 'react'
export function Section({ id, eyebrow, title, intro, children, className = '' }: { id: string; eyebrow?: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}><div className="container">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<div className="section-heading"><h2 id={`${id}-title`}>{title}</h2>{intro && <p>{intro}</p>}</div>{children}</div></section>
}
