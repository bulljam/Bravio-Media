import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { services } from '../../data/siteContent'

export function Services() {
  return (
    <Section id="services" className="services" aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="Strategy, visuals, and launch systems built to work together."
        description="Every engagement is structured to move from brand tension to public-facing execution without losing momentum."
      />

      <div className="services__grid">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className={`services__card services__card--${index + 1}`}
            tone={index === 1 ? 'blue' : index === 2 ? 'coral' : 'white'}
          >
            <span className="services__index">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
