import { Section, SectionHeading } from "@/components/layout/section";
import { techStack } from "@/content/stack";
import { sections } from "@/content/sections";

export function TechStack() {
  const copy = sections.stack;

  return (
    <Section className="border-t border-[var(--brand-border)] py-16 md:py-20">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} align="center" />
      <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        {techStack.map((t) => (
          <li
            key={t}
            className="rounded-md border border-[var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-ink)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </Section>
  );
}
