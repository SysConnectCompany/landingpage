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
