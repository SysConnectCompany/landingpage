export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Qual o prazo típico de um projeto?",
    answer:
      "Depende do escopo, mas projetos sob medida costumam ter um MVP entregue em 8 a 16 semanas, com evolução contínua a partir daí.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Após a descoberta enviamos uma proposta com escopo fechado ou modelo por squad dedicado, com valores e prazos claros.",
  },
  {
    question: "De quem é a propriedade do código-fonte?",
    answer:
      "Sua. Todo o código, documentação e infraestrutura ficam em repositórios e contas controladas pela sua empresa.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos contratos de evolução e sustentação com SLA definido para manter o produto saudável e evoluindo.",
  },
  {
    question: "Trabalham integrados a times internos?",
    answer:
      "Sim. No modelo Squad as a Service nosso time se integra aos seus rituais e ferramentas (Jira, Slack, GitHub).",
  },
  {
    question: "Quais tecnologias vocês usam?",
    answer:
      "Selecionamos a stack mais adequada ao seu caso. Usamos principalmente TypeScript, React/Next.js, Node.js, Flutter, PostgreSQL e AWS.",
  },
];
