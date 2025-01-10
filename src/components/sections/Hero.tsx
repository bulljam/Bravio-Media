import { Section } from '../layout/Section'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { StatPill } from '../ui/StatPill'
import { heroStats } from '../../data/siteContent'

export function Hero() {
  return (
    <Section id="top" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <Badge>Creative agency for brands that hate blending in</Badge>
          <h1>We build loud brands, launch moments, and digital experiences with bite.</h1>
          <p className="hero__lede">
            Bravio Media helps ambitious teams turn fuzzy positioning into bold stories,
            sharper visuals, and landing pages people actually remember.
          </p>
          <div className="hero__actions">
            <Button href="#work">See featured work</Button>
            <Button href="#services" variant="ghost">
              Explore services
            </Button>
          </div>
          <div className="hero__stats" aria-label="Agency highlights">
            {heroStats.map((stat) => (
              <StatPill key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <Card className="hero-panel hero-panel--main" tone="yellow">
            <p>Campaign direction</p>
            <strong>Big idea</strong>
          </Card>
          <Card className="hero-panel hero-panel--offset" tone="blue">
            <p>Web design</p>
            <strong>Hard-working pages</strong>
          </Card>
          <Card className="hero-panel hero-panel--stack" tone="coral">
            <p>Brand systems</p>
            <strong>Rules with swagger</strong>
          </Card>
        </div>
      </div>
    </Section>
  )
}
