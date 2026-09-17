import { ShieldCheck, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Cta = { label: string; href: string };
type Highlight = { icon: LucideIcon; title: string; description: string };

export const sections = {
  hero: {
    eyebrow: "Engenharia de software para empresas",
    title: "Software sob medida para operações que não podem parar.",
    description:
      "Sistemas sob medida, aplicativos mobile, integrações e squads dedicados. Engenharia sólida, apoiada por ferramentas de IA, para entregar com previsibilidade e qualidade.",
    primaryCta: { label: "Agendar uma reunião", href: "#contato" } satisfies Cta,
    secondaryCta: { label: "Conheça nossos serviços", href: "#servicos" } satisfies Cta,
    highlightsTitle: "Como trabalhamos",
    highlights: [
      {
        icon: ShieldCheck,
        title: "Código de propriedade do cliente",
        description: "Código-fonte e documentação são seus desde o primeiro commit.",
      },
      {
        icon: Clock,
        title: "Retorno em até 1 dia útil",
        description: "Primeiro contato rápido, com próximos passos claros.",
      },
      {
        icon: Users,
        title: "Squads dedicados",
        description: "Times integrados ao seu produto, com processo transparente.",
      },
    ] satisfies Highlight[],
    stackLabel: "Tecnologias",
  },
  services: {
    eyebrow: "Serviços",
    title: "Soluções completas de engenharia de software",
    description:
      "Contrate por projeto, por squad ou por demanda — sempre com propriedade total do código.",
  },
  whyUs: {
    eyebrow: "Diferenciais",
    title: "Parceria de engenharia, não fábrica de features",
    description:
      "Atuamos como extensão do seu time, com transparência de processo e foco em resultados de negócio.",
  },
  process: {
    eyebrow: "Processo",
    title: "Um processo claro, do briefing à evolução contínua",
    description:
      "Etapas bem definidas, entregas em ciclos curtos e demonstrações frequentes.",
  },
  founder: {
    eyebrow: "Liderança",
    title: "Tecnologia construída por quem conhece o desafio por dentro",
    bio: [
      "Sou Julio Castro, fundador da Sys Connect Company e engenheiro de software com mais de 11 anos de experiência no desenvolvimento de produtos digitais.",
      "Ao longo da minha carreira, participei da construção e evolução de sistemas web, aplicativos mobile e plataformas utilizadas em operações de diferentes portes e segmentos.",
      "Criei a Sys Connect com uma proposta simples: aproximar engenharia de software dos problemas reais de negócio, construindo soluções tecnicamente sólidas, escaláveis e que façam sentido para a operação e para os objetivos de cada cliente.",
    ],
    linkedinLabel: "Ver perfil no LinkedIn",
    storyLabel: "Conheça minha trajetória",
  },
  stack: {
    eyebrow: "Tecnologia",
    title: "Tecnologias com que trabalhamos",
  },
  cta: {
    title: "Pronto para tirar seu projeto do papel?",
    description:
      "Conte seu desafio. Retornamos em até 1 dia útil com os próximos passos e uma conversa inicial sem compromisso.",
    button: { label: "Agendar reunião", href: "#contato" } satisfies Cta,
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Dúvidas comuns antes da primeira conversa",
    description:
      "Não encontrou sua pergunta? Fale conosco pelo formulário ou pelo WhatsApp.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Fale com a nossa equipe",
    description:
      "Preencha o formulário ou entre em contato diretamente. Respondemos em até 1 dia útil.",
    successTitle: "Mensagem recebida",
    successDescription: "Obrigado pelo contato. Nossa equipe retorna em até 1 dia útil.",
    successAgain: "Enviar nova mensagem",
    consent: "Concordo com o tratamento dos meus dados para fins de contato, conforme a LGPD.",
    submit: "Enviar mensagem",
    submitting: "Enviando...",
  },
  header: {
    cta: { label: "Fale com um especialista", href: "#contato" } satisfies Cta,
  },
  footer: {
    navTitle: "Navegação",
    contactTitle: "Contato",
    companyTitle: "Empresa",
    rights: "Todos os direitos reservados.",
  },
  whatsapp: {
    label: "Falar no WhatsApp",
  },
} as const;
