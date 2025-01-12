import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function FinalCTA() {
  return (
    <Section id="contact" className="final-cta">
      <Card className="final-cta__card" tone="coral">
        <div className="final-cta__copy">
          <Badge tone="white">Start a project</Badge>
          <h2>Ready to turn a good offer into a brand people remember?</h2>
          <p>
            We partner with teams that need sharper positioning, bolder creative, and a
            launch page that can carry real commercial weight.
          </p>
        </div>
        <div className="final-cta__actions">
          <Button href="mailto:hello@braviomedia.co">Start the conversation</Button>
          <Button href="#top" variant="ghost">
            Back to top
          </Button>
        </div>
      </Card>
    </Section>
  )
}
