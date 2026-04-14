import { ShieldCheck, Rocket, Layers, HandshakeIcon } from "lucide-react";
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
    title: "Entregas ágeis",
    description: "Sprints curtas com demonstrações frequentes e ajustes rápidos de rota.",
  },
  {
    icon: Layers,
    title: "Stack moderna",
    description: "Tecnologias atuais e escaláveis, escolhidas para o seu contexto, não por modismo.",
  },
  {
    icon: HandshakeIcon,
    title: "Parceria de longo prazo",
    description: "Relação contínua de evolução de produto — não entregamos e desaparecemos.",
  },
];
