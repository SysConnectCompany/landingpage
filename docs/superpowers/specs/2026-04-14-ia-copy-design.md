# Sys Connect — Copy IA & Tecnologia Moderna

**Data:** 2026-04-14
**Status:** Aprovado para implementação

## Objetivo

Integrar mensagens sobre uso de IA e tecnologias modernas nas seções existentes do site, reforçando o posicionamento de entrega mais rápida sem abrir mão da qualidade. Tom: equilibrado — menciona a tecnologia de forma acessível e conecta ao benefício prático.

## Abordagem

IA + engenharia sólida = qualidade sem concessão. A IA acelera ciclos *e* eleva o padrão técnico (revisões mais frequentes, testes mais abrangentes, código mais consistente). Distribuída nas seções Hero, Por que Sys Connect, Processo e FAQ sem dominar nenhuma delas.

---

## Textos por Seção

### Hero — subcopy

**Arquivo:** `components/sections/hero.tsx` (parágrafo da subcopy)

```
Sistemas sob medida, aplicativos mobile, integrações e squads dedicados. Combinamos engenharia sólida com ferramentas de IA para entregar mais rápido, com menos retrabalho e sem abrir mão da qualidade.
```

---

### Por que Sys Connect — pilares

**Arquivo:** `content/why-us.ts`

Pilares alterados (os outros dois permanecem intactos):

**Pilar 2 — Velocidade sem atalhos** *(era "Entregas ágeis")*
- Título: `Velocidade sem atalhos`
- Descrição: `Usamos IA em todo o ciclo — da revisão de código à geração de testes — para entregar sprints mais curtas sem comprometer a arquitetura.`
- Ícone: mantém `Rocket`

**Pilar 3 — IA integrada ao processo** *(era "Stack moderna")*
- Título: `IA integrada ao processo`
- Descrição: `Não usamos IA como enfeite. Ela está no fluxo de desenvolvimento: sugestão, revisão, documentação e automação de qualidade, lado a lado com o time.`
- Ícone: `BrainCircuit` (Lucide)

---

### Processo — etapas

**Arquivo:** `content/process.ts`

Etapas alteradas (01 e 02 permanecem intactas):

**Etapa 03 — Desenvolvimento**
- Descrição: `Sprints com entregas demonstráveis a cada ciclo, aceleradas por IA para revisão de código, cobertura de testes e documentação contínua.`

**Etapa 04 — Evolução**
- Descrição: `Suporte contínuo com métricas, melhorias incrementais e uso de IA para antecipar gargalos antes que virem problema.`

---

### FAQ — nova pergunta

**Arquivo:** `content/faq.ts`

Inserir após a pergunta "Quais tecnologias vocês usam?":

- Pergunta: `Como vocês usam IA no desenvolvimento?`
- Resposta: `A IA entra como ferramenta do time, não como substituta do engenheiro. Usamos assistentes de código para acelerar a escrita e revisão, geração automática de testes para aumentar cobertura e LLMs para documentação e análise de requisitos. O resultado são ciclos mais curtos e um padrão de qualidade mais consistente — mas toda decisão de arquitetura e entrega continua sob responsabilidade do nosso time.`

---

## Arquivos Impactados

| Arquivo | Tipo de mudança |
|---|---|
| `components/sections/hero.tsx` | Substituição da subcopy |
| `content/why-us.ts` | Reescrita de 2 pilares + troca de ícone no pilar 3 |
| `content/process.ts` | Reescrita das descrições das etapas 03 e 04 |
| `content/faq.ts` | Adição de 1 pergunta ao final |

## Fora de Escopo

- Nova seção dedicada a IA
- Mudanças de layout ou componentes
- Alterações nas seções Header, Serviços, Tech Stack, CTA Banner e Footer
