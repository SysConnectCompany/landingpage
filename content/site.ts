export const site = {
  name: "Sys Connect",
  legalName: "Sys Connect Company",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sysconnectcompany.com.br").replace(/\/$/, ""),
  seo: {
    title: "Sys Connect | Desenvolvimento de Software Sob Medida e Aplicativos",
    description:
      "Empresa de desenvolvimento de software sob medida: sistemas web, aplicativos mobile, integrações de API e squads dedicados para empresas de todo o Brasil.",
    ogImageAlt: "Sys Connect — Desenvolvimento de software sob medida",
  },
  tagline: "Desenvolvimento de software sob medida.",
  description:
    "Construímos sistemas, apps e integrações para empresas que não podem parar.",
  email: "admin@sysconnectcompany.com.br",
  phone: "+55 (32) 99991-3730",
  cnpj: "65.951.698/0001-76",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5532999913730",
  social: {
    linkedin: "",
    instagram: "https://instagram.com/sysconnect.company",
  },
  founder: {
    name: "Julio Castro",
    role: "Founder & Software Engineer",
    company: "Sys Connect Company",
    image: "/images/julio-castro-founder.jpg",
    linkedin:
      process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_URL ??
      "https://www.linkedin.com/in/juliocastro-eng/",
    // TODO: altere para a rota da página Sobre quando ela existir, por exemplo: "/sobre".
    storyHref: "#fundador",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
