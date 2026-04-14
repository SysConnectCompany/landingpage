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
