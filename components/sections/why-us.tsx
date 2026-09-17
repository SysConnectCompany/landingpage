import { Section, SectionHeading } from "@/components/layout/section";
import { pillars } from "@/content/why-us";
import { sections } from "@/content/sections";

export function WhyUs() {
  const copy = sections.whyUs;

  return (
    <Section alt>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-lg border border-[var(--brand-border)] bg-white p-6 shadow-sm">
            <p.icon size={24} className="text-[var(--brand-primary)]" aria-hidden />
            <h3 className="mt-5 text-lg font-semibold text-[var(--brand-ink)]">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
