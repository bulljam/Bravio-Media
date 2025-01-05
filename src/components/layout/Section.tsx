import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Container } from './Container'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  'aria-labelledby'?: string
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      className={clsx('section', 'scroll-reveal', isVisible && 'is-visible', className)}
      aria-labelledby={ariaLabelledBy}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
