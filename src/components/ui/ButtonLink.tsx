import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> { href: string | null; children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost' }

export function ButtonLink({ href, children, variant = 'primary', className = '', ...props }: Props) {
  const classes = `button button--${variant} ${className}`.trim()
  if (!href) return <span className={`${classes} button--disabled`} aria-disabled="true" title="Настройте номер WhatsApp">{children}</span>
  return <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>{children}<span aria-hidden="true">↗</span></a>
}
