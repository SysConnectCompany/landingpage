export const site = {
  name: "Sys Connect",
  tagline: "Desenvolvimento de software sob medida.",
  description:
    "Construímos sistemas, apps e integrações para empresas que não podem parar.",
  email: "contato@sysconnectcompany.com.br",
  phone: "+55 (32) 99862-2043",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5532998622043",
  social: {
    linkedin: "https://linkedin.com/company/sysconnectcompany",
    instagram: "https://instagram.com/sysconnectcompany",
    github: "https://github.com/sysconnect",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
