import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { caseStudies } from '../../data/siteContent'

export function FeaturedWork() {
  return (
    <Section id="work" className="work" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        eyebrow="Featured work"
        title="Selected projects that turned clarity into momentum."
        description="These snapshots show how we combine strategy, storytelling, and digital craft into launch-ready creative systems."
      />

      <div className="work__list">
        {caseStudies.map((study, index) => (
          <Card
            key={study.client}
            className={`work-card work-card--${index % 2 === 0 ? 'left' : 'right'}`}
            tone={index % 2 === 0 ? 'yellow' : 'white'}
          >
            <div className="work-card__meta">
              <span>{study.client}</span>
              <span>{study.category}</span>
            </div>
            <h3>{study.headline}</h3>
            <p>{study.summary}</p>
            <ul className="work-card__metrics" aria-label={`${study.client} results`}>
              {study.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
