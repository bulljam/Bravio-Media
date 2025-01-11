import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { testimonials } from '../../data/siteContent'

export function Testimonials() {
  return (
    <Section className="testimonials" aria-labelledby="testimonials-title">
      <SectionHeading
        id="testimonials-title"
        eyebrow="Testimonials"
        title="Clients hire us for a look. They stay for the clarity."
        description="Every engagement is designed to create stronger decisions, not just prettier artifacts."
      />

      <div className="testimonials__grid">
        {testimonials.map((item, index) => (
          <Card key={item.name} className={`testimonial testimonial--${index + 1}`} tone="white">
            <p className="testimonial__quote">“{item.quote}”</p>
            <div className="testimonial__author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
