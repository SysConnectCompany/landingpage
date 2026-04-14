import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="processo" alt>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Processo
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">Do briefing à evolução contínua</h2>
      </FadeIn>

      <div className="relative mt-14 grid gap-10 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-[var(--color-border)] md:block" />
        {processSteps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.08}>
            <div className="relative">
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
