import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Manifesto() {
  return (
    <Section id="manifesto" className="manifesto" aria-labelledby="manifesto-title">
      <div className="manifesto__grid">
        <SectionHeading
          id="manifesto-title"
          eyebrow="Agency manifesto"
          title="We do not polish safe ideas. We make brands impossible to ignore."
          description="Our job is to find the tension, sharpen the message, and design the page so the energy survives all the way to conversion."
        />

        <Card className="manifesto__card" tone="cream">
          <p>
            The best creative work feels decisive. It has a point of view, a memorable
            silhouette, and enough structure to move quickly once the launch starts.
          </p>
          <p>
            That is why our process mixes strategic clarity with editorial design instincts:
            the site should feel premium, but it should still sell.
          </p>
        </Card>
      </div>
    </Section>
  )
}
