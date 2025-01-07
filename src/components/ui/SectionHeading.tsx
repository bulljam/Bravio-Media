import clsx from 'clsx'
import { Badge } from './Badge'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <div className={clsx('section-heading', `section-heading--${align}`)}>
      <Badge tone="white">{eyebrow}</Badge>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
