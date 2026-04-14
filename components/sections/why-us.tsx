import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { pillars } from "@/content/why-us";

export function WhyUs() {
  return (
    <Section>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Por que Sys Connect
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">Uma parceria de engenharia séria</h2>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <div className="flex h-full flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
                <p.icon size={20} />
              </div>
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{p.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
