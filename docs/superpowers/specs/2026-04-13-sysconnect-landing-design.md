# Sys Connect — Landing Page Design Spec

**Data:** 2026-04-13
**Status:** Aprovado para implementação

## Objetivo

Landing page institucional da Sys Connect (desenvolvimento de software) focada em captura de leads qualificados. Transmitir credibilidade através de estética corporativa clean e moderna.

## Objetivos de Conversão

- **Primário:** Agendamento de reunião via formulário de contato
- **Secundário:** Contato direto via WhatsApp (FAB flutuante persistente)

## Serviços em Destaque

1. Desenvolvimento de software sob medida (sistemas web, SaaS)
2. Aplicativos mobile
3. Integrações e APIs
4. Squad as a Service (consultoria/alocação)

## Stack Técnica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript (strict)
- **Estilo:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Animações:** Framer Motion (uso discreto, on-scroll)
- **Ícones:** Lucide React
- **Formulário:** react-hook-form + Zod
- **Fonts:** `next/font` (Space Grotesk display, Inter body)
- **Renderização:** SSG (estática)
- **Envio do form:** Server Action → endpoint configurável via env (Resend por padrão, fallback para webhook)

## Identidade Visual

### Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#0A2540` | Textos de destaque, headings |
| `accent` | `#2563EB` | CTAs, links, hover |
| `bg-alt` | `#F5F7FA` | Fundo de seções alternadas |
| `bg` | `#FFFFFF` | Fundo base |
| `text` | `#0F172A` | Corpo de texto |
| `muted` | `#64748B` | Texto secundário |
| `border` | `#E2E8F0` | Bordas sutis |

### Tipografia
- **Display/Headings:** Space Grotesk (600/700)
- **Corpo/UI:** Inter (400/500/600)
- **Escala:** hero 60–72px desktop / 40px mobile; h2 36–48px; h3 24px; body 16–18px

### Princípios
- Muito espaço em branco (padding vertical 96–128px por seção)
- Grid 12 colunas, container max-width 1200px
- Sombras leves, bordas sutis
- Micro-animações on-scroll (fade-in + translate-y) — duração 400–600ms
- Sem gradientes chamativos; acentos geométricos sutis

## Estrutura das Seções

### 1. Header (fixo, blur ao rolar)
- Logo Sys Connect (texto estilizado se não houver asset)
- Nav âncora: Serviços, Processo, Sobre, Contato
- Botão CTA: "Agendar reunião"
- Mobile: menu hamburguer com drawer

### 2. Hero
- Eyebrow: "Desenvolvimento de Software"
- Headline: proposta de valor forte (ex.: "Construímos software sob medida para empresas que não podem parar.")
- Subcopy (2 linhas)
- CTA primário: "Agendar reunião" → scroll para form
- CTA secundário: "Ver serviços" → scroll para seção
- Visual lateral: composição abstrata (grid + elementos geométricos animados) ou mockup de dashboard
- Indicadores sutis abaixo: "+X anos de experiência · Stack moderna · Entregas ágeis"

### 3. Serviços (4 cards)
- Grid 2x2 em desktop, stack em mobile
- Cada card: ícone Lucide, título, descrição (2–3 linhas), link "Saiba mais" (âncora ou link futuro)
- Hover: elevação sutil + borda accent

### 4. Por que Sys Connect (pilares)
- 3–4 colunas com ícone + título + descrição
- Exemplos: "Código próprio, sem caixa-preta", "Entregas ágeis em sprints", "Stack moderna e escalável", "Parceria de longo prazo"

### 5. Processo (timeline horizontal)
- 4 etapas numeradas: Descoberta → Proposta → Desenvolvimento → Evolução
- Desktop: horizontal com linha conectora; mobile: vertical

### 6. Stack/Tecnologias
- Faixa com logos/ícones: React, Next.js, Node.js, TypeScript, Flutter, React Native, PostgreSQL, AWS, Docker, etc.
- Grayscale com color on hover; ou estático monocromático

### 7. CTA Intermediário
- Banner full-width com fundo `primary`
- Título: "Vamos construir juntos."
- Subcopy curta + botão "Agendar reunião"

### 8. FAQ (accordion)
- 5–6 perguntas:
  - Qual o prazo típico de um projeto?
  - Como funciona o orçamento?
  - De quem é a propriedade do código-fonte?
  - Vocês oferecem suporte após a entrega?
  - Trabalham com equipes internas do cliente?
  - Quais tecnologias vocês usam?

### 9. Formulário de Contato/Agendamento
- Campos: nome*, email*, empresa, telefone, tipo de projeto (select: Software sob medida / App mobile / Integração / Squad / Outro), mensagem*
- Validação Zod, feedback inline
- Estados: idle, submitting, success, error
- Política de privacidade (link) + checkbox LGPD

### 10. Footer
- Coluna 1: Logo + descrição curta
- Coluna 2: Links de navegação
- Coluna 3: Contato (email, telefone, endereço se houver)
- Coluna 4: Redes sociais (LinkedIn, Instagram, GitHub)
- Linha inferior: CNPJ (placeholder), copyright

### FAB WhatsApp
- Fixo bottom-right, todas as seções
- Ícone WhatsApp + label "Fale conosco" (expande no hover desktop)
- Link `https://wa.me/<numero>` configurável via env

## Estrutura de Arquivos

```
sysconnect/
├── app/
│   ├── layout.tsx          # root: fonts, metadata, analytics
│   ├── page.tsx            # landing (compõe sections)
│   ├── globals.css         # tailwind + tokens CSS
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       └── contact/
│           └── route.ts    # handler do formulário
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── whatsapp-fab.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── why-us.tsx
│   │   ├── process.tsx
│   │   ├── tech-stack.tsx
│   │   ├── cta-banner.tsx
│   │   ├── faq.tsx
│   │   └── contact.tsx
│   └── ui/                 # shadcn (button, input, accordion, etc.)
├── lib/
│   ├── utils.ts
│   ├── validators.ts       # schemas Zod
│   └── send-contact.ts     # adapter de envio (Resend/webhook)
├── content/
│   ├── services.ts
│   ├── why-us.ts
│   ├── process.ts
│   ├── faq.ts
│   └── site.ts             # nome, tagline, contato, redes
├── public/
│   ├── og-image.png
│   └── favicon/
├── .env.example
├── next.config.ts
├── tailwind.config.ts      # se necessário (v4 usa CSS-first)
├── tsconfig.json
├── package.json
└── README.md
```

## Configuração (env)

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
CONTACT_EMAIL_TO=
RESEND_API_KEY=
CONTACT_WEBHOOK_URL=    # fallback opcional
```

## SEO & Performance

- Metadata completa (title, description, OG, Twitter Card)
- JSON-LD `Organization` no layout root
- `sitemap.ts` e `robots.ts`
- Imagens via `next/image` com `priority` no hero
- Fonts com `display: swap`
- Meta de Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 100

## Acessibilidade

- WCAG 2.1 AA
- Contraste validado para todos os pares de cor de texto
- Navegação completa por teclado, foco visível
- `aria-label` em ícones, landmarks semânticos
- `prefers-reduced-motion` respeitado nas animações

## Responsividade

Breakpoints Tailwind padrão:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Mobile-first. Hero, serviços e processo têm layouts específicos para mobile (stack vertical, timeline vertical).

## Critérios de Sucesso

1. Lighthouse ≥ 95 em todas as categorias
2. Formulário envia e responde com feedback claro em < 2s
3. Build estático sem erros de tipo (strict)
4. Responsivo sem overflow em qualquer breakpoint entre 320px e 1920px
5. FAB WhatsApp visível e funcional em todas as seções
6. Copy em português brasileiro, tom profissional e direto

## Fora de Escopo

- Blog / CMS
- Área logada / dashboard
- Prova social (logos, depoimentos, cases) — omitida por decisão do cliente
- Internacionalização
- Analytics (pode ser adicionado posteriormente)
