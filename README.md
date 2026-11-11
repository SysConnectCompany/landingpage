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

## Medição de contatos (GA4)

Com `NEXT_PUBLIC_GA_ID` configurado, o site envia estes eventos após o visitante aceitar os cookies de analytics:

| Evento | Quando ocorre |
| --- | --- |
| `click_cta_contato` | Clique em um link de contato no cabeçalho, destaque, banner ou rodapé |
| `click_whatsapp` | Clique no botão flutuante do WhatsApp |
| `generate_lead` | Formulário enviado com sucesso |

Os eventos de clique incluem o parâmetro `placement` para identificar a posição do link. No GA4, crie uma dimensão personalizada de escopo **Evento** com o parâmetro `placement` se quiser comparar essas posições em relatórios ou Explorações. Valide os eventos em **Relatórios → Tempo real** após aceitar os cookies. Um clique no WhatsApp indica intenção de contato, não confirma que a conversa começou; mantenha `generate_lead` separado dos cliques ao avaliar conversões.

### Seção do fundador

- O perfil padrão é `https://www.linkedin.com/in/juliocastro-eng/`, definido em `content/site.ts`. Use `NEXT_PUBLIC_FOUNDER_LINKEDIN_URL` em `.env.local` para sobrescrevê-lo.
- O retrato profissional fica em `public/images/julio-castro-founder.jpg`. Para substituí-lo no futuro, mantenha o caminho configurado em `content/site.ts` (`site.founder.image`).
- Quando a página Sobre existir, altere `site.founder.storyHref` em `content/site.ts` de `#fundador` para a rota final, por exemplo `/sobre`.
