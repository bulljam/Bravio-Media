export type NavItem = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  deliverables: string[]
}

export type CaseStudy = {
  client: string
  category: string
  headline: string
  summary: string
  metrics: string[]
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'instagram' | 'linkedin' | 'dribbble' | 'twitter'
}

export const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export const heroStats = [
  { value: '28', label: 'launches shipped in the last year' },
  { value: '11', label: 'markets activated across brand campaigns' },
  { value: '4.9/5', label: 'average client satisfaction score' },
]

export const services: Service[] = [
  {
    title: 'Brand systems',
    description:
      'Identity design, visual language, voice principles, and campaign-ready toolkits built to stay sharp under pressure.',
    deliverables: ['Naming directions', 'Identity rules', 'Campaign art direction'],
  },
  {
    title: 'Launch campaigns',
    description:
      'Integrated launch concepts that align landing pages, social edits, paid creative, and motion assets around one idea.',
    deliverables: ['Hero concepts', 'Launch messaging', 'Creative production'],
  },
  {
    title: 'Digital experiences',
    description:
      'Conversion-aware websites and immersive landing pages that feel editorial, expressive, and commercially focused.',
    deliverables: ['UX direction', 'Responsive UI', 'Content systems'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    client: 'Northstar Soda',
    category: 'Brand relaunch',
    headline: 'Turned a niche beverage label into a shelf-dominating summer drop.',
    summary:
      'We rebuilt the identity, campaign language, and launch site around louder packaging and irreverent product storytelling.',
    metrics: ['3.4x pre-order lift', '18M earned impressions', '42% faster sell-through'],
  },
  {
    client: 'Atlas Studio',
    category: 'Website overhaul',
    headline: 'Designed a portfolio platform that felt as bold as the work it sold.',
    summary:
      'The new site paired a crisp narrative flow with modular case-study layouts that helped their team pitch larger retainers.',
    metrics: ['57% more qualified leads', '2.1x portfolio engagement', '31% lower bounce rate'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Interrogate the brief',
    description:
      'We pressure-test the goal, audience, and offer until the real tension in the project is obvious.',
  },
  {
    step: '02',
    title: 'Build the angle',
    description:
      'Strategy, words, and visual territory are shaped together so the concept lands hard and coherently.',
  },
  {
    step: '03',
    title: 'Design the system',
    description:
      'We turn the idea into flexible layouts, assets, and rules that scale from hero moments to detail states.',
  },
  {
    step: '04',
    title: 'Launch with intent',
    description:
      'Everything ships with production discipline, clean handoff, and enough structure for the next campaign to move faster.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'They gave us a point of view, not just a prettier homepage. The work changed how our team pitched the company.',
    name: 'Lena Ortiz',
    role: 'CMO, Atlas Studio',
  },
  {
    quote:
      'Every deliverable felt sharp, commercial, and weird in the right way. We had launch assets that actually stood out.',
    name: 'Marcus Vale',
    role: 'Founder, Northstar Soda',
  },
  {
    quote:
      'Fast, opinionated, and deeply organized. They can go from strategy call to finished page without losing the thread.',
    name: 'Nadia Brooks',
    role: 'Brand Director, Signal House',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'What kinds of clients do you work best with?',
    answer:
      'Teams with a strong product or service and the appetite to look distinctive. We are especially useful when the brand feels capable but forgettable.',
  },
  {
    question: 'Do you handle both strategy and execution?',
    answer:
      'Yes. Most projects start with positioning and messaging, then move into design systems, launch assets, and the final web experience.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Focused campaign and landing-page projects usually run four to six weeks. Broader brand systems can run eight to twelve weeks depending on scope.',
  },
  {
    question: 'Can you plug into an existing internal team?',
    answer:
      'Yes. We often work as a compact strike team alongside in-house brand, product, and marketing leads to accelerate delivery.',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
]
