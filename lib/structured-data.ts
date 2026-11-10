import { site } from "@/content/site";
import { faq } from "@/content/faq";

const orgId = `${site.url}/#organization`;

/** JSON-LD (schema.org) da página inicial: empresa, site, fundador e FAQ. */
export function buildStructuredData() {
  const sameAs = [site.social.instagram, site.social.linkedin].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/sysconnect-logo.png`,
        image: `${site.url}/og-image.png`,
        description: site.seo.description,
        email: site.email,
        telephone: `+${site.whatsapp}`,
        taxID: site.cnpj,
        areaServed: { "@type": "Country", name: "Brasil" },
        sameAs,
        founder: {
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
          sameAs: [site.founder.linkedin],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

/** Serializa JSON-LD escapando "<" para não fechar a tag <script>. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
