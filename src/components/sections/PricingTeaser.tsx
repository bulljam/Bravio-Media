import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function PricingTeaser() {
  return (
    <Section className="pricing" aria-labelledby="pricing-title">
      <Card className="pricing__card" tone="blue">
        <div>
          <p className="pricing__eyebrow">Pricing teaser</p>
          <h2 id="pricing-title">Flexible engagements for teams that need bold work without agency bloat.</h2>
          <p>
            Most launch-focused projects start between $12k and $30k depending on scope,
            timeline, and production complexity.
          </p>
        </div>
        <div className="pricing__cta">
          <strong>Need a sharper estimate?</strong>
          <Button href="#contact" variant="secondary">
            Get a scoped proposal
          </Button>
        </div>
      </Card>
    </Section>
  )
}
