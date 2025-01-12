import { useState } from 'react'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { faqItems } from '../../data/siteContent'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <Section id="faq" className="faq" aria-labelledby="faq-title">
      <SectionHeading
        id="faq-title"
        eyebrow="FAQ"
        title="Straight answers for teams moving fast."
        description="The process works best when expectations are visible early, so here are the questions we hear most often."
      />

      <div className="faq__list">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <Card key={item.question} as="div" className="faq-item" tone="white">
              <button
                type="button"
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                hidden={!isOpen}
                className="faq-item__panel"
              >
                <p>{item.answer}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
