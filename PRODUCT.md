# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (with Framer Motion)

User-confirmed stack for this greenfield build. Single-page scrolling marketing site.

## Users

Primary users are owners/managers of mining service companies (mining contractors, blasting services, hauling, drilling, etc.) who need IUJP legalization (Izin Usaha Jasa Pertambangan) but are unfamiliar with or lack the time to handle the bureaucracy themselves.

Their job: obtain/legitimize their mining-operation-service permit without getting lost in the regulatory process.

## Product Purpose

The website promotes and sells "Izin IUJP" — a legal/permit consulting service that handles IUJP (Mining Operation Service Permit) end-to-end: consultation, document verification, permit application, monitoring, and handover.

Success means converting site visitors into consultation/contact inquiries.

## Positioning

A credible, institutional, authoritative legal-consulting brand in mining & regulation — distinct from generic SaaS law-firm templates and old-fashioned notary-office layouts. Presented in a semi-editorial (business magazine / industry publication) style.

## Operating Context

- Indonesian market only (Bahasa Indonesia content, v1).
- Clients are B2B: mining service companies.
- Service is delivered via consultation/contact (WhatsApp/contact form), not an online payment/checkout flow.
- iOS/web browsing context; site must be responsive across mobile/tablet/desktop.

## Capabilities and Constraints

- Single-page scrolling website with sticky nav.
- Sections: Hero, Trust/Credibility, About (why IUJP matters), Services, Process timeline, Value Proposition, Statistics, Testimonials, FAQ, CTA/Contact, Footer.
- v1 is Indonesian-only; no multi-language.
- No client dashboard/login area (v1).
- No blog/articles (possible phase 2).
- No payment gateway (service via manual consultation/contact).
- Accessible: WCAG AA minimum color contrast; proper heading hierarchy; focus states; alt text on all images.

## Brand Commitments

- Name: "Izin IUJP" (wordmark placeholder using Fraunces font until client provides official logo).
- Tone: firm, professional, solution-oriented, slightly bold-industrial; NOT playful, childish, or techy/SaaS.
- Design tokens committed per PRD:
  - Colors: `#15130F` (bg-primary), `#1F1C17` (bg-secondary), `#FAF8F4` (surface), `#F5F1EA` (text-primary), `#211E19` (text-body-dark), `#C9622A` (accent), `#8C5A3A` (accent-muted), line rgba(245,241,234,0.15)
  - Fonts: Fraunces (display/serif) + Inter (body/sans)
- Editorial/industrial visual direction (single accent color; keep it serious).

## Evidence on Hand

- PRD (PRD-Izin-IUJP.md) defining full structure, design system, and content placeholders.
- No real client photos, testimonials, statistics, logo, or final copy yet — all placeholder, flagged as `TODO: konten dari klien` (content from client) in code.

## Product Principles

1. Credible and institutional — authority over flash; mining & regulation expertise is the product.
2. Semi-editorial presentation — magazine-like structure, generous whitespace, asymmetric layout, thin dividers — never generic SaaS or outdated notary style.
3. Minimize bureaucracy friction — the core promise; transparent process builds trust.
4. Consistent "industrial editorial" visual language — dark base + one burnt-orange accent, unified imagery treatment.
5. Content is provisional until client provides final copy/photos/data — build the structure and style now, swap placeholders later without redesign.

## Accessibility & Inclusion

- WCAG AA minimum contrast for text on dark backgrounds.
- All interactive elements have clear focus states (accent outline).
- Alt text on all images.
- Semantic HTML (`<section>`, `<nav>`, `<article>`) with correct H1→H2→H3 hierarchy (no skipped levels).
