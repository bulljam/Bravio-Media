import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { navItems } from '../../data/siteContent'

export function Navbar() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand-mark" href="#top" aria-label="Bravio Media home">
          <span>Bravio</span>
          <span>Media</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#contact" variant="secondary">
          Book a call
        </Button>
      </Container>
    </header>
  )
}
