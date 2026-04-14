# Sys Connect Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar landing page estática de captação de leads para a Sys Connect em Next.js 15, com formulário de agendamento, FAB WhatsApp e estética corporate clean.

**Architecture:** Next.js 15 App Router com renderização estática. Conteúdo tipado em `content/*.ts` para edição simples. Formulário via Server Action com adapter de envio (Resend por padrão). Componentes divididos por responsabilidade em `components/layout` e `components/sections`.

**Tech Stack:** Next.js 15, TypeScript (strict), Tailwind CSS v4, shadcn/ui, Framer Motion, react-hook-form + Zod, Lucide icons, Resend (envio de email), next/font (Inter + Space Grotesk).

**Spec:** `docs/superpowers/specs/2026-04-13-sysconnect-landing-design.md`

---

## File Structure

**Scaffold (Task 1):** projeto Next.js inicial gera `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `postcss.config.mjs`.

**Arquivos criados por este plano:**

| Caminho | Responsabilidade |
|---|---|
| `app/globals.css` | Tokens CSS (cores, fontes), reset, utilidades Tailwind |
| `app/layout.tsx` | Fonts, metadata root, JSON-LD Organization, providers |
| `app/page.tsx` | Composição das seções da landing |
| `app/sitemap.ts` | Sitemap estático |
| `app/robots.ts` | robots.txt |
| `app/api/contact/route.ts` | Handler POST do formulário |
| `lib/utils.ts` | `cn()` helper (clsx + twMerge) |
| `lib/validators.ts` | Schema Zod do formulário de contato |
| `lib/send-contact.ts` | Adapter de envio (Resend ou webhook) |
| `content/site.ts` | Nome, tagline, contato, redes, nav |
| `content/services.ts` | Lista dos 4 serviços |
| `content/why-us.ts` | Pilares |
| `content/process.ts` | Etapas do processo |
| `content/faq.ts` | Perguntas e respostas |
| `content/stack.ts` | Lista de tecnologias |
| `components/ui/button.tsx` | shadcn button |
| `components/ui/input.tsx` | shadcn input |
| `components/ui/textarea.tsx` | shadcn textarea |
| `components/ui/select.tsx` | shadcn select |
| `components/ui/accordion.tsx` | shadcn accordion |
| `components/ui/checkbox.tsx` | shadcn checkbox |
| `components/layout/header.tsx` | Header fixo com nav + CTA |
| `components/layout/footer.tsx` | Footer |
| `components/layout/whatsapp-fab.tsx` | FAB WhatsApp |
| `components/layout/container.tsx` | Wrapper de largura máxima |
| `components/layout/section.tsx` | Wrapper padrão de seção (padding, id) |
| `components/sections/hero.tsx` | Hero |
| `components/sections/services.tsx` | Serviços |
| `components/sections/why-us.tsx` | Por que Sys Connect |
| `components/sections/process.tsx` | Processo (timeline) |
| `components/sections/tech-stack.tsx` | Faixa de tecnologias |
| `components/sections/cta-banner.tsx` | CTA intermediário |
| `components/sections/faq.tsx` | FAQ accordion |
| `components/sections/contact.tsx` | Formulário de contato |
| `components/motion/fade-in.tsx` | Wrapper de animação on-scroll |
| `public/og-image.svg` | Imagem OG fallback |
| `.env.example` | Variáveis de ambiente |
| `README.md` | Instruções de setup e deploy |

---

## Task 1: Bootstrap do projeto Next.js

**Files:**
- Create: tudo via `create-next-app`
- Working dir: `/home/juliocastro/Documentos/sysconnect`

- [ ] **Step 1: Inicializar o git no diretório**

```bash
cd /home/juliocastro/Documentos/sysconnect
git init
git config user.email "dev@sysconnect.local"
git config user.name "Sys Connect Dev"
```

- [ ] **Step 2: Criar projeto Next.js 15**

```bash
cd /home/juliocastro/Documentos/sysconnect
npx --yes create-next-app@15 . \
  --ts --tailwind --eslint --app \
  --src-dir=false --turbopack --import-alias="@/*" \
  --use-npm --yes
```

Expected: gera `package.json`, `app/`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `app/globals.css`.

- [ ] **Step 3: Verificar build inicial**

```bash
cd /home/juliocastro/Documentos/sysconnect && npm run build
```

Expected: build com sucesso.

- [ ] **Step 4: Commit inicial**

```bash
git add -A
git commit -m "chore: scaffold Next.js 15 project"
```

---

## Task 2: Dependências e utilitários

**Files:**
- Create: `lib/utils.ts`
- Modify: `package.json`

- [ ] **Step 1: Instalar dependências**

```bash
cd /home/juliocastro/Documentos/sysconnect
npm install framer-motion lucide-react clsx tailwind-merge \
  react-hook-form @hookform/resolvers zod \
  class-variance-authority \
  @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-label \
  resend
```

- [ ] **Step 2: Criar `lib/utils.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: add runtime dependencies and cn helper"
```

---

## Task 3: Design tokens e tipografia

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Substituir `app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-primary: #0A2540;
  --color-accent: #2563EB;
  --color-accent-hover: #1D4ED8;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F5F7FA;
  --color-text: #0F172A;
  --color-muted: #64748B;
  --color-border: #E2E8F0;

  --font-display: var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif;
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  --radius-lg: 0.75rem;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Configurar fonts em `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Sys Connect — Desenvolvimento de Software sob medida",
    template: "%s | Sys Connect",
  },
  description:
    "Desenvolvimento de software sob medida, aplicativos mobile, integrações e squads dedicados para empresas que buscam tecnologia de ponta.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sys Connect",
    images: ["/og-image.svg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sys Connect",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    description:
      "Desenvolvimento de software sob medida, aplicativos mobile, integrações e squads dedicados.",
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Rodar build**

```bash
cd /home/juliocastro/Documentos/sysconnect && npm run build
```

Expected: build passa.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add design tokens and typography"
```

---

## Task 4: Conteúdo tipado

**Files:**
- Create: `content/site.ts`, `content/services.ts`, `content/why-us.ts`, `content/process.ts`, `content/faq.ts`, `content/stack.ts`

- [ ] **Step 1: `content/site.ts`**

```ts
export const site = {
  name: "Sys Connect",
  tagline: "Desenvolvimento de software sob medida.",
  description:
    "Construímos sistemas, apps e integrações para empresas que não podem parar.",
  email: "contato@sysconnect.com.br",
  phone: "+55 (00) 00000-0000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000",
  social: {
    linkedin: "https://linkedin.com/company/sysconnect",
    instagram: "https://instagram.com/sysconnect",
    github: "https://github.com/sysconnect",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
```

- [ ] **Step 2: `content/services.ts`**

```ts
import { Code2, Smartphone, Plug, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Software sob medida",
    description:
      "Sistemas web e SaaS construídos para o seu processo, com arquitetura escalável e código próprio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    description:
      "Apps nativos e híbridos para iOS e Android, performáticos e prontos para crescer com a sua operação.",
  },
  {
    icon: Plug,
    title: "Integrações e APIs",
    description:
      "Conectamos seus sistemas internos, ERPs, gateways e serviços externos com APIs robustas e seguras.",
  },
  {
    icon: Users,
    title: "Squad as a Service",
    description:
      "Times dedicados de engenharia integrados ao seu produto, entregando em cadência ágil e previsível.",
  },
];
```

- [ ] **Step 3: `content/why-us.ts`**

```ts
import { ShieldCheck, Rocket, Layers, HandshakeIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Pillar = { icon: LucideIcon; title: string; description: string };

export const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Código próprio, sem caixa-preta",
    description: "Você é dono do código-fonte e da documentação desde o primeiro commit.",
  },
  {
    icon: Rocket,
    title: "Entregas ágeis",
    description: "Sprints curtas com demonstrações frequentes e ajustes rápidos de rota.",
  },
  {
    icon: Layers,
    title: "Stack moderna",
    description: "Tecnologias atuais e escaláveis, escolhidas para o seu contexto, não por modismo.",
  },
  {
    icon: HandshakeIcon,
    title: "Parceria de longo prazo",
    description: "Relação contínua de evolução de produto — não entregamos e desaparecemos.",
  },
];
```

- [ ] **Step 4: `content/process.ts`**

```ts
export type ProcessStep = { number: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Descoberta", description: "Entendemos o problema, usuários e restrições." },
  { number: "02", title: "Proposta", description: "Escopo, prazos e investimento claros e transparentes." },
  { number: "03", title: "Desenvolvimento", description: "Sprints com entregas demonstráveis a cada ciclo." },
  { number: "04", title: "Evolução", description: "Suporte contínuo, métricas e melhorias incrementais." },
];
```

- [ ] **Step 5: `content/faq.ts`**

```ts
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Qual o prazo típico de um projeto?",
    answer:
      "Depende do escopo, mas projetos sob medida costumam ter um MVP entregue em 8 a 16 semanas, com evolução contínua a partir daí.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Após a descoberta enviamos uma proposta com escopo fechado ou modelo por squad dedicado, com valores e prazos claros.",
  },
  {
    question: "De quem é a propriedade do código-fonte?",
    answer:
      "Sua. Todo o código, documentação e infraestrutura ficam em repositórios e contas controladas pela sua empresa.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos contratos de evolução e sustentação com SLA definido para manter o produto saudável e evoluindo.",
  },
  {
    question: "Trabalham integrados a times internos?",
    answer:
      "Sim. No modelo Squad as a Service nosso time se integra aos seus rituais e ferramentas (Jira, Slack, GitHub).",
  },
  {
    question: "Quais tecnologias vocês usam?",
    answer:
      "Selecionamos a stack mais adequada ao seu caso. Usamos principalmente TypeScript, React/Next.js, Node.js, Flutter, PostgreSQL e AWS.",
  },
];
```

- [ ] **Step 6: `content/stack.ts`**

```ts
export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Python",
];
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: add typed content modules"
```

---

## Task 5: Componentes shadcn/ui base

**Files:**
- Create: `components/ui/button.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, `accordion.tsx`, `checkbox.tsx`, `label.tsx`

- [ ] **Step 1: Inicializar shadcn**

```bash
cd /home/juliocastro/Documentos/sysconnect
npx --yes shadcn@latest init -d -y
```

Expected: cria `components.json` e `lib/utils.ts` (se ainda não existe).

- [ ] **Step 2: Adicionar componentes**

```bash
npx --yes shadcn@latest add button input textarea select accordion checkbox label -y
```

Expected: cria arquivos em `components/ui/`.

- [ ] **Step 3: Verificar build**

```bash
npm run build
```

Expected: build passa.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add shadcn/ui base components"
```

---

## Task 6: Layout primitives (Container, Section, FadeIn)

**Files:**
- Create: `components/layout/container.tsx`, `components/layout/section.tsx`, `components/motion/fade-in.tsx`

- [ ] **Step 1: `components/layout/container.tsx`**

```tsx
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: `components/layout/section.tsx`**

```tsx
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  containerClassName,
  alt = false,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        alt && "bg-[var(--color-bg-alt)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
```

- [ ] **Step 3: `components/motion/fade-in.tsx`**

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add layout primitives and motion wrapper"
```

---

## Task 7: Header com nav e CTA

**Files:**
- Create: `components/layout/header.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold text-[var(--color-primary)]">
          Sys<span className="text-[var(--color-accent)]">Connect</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]">
            <Link href="#contato">Agendar reunião</Link>
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]">
              <Link href="#contato" onClick={() => setOpen(false)}>
                Agendar reunião
              </Link>
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add fixed header with nav and mobile drawer"
```

---

## Task 8: FAB WhatsApp

**Files:**
- Create: `components/layout/whatsapp-fab.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export function WhatsAppFab() {
  const href = `https://wa.me/${site.whatsapp}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-[#20BD5C]"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add WhatsApp floating button"
```

---

## Task 9: Seção Hero

**Files:**
- Create: `components/sections/hero.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Desenvolvimento de Software
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Construímos software sob medida para empresas que não podem parar.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
            Sistemas, aplicativos e integrações de ponta a ponta. Tecnologia moderna,
            entregas ágeis e parceria de longo prazo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
            >
              <Link href="#contato">
                Agendar reunião <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#servicos">Ver serviços</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--color-muted)]">
            <span>• Stack moderna</span>
            <span>• Entregas ágeis</span>
            <span>• Código próprio do cliente</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-bg-alt)] to-white shadow-xl ring-1 ring-[var(--color-border)]" />
            <div className="absolute left-8 top-8 h-20 w-20 rounded-2xl bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/30" />
            <div className="absolute right-10 top-24 h-32 w-32 rounded-2xl bg-[var(--color-primary)]/5 ring-1 ring-[var(--color-primary)]/20" />
            <div className="absolute bottom-12 left-16 h-24 w-48 rounded-xl bg-white shadow-lg ring-1 ring-[var(--color-border)]" />
            <div className="absolute bottom-24 right-12 h-16 w-16 rounded-full bg-[var(--color-accent)] opacity-80" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add hero section"
```

---

## Task 10: Seção Serviços

**Files:**
- Create: `components/sections/services.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="servicos" alt>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Serviços
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">O que fazemos pela sua operação</h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Atuamos de ponta a ponta — do discovery à sustentação — com foco em entregar software
          que gera resultado de negócio.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((svc, i) => (
          <FadeIn key={svc.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-white p-8 transition hover:border-[var(--color-accent)] hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <svc.icon size={24} />
              </div>
              <h3 className="text-xl">{svc.title}</h3>
              <p className="mt-3 text-[var(--color-muted)]">{svc.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add services section"
```

---

## Task 11: Seção Por que Sys Connect

**Files:**
- Create: `components/sections/why-us.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { pillars } from "@/content/why-us";

export function WhyUs() {
  return (
    <Section>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Por que Sys Connect
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">Uma parceria de engenharia séria</h2>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <div className="flex h-full flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
                <p.icon size={20} />
              </div>
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{p.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add why-us section"
```

---

## Task 12: Seção Processo

**Files:**
- Create: `components/sections/process.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="processo" alt>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Processo
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">Do briefing à evolução contínua</h2>
      </FadeIn>

      <div className="relative mt-14 grid gap-10 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-[var(--color-border)] md:block" />
        {processSteps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.08}>
            <div className="relative">
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add process timeline section"
```

---

## Task 13: Seção Tech Stack

**Files:**
- Create: `components/sections/tech-stack.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { techStack } from "@/content/stack";

export function TechStack() {
  return (
    <Section className="py-16">
      <FadeIn>
        <p className="text-center text-sm uppercase tracking-widest text-[var(--color-muted)]">
          Tecnologias que dominamos
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {techStack.map((t) => (
            <span
              key={t}
              className="font-display text-xl font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add tech stack strip"
```

---

## Task 14: CTA Banner intermediário

**Files:**
- Create: `components/sections/cta-banner.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-[var(--color-primary)] px-8 py-16 text-center md:px-16 md:py-20">
            <h2 className="text-3xl text-white md:text-4xl">Vamos construir juntos.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              Conte seu desafio para a nossa equipe. Respondemos em até 1 dia útil com os próximos passos.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                <Link href="#contato">
                  Agendar reunião <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add intermediate CTA banner"
```

---

## Task 15: Seção FAQ

**Files:**
- Create: `components/sections/faq.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Perguntas frequentes</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Não encontrou o que procura? Fale com a gente pelo formulário ou WhatsApp.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--color-muted)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add FAQ section"
```

---

## Task 16: Validators e envio do formulário

**Files:**
- Create: `lib/validators.ts`, `lib/send-contact.ts`, `.env.example`

- [ ] **Step 1: `lib/validators.ts`**

```ts
import { z } from "zod";

export const projectTypes = [
  "Software sob medida",
  "Aplicativo mobile",
  "Integração / API",
  "Squad as a Service",
  "Outro",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Email inválido"),
  company: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  projectType: z.enum(projectTypes, { required_error: "Selecione um tipo" }),
  message: z.string().min(10, "Conte um pouco mais sobre seu projeto (mín. 10 caracteres)"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a política de privacidade" }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

- [ ] **Step 2: `lib/send-contact.ts`**

```ts
import { Resend } from "resend";
import type { ContactInput } from "./validators";

export async function sendContact(data: ContactInput): Promise<void> {
  const to = process.env.CONTACT_EMAIL_TO;
  const apiKey = process.env.RESEND_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  const body = `
Nome: ${data.name}
Email: ${data.email}
Empresa: ${data.company || "-"}
Telefone: ${data.phone || "-"}
Tipo: ${data.projectType}

Mensagem:
${data.message}
`.trim();

  if (apiKey && to) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Sys Connect <contato@sysconnect.com.br>",
      to,
      replyTo: data.email,
      subject: `Novo contato: ${data.projectType} — ${data.name}`,
      text: body,
    });
    return;
  }

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Webhook failed: ${res.status}`);
    return;
  }

  throw new Error("Nenhum destino de envio configurado (RESEND_API_KEY/CONTACT_EMAIL_TO ou CONTACT_WEBHOOK_URL).");
}
```

- [ ] **Step 3: `.env.example`**

```
NEXT_PUBLIC_SITE_URL=https://sysconnect.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5500000000000
CONTACT_EMAIL_TO=contato@sysconnect.com.br
RESEND_API_KEY=
CONTACT_WEBHOOK_URL=
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add contact validators and send adapter"
```

---

## Task 17: API route do formulário

**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Criar handler**

```ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendContact } from "@/lib/send-contact";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  try {
    await sendContact(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: "Falha ao enviar. Tente novamente ou use o WhatsApp." },
      { status: 500 },
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add contact API route"
```

---

## Task 18: Seção de contato (formulário)

**Files:**
- Create: `components/sections/contact.tsx`

- [ ] **Step 1: Criar componente**

```tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validators";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { company: "", phone: "" },
  });

  const consent = watch("consent");

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao enviar");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido");
    }
  };

  return (
    <Section id="contato">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Contato
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Vamos conversar sobre seu projeto</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Preencha o formulário e nossa equipe retorna em até 1 dia útil. Ou fale direto pelo WhatsApp.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--color-accent)]" />
              <a href={`mailto:${site.email}`} className="text-[var(--color-text)]">
                {site.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--color-accent)]" />
              <span>{site.phone}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "success" ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-8">
              <CheckCircle2 size={32} className="text-green-600" />
              <h3 className="text-xl">Mensagem enviada!</h3>
              <p className="text-[var(--color-muted)]">
                Recebemos seu contato. Nossa equipe retorna em até 1 dia útil.
              </p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Nome*</Label>
                  <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" {...register("company")} />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" {...register("phone")} />
                </div>
              </div>

              <div>
                <Label htmlFor="projectType">Tipo de projeto*</Label>
                <Select onValueChange={(v) => setValue("projectType", v as ContactInput["projectType"], { shouldValidate: true })}>
                  <SelectTrigger id="projectType" aria-invalid={!!errors.projectType}>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-600">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensagem*</Label>
                <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={!!consent}
                  onCheckedChange={(v) => setValue("consent", v === true ? true : (false as never), { shouldValidate: true })}
                />
                <Label htmlFor="consent" className="text-sm font-normal text-[var(--color-muted)]">
                  Concordo com o tratamento dos meus dados para fins de contato, conforme a LGPD.
                </Label>
              </div>
              {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
              >
                {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add contact form section"
```

---

## Task 19: Footer

**Files:**
- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Criar componente**

```tsx
import Link from "next/link";
import { Linkedin, Instagram, Github } from "lucide-react";
import { Container } from "./container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-lg font-bold text-[var(--color-primary)]">
              Sys<span className="text-[var(--color-accent)]">Connect</span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{site.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navegação</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-[var(--color-primary)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.phone}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Redes</h4>
            <div className="mt-3 flex gap-3 text-[var(--color-muted)]">
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href={site.social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted)] md:flex-row">
          <p>© {year} Sys Connect. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add footer"
```

---

## Task 20: Compor página + sitemap/robots + OG

**Files:**
- Modify: `app/page.tsx`
- Create: `app/sitemap.ts`, `app/robots.ts`, `public/og-image.svg`

- [ ] **Step 1: Substituir `app/page.tsx`**

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <TechStack />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
```

- [ ] **Step 2: `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
```

- [ ] **Step 3: `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
```

- [ ] **Step 4: `public/og-image.svg`**

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0A2540"/>
  <text x="80" y="300" font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="#FFFFFF">Sys Connect</text>
  <text x="80" y="370" font-family="system-ui, sans-serif" font-size="32" fill="#93C5FD">Desenvolvimento de software sob medida</text>
  <rect x="80" y="420" width="120" height="6" fill="#2563EB"/>
</svg>
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: compose landing page, sitemap, robots and OG image"
```

---

## Task 21: README e verificação final

**Files:**
- Create: `README.md`

- [ ] **Step 1: `README.md`**

```markdown
# Sys Connect — Landing Page

Landing page institucional da Sys Connect, focada em captação de leads.

## Stack

Next.js 15 · TypeScript · Tailwind v4 · shadcn/ui · Framer Motion · Resend

## Desenvolvimento

```bash
npm install
cp .env.example .env.local   # configure as variáveis
npm run dev
```

Abra http://localhost:3000.

## Variáveis de ambiente

Veja `.env.example`. Para envio de email, configure `RESEND_API_KEY` e `CONTACT_EMAIL_TO`.
Alternativamente, use `CONTACT_WEBHOOK_URL` para enviar para qualquer webhook (ex.: Zapier, Make).

## Build

```bash
npm run build
npm run start
```

## Edição de conteúdo

Todo o copy vive em `content/*.ts`. Ajuste os arquivos para editar serviços, FAQ, processo, etc.
```

- [ ] **Step 2: Rodar build final**

```bash
cd /home/juliocastro/Documentos/sysconnect && npm run build
```

Expected: build completa sem erros de tipo. Páginas estáticas geradas.

- [ ] **Step 3: Rodar lint**

```bash
npm run lint
```

Expected: sem erros.

- [ ] **Step 4: Iniciar servidor local e verificar manualmente**

```bash
npm run dev
```

Verificar no navegador:
- Hero carrega e CTAs fazem scroll para âncoras corretas
- Todas as seções visíveis e responsivas em 375px, 768px e 1440px
- FAB WhatsApp aparece em todas as seções
- FAQ abre/fecha
- Form exibe erros de validação; submissão retorna 500 amigável se envio não configurado
- Nenhum erro no console

- [ ] **Step 5: Commit final**

```bash
git add -A && git commit -m "docs: add README"
```

---

## Self-Review (para o executor)

Antes de considerar concluído:

- [ ] `npm run build` passa sem erros
- [ ] `npm run lint` passa
- [ ] Todas as seções do spec implementadas: Header, Hero, Serviços, Por que, Processo, Tech Stack, CTA, FAQ, Contato, Footer, FAB WhatsApp
- [ ] Formulário valida com Zod e responde com estados idle/submitting/success/error
- [ ] Metadata, sitemap, robots e JSON-LD presentes
- [ ] Responsivo em 375/768/1440px sem overflow
- [ ] `prefers-reduced-motion` respeitado
- [ ] Paleta e tipografia correspondem ao spec
