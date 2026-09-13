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

### Seção do fundador

- O perfil padrão é `https://www.linkedin.com/in/juliocastro-eng/`, definido em `content/site.ts`. Use `NEXT_PUBLIC_FOUNDER_LINKEDIN_URL` em `.env.local` para sobrescrevê-lo.
- O retrato profissional fica em `public/images/julio-castro-founder.jpg`. Para substituí-lo no futuro, mantenha o caminho configurado em `content/site.ts` (`site.founder.image`).
- Quando a página Sobre existir, altere `site.founder.storyHref` em `content/site.ts` de `#fundador` para a rota final, por exemplo `/sobre`.
