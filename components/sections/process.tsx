import { Section, SectionHeading } from "@/components/layout/section";
import { processSteps } from "@/content/process";
import { sections } from "@/content/sections";

export function Process() {
  const copy = sections.process;

  return (
    <Section id="processo">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {processSteps.map((step, i) => (
          <li key={step.number} className="relative">
            {i < processSteps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-12 right-0 top-5 hidden h-px bg-[var(--brand-border)] lg:block"
              />
            )}
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] text-sm font-semibold text-white">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-[var(--brand-ink)]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
