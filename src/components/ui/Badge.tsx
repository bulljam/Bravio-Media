import type { ReactNode } from 'react'
import clsx from 'clsx'

type BadgeProps = {
  children: ReactNode
  tone?: 'yellow' | 'blue' | 'coral' | 'white'
  className?: string
}

export function Badge({ children, tone = 'yellow', className }: BadgeProps) {
  return <span className={clsx('badge', `badge--${tone}`, className)}>{children}</span>
}
