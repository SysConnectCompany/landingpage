# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server with Turbopack at localhost:3000
npm run build     # production build with Turbopack
npm run start     # serve production build
npm run lint      # ESLint
```

No test runner is configured.

## Environment variables

Copy `.env.example` to `.env.local`. Key variables:

- `RESEND_API_KEY` + `CONTACT_EMAIL_TO` — enables email delivery via Resend
- `CONTACT_WEBHOOK_URL` — alternative: POST form data to a webhook (Zapier, Make, etc.)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number for the floating button (format: `5511999999999`)

The contact API route (`app/api/contact/route.ts`) tries Resend first, then the webhook. If neither is configured, it throws at runtime.

## Architecture

Single-page marketing/lead-capture site built with Next.js 15 App Router.

**Content layer** (`content/*.ts`) — all copy lives here as typed constants. Sections import directly from these files; never hardcode strings inside components.

**Section components** (`components/sections/`) — one file per page section, rendered top-to-bottom in `app/page.tsx`: Hero → Services → WhyUs → Process → TechStack → CtaBanner → Faq → Contact.

**Layout components** (`components/layout/`) — `Header`, `Footer`, `WhatsAppFab`, `Container` (width wrapper), `Section` (vertical padding + id anchor).

**Motion** (`components/motion/fade-in.tsx`) — thin Framer Motion wrapper used across sections for scroll-triggered entrance animations.

**UI primitives** (`components/ui/`) — shadcn/ui components (Radix-based). Add new ones via `npx shadcn add <component>`.

**Contact form flow** — `components/sections/contact.tsx` uses react-hook-form + Zod (`lib/validators.ts`). On submit it POSTs to `/api/contact`, which calls `lib/send-contact.ts`.

## Styling

Tailwind v4 (PostCSS plugin). Global styles and CSS variables (design tokens) are in `app/globals.css`. The `cn()` utility from `lib/utils.ts` merges class names (`clsx` + `tailwind-merge`).

## Content edits

To change copy, services, FAQ entries, or process steps, edit the relevant file in `content/`. These files export typed arrays/objects consumed directly by section components — no CMS, no API.
