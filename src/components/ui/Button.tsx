import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type LinkButtonProps = SharedProps & {
  href: string
  onClick?: never
}

type ActionButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: never
  }

type ButtonProps = LinkButtonProps | ActionButtonProps

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props
  const classes = clsx('button', `button--${variant}`, className)

  if ('href' in props) {
    return (
      <a className={classes} href={props.href}>
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
