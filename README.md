# Bravio Media

Creative agency landing page built with React, TypeScript, and Vite.

![Bravio Media homepage preview](src/assets/home.png)

## Overview

Bravio Media is a bold single-page marketing site for a creative agency. The interface uses thick black borders, hard shadows, flat high-contrast color blocks, oversized typography, tactile buttons, and slightly asymmetric layouts.

The site is structured as a reusable React component system rather than a single monolithic page, with content driven from typed local data objects.

## Features

- Responsive single-page landing experience
- Sticky anchor navigation with smooth scrolling
- Scroll reveal animations and interactive hover states
- Accessible FAQ accordion
- Reusable UI primitives for buttons, cards, badges, and section headings
- Typed content model for services, case studies, testimonials, process steps, FAQ items, and social links
- Custom social icons that match the site design system

## Tech Stack

- React 19
- TypeScript
- Vite
- Plain CSS
- `clsx`
- `@fontsource/space-grotesk`

## Sections

- Navbar
- Hero
- Agency manifesto
- Services
- Featured work / case studies
- Process
- Testimonials
- Pricing teaser
- FAQ
- Final CTA
- Footer

## Design System

- Thick borders and hard offset shadows
- Warm, playful palette with strong contrast
- Space Grotesk for both display and body text
- Tactile interaction states with hover/press feedback
- Slight asymmetry to avoid generic landing-page composition

## Project Structure

```text
src/
  assets/
    home.png
  components/
    layout/
    sections/
    ui/
  data/
    siteContent.ts
  hooks/
    useScrollReveal.ts
  styles/
    tokens.css
    base.css
    app.css
  App.tsx
  index.css
  main.tsx
```

## Getting Started

### Install

```bash
pnpm install
```

### Start the dev server

```bash
pnpm dev
```

### Production build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## Notes

- Styling is plain CSS, organized into tokens, base styles, and app-level layout rules.
- Content is centralized in `src/data/siteContent.ts` for easy copy updates.
- Motion respects reduced-motion preferences.
