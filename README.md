# DeltaCare Website

A modern, responsive website for **DeltaCare**, an electrical and technical services company specializing in maintenance, inspection, testing, and technical support for critical infrastructure and electrical systems.

The website was rebuilt from the ground up using **Next.js, TypeScript, Tailwind CSS, and Lucide React**, with a focus on technical presentation, responsive design, interactive service exploration, and a professional engineering-focused visual identity.

---

## Overview

DeltaCare provides specialist technical services across electrical infrastructure, equipment maintenance, HVAC systems, lighting systems, and testing & commissioning.

This website presents DeltaCare's services through a modern, engineering-oriented interface designed to communicate reliability, technical capability, and professionalism.

### Key areas

- Electrical infrastructure maintenance
- Busduct / busbar maintenance
- Switchgear maintenance
- HVAC maintenance
- Transformer maintenance
- Aircraft warning lights
- Electrical testing & commissioning
- Projects
- Company information
- Contact and enquiry information

---

## Features

### Modern responsive design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Layouts, navigation, service sections, imagery, and typography adapt to different screen sizes.

### Technical visual language

The interface uses a DeltaCare-inspired engineering aesthetic featuring:

- Deep navy backgrounds
- DeltaCare blue accents
- Yellow technical highlights
- Engineering grid patterns
- Large technical typography
- Structured information layouts
- Technical corner markers
- Interactive hover states
- Image-driven service sections

### Interactive Services Directory

The Services page provides an interactive service selector allowing users to:

1. Browse the available disciplines
2. Preview each service visually
3. Read a short description
4. Navigate directly to the dedicated service page

### Dedicated Service Pages

Each major service has its own dedicated page with structured technical information.

Current services:

1. **Busduct / Busbar Maintenance**
2. **Switchgear Maintenance**
3. **HVAC Maintenance**
4. **Transformer Maintenance**
5. **Aircraft Warning Lights**
6. **Testing & Commissioning**

### Global Navigation

The website uses a shared navigation system across the application.

The navigation includes:

- Home
- About Us
- Services
- Projects
- Contact
- Contact CTA

The navigation remains accessible while scrolling and automatically returns the user to the top of a newly selected page.

### Global Footer

A shared footer provides:

- DeltaCare branding
- Company information
- Quick navigation
- Service links
- Contact information
- Legal/footer information

---

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about-us` |
| Services | `/services` |
| Projects | `/projects` |
| Contact | `/contact` |
| Busduct / Busbar Maintenance | `/services/busduct-busbar-maintenance` |
| Switchgear Maintenance | `/services/switchgear-maintenance` |
| HVAC Maintenance | `/services/hvac-maintenance` |
| Transformer Maintenance | `/services/transformer-maintenance` |
| Aircraft Warning Lights | `/services/aircraft-warning-lights` |
| Testing & Commissioning | `/services/testing-commissioning` |

---

## Services

### Busduct / Busbar Maintenance

Maintenance, inspection, testing, repair, cleaning, and technical support for busbar and busduct electrical distribution systems.

### Switchgear Maintenance

Maintenance and technical support for switchgear panels and associated electrical equipment, including inspection, repair, testing, and troubleshooting.

### HVAC Maintenance

Preventive, corrective, and technical maintenance support for HVAC systems focused on reliable operation and system performance.

### Transformer Maintenance

Transformer inspection, maintenance, repair, testing, diagnostics, and technical support.

### Aircraft Warning Lights

Installation, inspection, maintenance, and replacement of aircraft warning and obstruction lighting systems for tall structures.

### Testing & Commissioning

Electrical testing and commissioning support for busducts, panels, switchgear, transformers, and associated electrical systems.

---

## Technology Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

### Development

- Node.js
- npm
- Git
- GitHub

---

## Project Structure

```text
deltacare/
│
├── app/
│   ├── about-us/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── projects/
│   │   └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   ├── aircraft-warning-lights/
│   │   ├── busduct-busbar-maintenance/
│   │   ├── hvac-maintenance/
│   │   ├── switchgear-maintenance/
│   │   ├── testing-commissioning/
│   │   └── transformer-maintenance/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── public/
│   └── deltacare-logo.png
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
