import type { SocialLink } from '../../data/siteContent'

type SocialIconLinkProps = {
  social: SocialLink
}

function SocialIcon({ icon }: Pick<SocialLink, 'icon'>) {
  switch (icon) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="17.5" cy="6.8" r="1.4" fill="currentColor" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="8" cy="9" r="1.2" fill="currentColor" />
          <path d="M8 11.5v4.5M11.5 11.5V16M11.5 13.2c0-1.1.8-1.9 1.9-1.9s1.8.7 1.8 2V16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'dribbble':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M7.3 8.4c2.7 1.3 5 4.7 6 8.8M8.2 16.8c2-2 5.4-3.1 8.5-2.8M6 12c3.4.2 7-.7 10-2.6M10 4.2c2.1 1.8 4 4.7 5 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 7.2c-.5.2-1 .3-1.6.4.6-.3 1-.8 1.2-1.5-.5.3-1.2.6-1.8.7a2.8 2.8 0 0 0-4.8 1.9c0 .2 0 .4.1.6-2.3-.1-4.4-1.2-5.8-3-.3.5-.4 1-.4 1.6 0 1 .5 1.9 1.3 2.4-.5 0-.9-.1-1.3-.3 0 1.4 1 2.7 2.4 2.9-.2.1-.5.1-.8.1-.2 0-.4 0-.5-.1.4 1.2 1.5 2.1 2.8 2.1A5.7 5.7 0 0 1 5 16.9 8 8 0 0 0 9.3 18c5.2 0 8.1-4.4 8.1-8.1v-.4c.6-.4 1.1-.9 1.6-1.5Z" fill="currentColor" />
        </svg>
      )
  }
}

export function SocialIconLink({ social }: SocialIconLinkProps) {
  return (
    <a
      className="social-link"
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      title={social.label}
    >
      <SocialIcon icon={social.icon} />
      <span>{social.label}</span>
    </a>
  )
}
