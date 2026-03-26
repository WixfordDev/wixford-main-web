# Wixford — Premium Digital Technology Partner

**Wixford** is a premier digital technology firm delivering world-class software solutions to startups and Fortune 500 companies across 12 global markets.

## About

Built on **Next.js 15** with the App Router, this website showcases Wixford's full-service digital capabilities — from custom web architecture and enterprise mobile apps to strategic UI/UX design and end-to-end digital transformation.

The site is designed for performance, accessibility, and SEO — featuring smooth GSAP animations, Motion-powered transitions, fully responsive layouts across all devices, and server-side metadata per route for optimal search visibility.

## Services

- **Strategic UI/UX Design** — Research-backed interfaces that optimize conversion rates and user retention
- **Custom Web Architecture** — Secure, high-performance web applications built with Next.js, React, and Node.js
- **Enterprise Mobile Apps** — Native iOS/Android and cross-platform solutions built for performance and scale
- **Digital Transformation** — Modernizing legacy systems with cutting-edge cloud, AI, and DevOps technologies

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | GSAP, Motion (Framer Motion) |
| Smooth Scroll | Lenis |
| Carousel | Swiper, Splide |
| Icons | Lucide React |
| Fonts | Outfit, Playfair Display |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/              # About Us
│   ├── services/           # Services + [slug] detail pages
│   ├── projects/           # Portfolio + [slug] detail pages
│   ├── pricing/            # Pricing plans
│   ├── career/             # Career opportunities
│   └── contact/            # Contact & inquiry form
├── components/             # Shared UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhatWeDo.tsx
│   ├── WhyChooseUs.tsx
│   ├── FAQ.tsx
│   ├── GlobalFooter.tsx
│   └── ...
└── index.css               # Global styles & animations
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (port 3004)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3004](http://localhost:3004) to view the site.

## Key Features

- **Mobile-First Responsive Design** — Fully optimized across all screen sizes
- **Per-Route SEO Metadata** — Dynamic page titles and descriptions for every route
- **Performance Optimized** — Next.js Image optimization, lazy loading, and code splitting
- **Smooth Animations** — GSAP hero animations, Motion scroll-triggered transitions
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation support
- **Type-Safe** — Full TypeScript coverage with strict mode enabled

## Pages

| Route | Browser Tab Title |
|---|---|
| `/` | Wixford \| Premium Digital Technology Partner |
| `/about` | About \| Wixford |
| `/services` | Services \| Wixford |
| `/services/ui-ux-design` | UI/UX Design \| Wixford |
| `/services/web-development` | Web Development \| Wixford |
| `/services/app-development` | Mobile App Development \| Wixford |
| `/services/digital-transformation` | Digital Transformation \| Wixford |
| `/projects` | Projects \| Wixford |
| `/pricing` | Pricing \| Wixford |
| `/career` | Career \| Wixford |
| `/contact` | Contact \| Wixford |

## Deployment

The project is deployed on **Vercel** with automatic deployments on every push to the `main` branch.

```bash
# Deploy via Vercel CLI
vercel --prod
```

---

© 2026 Wixford Inc. All rights reserved.
