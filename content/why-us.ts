import { ShieldCheck, Rocket, BrainCircuit, HandshakeIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Pillar = { icon: LucideIcon; title: string; description: string };

export const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Código próprio, sem caixa-preta",
    description: "Você é dono do código-fonte e da documentação desde o primeiro commit.",
  },
  {
    icon: Rocket,
    title: "Velocidade sem atalhos",
    description: "Usamos IA em todo o ciclo — da revisão de código à geração de testes — para entregar sprints mais curtas sem comprometer a arquitetura.",
  },
  {
    icon: BrainCircuit,
    title: "IA integrada ao processo",
    description: "Não usamos IA como enfeite. Ela está no fluxo de desenvolvimento: sugestão, revisão, documentação e automação de qualidade, lado a lado com o time.",
  },
  {
    icon: HandshakeIcon,
    title: "Parceria de longo prazo",
    description: "Relação contínua de evolução de produto — não entregamos e desaparecemos.",
  },
];
