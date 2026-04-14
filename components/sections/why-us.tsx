import { Section } from "@/components/layout/section";
import { pillars } from "@/content/why-us";

export function WhyUs() {
  return (
    <Section className="relative bg-[var(--brand-cream)] py-28 md:py-36">
      <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            §02 · Método
          </div>
          <h2 className="display mt-5 text-5xl md:text-6xl">
            Parceria <span className="display-italic">de engenharia</span>, não fábrica de features.
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted)]">
          Trabalhamos como extensão do seu time. Transparência de processo, propriedade do código e
          foco em resultados de negócio — não em entregáveis isolados.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="group relative flex flex-col rounded-2xl border border-[var(--brand-border-soft)] bg-[var(--brand-paper)] p-6 transition hover:border-[var(--brand-ink)]"
          >
            <div className="mono mb-8 text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted)]">
              / {String(i + 1).padStart(2, "0")}
            </div>
            <p.icon size={22} className="text-[var(--brand-ink)]" />
            <h3 className="mt-6 text-[17px] font-medium text-[var(--brand-ink)]">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
