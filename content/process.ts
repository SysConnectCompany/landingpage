export type ProcessStep = { number: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Descoberta", description: "Entendemos o problema, usuários e restrições." },
  { number: "02", title: "Proposta", description: "Escopo, prazos e investimento claros e transparentes." },
  { number: "03", title: "Desenvolvimento", description: "Sprints com entregas demonstráveis a cada ciclo, aceleradas por IA para revisão de código, cobertura de testes e documentação contínua." },
  { number: "04", title: "Evolução", description: "Suporte contínuo com métricas, melhorias incrementais e uso de IA para antecipar gargalos antes que virem problema." },
];
