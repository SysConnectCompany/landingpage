import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { techStack } from "@/content/stack";

export function TechStack() {
  return (
    <Section className="py-16">
      <FadeIn>
        <p className="text-center text-sm uppercase tracking-widest text-[var(--color-muted)]">
          Tecnologias que dominamos
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {techStack.map((t) => (
            <span
              key={t}
              className="font-display text-xl font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
