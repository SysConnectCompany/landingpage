import { Section, SectionHeading } from "@/components/layout/section";
import { services } from "@/content/services";
import { sections } from "@/content/sections";

export function Services() {
  const copy = sections.services;

  return (
    <Section id="servicos">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((svc) => (
          <article
            key={svc.title}
            className="rounded-lg border border-[var(--brand-border)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
              <svc.icon size={24} aria-hidden />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-[var(--brand-ink)]">{svc.title}</h3>
            <p className="mt-3 leading-relaxed text-[var(--brand-muted)]">{svc.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
