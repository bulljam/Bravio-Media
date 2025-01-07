import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

type CardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  tone?: 'white' | 'yellow' | 'blue' | 'coral' | 'cream'
}

export function Card<T extends ElementType = 'article'>({
  as,
  children,
  className,
  tone = 'white',
}: CardProps<T>) {
  const Component = as ?? 'article'

  return <Component className={clsx('card', `card--${tone}`, className)}>{children}</Component>
}
