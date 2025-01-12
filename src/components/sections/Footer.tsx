import { Container } from '../layout/Container'
import { SocialIconLink } from '../ui/SocialIconLink'
import { socialLinks } from '../../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__intro">
          <p className="site-footer__brand">Bravio Media</p>
          <p className="site-footer__note">
            Creative direction, brand systems, and digital launches with a point of view.
          </p>
          <div className="site-footer__socials" aria-label="Social media">
            {socialLinks.map((social) => (
              <SocialIconLink key={social.label} social={social} />
            ))}
          </div>
        </div>
        <div className="site-footer__links">
          <a href="mailto:hello@braviomedia.co">hello@braviomedia.co</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
        </div>
      </Container>
    </footer>
  )
}
