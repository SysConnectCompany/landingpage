import { Section } from "@/components/layout/section";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="processo" className="relative py-28 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            §03 · Processo
          </div>
          <h2 className="display mt-5 text-5xl md:text-6xl">
            Do briefing<br />
            <span className="display-italic">à evolução</span><br />
            contínua.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted)]">
            Quatro etapas claras, sem surpresas. Você vê o projeto andar em ciclos curtos, com demos
            frequentes e ajustes rápidos.
          </p>
        </div>

        <ol className="relative lg:col-span-8">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-ink)] via-[var(--brand-border-soft)] to-transparent"
          />
          {processSteps.map((step) => (
            <li key={step.number} className="relative grid grid-cols-[48px_1fr] gap-6 py-8 first:pt-0 last:pb-0">
              <div className="relative flex items-start justify-center">
                <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--brand-ink)] bg-[var(--brand-paper)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-ink)]" />
                </span>
              </div>
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                  Etapa {step.number}
                </div>
                <h3 className="display mt-2 text-3xl md:text-4xl">{step.title}</h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--brand-muted)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
