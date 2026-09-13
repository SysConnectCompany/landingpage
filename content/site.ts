export const site = {
  name: "Sys Connect",
  tagline: "Desenvolvimento de software sob medida.",
  description:
    "Construímos sistemas, apps e integrações para empresas que não podem parar.",
  email: "admin@sysconnectcompany.com.br",
  phone: "+55 (32) 99862-2043",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5532998622043",
  social: {
    linkedin: "https://www.linkedin.com/company/sys-connect-company",
    instagram: "https://instagram.com/sysconnectcompany",
  },
  founder: {
    name: "Julio Castro",
    role: "Founder & Software Engineer",
    company: "Sys Connect Company",
    image: "/images/julio-castro-founder.jpg",
    // TODO: substitua pelo perfil público do Julio antes de publicar.
    linkedin:
      process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_URL ?? "https://www.linkedin.com/in/seu-perfil",
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
