import { Code2, Smartphone, Plug, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Software sob medida",
    description:
      "Sistemas web e SaaS construídos para o seu processo, com arquitetura escalável e código próprio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    description:
      "Apps nativos e híbridos para iOS e Android, performáticos e prontos para crescer com a sua operação.",
  },
  {
    icon: Plug,
    title: "Integrações e APIs",
    description:
      "Conectamos seus sistemas internos, ERPs, gateways e serviços externos com APIs robustas e seguras.",
  },
  {
    icon: Users,
    title: "Squad as a Service",
    description:
      "Times dedicados de engenharia integrados ao seu produto, entregando em cadência ágil e previsível.",
  },
];
