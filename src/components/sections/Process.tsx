import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { processSteps } from '../../data/siteContent'

export function Process() {
  return (
    <Section id="process" className="process" aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="Process"
        title="A compact workflow built for speed, pressure, and strong taste."
        description="We keep the process visible and decisive so stakeholders stay aligned and the creative never gets watered down."
      />

      <div className="process__grid">
        {processSteps.map((item, index) => (
          <Card key={item.step} className={`process__card process__card--${index + 1}`} tone="cream">
            <span className="process__step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
