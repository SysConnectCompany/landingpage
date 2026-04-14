import { techStack } from "@/content/stack";

export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section className="relative overflow-hidden border-y border-[var(--brand-border-soft)] bg-[var(--brand-cream-2)] py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--brand-cream-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--brand-cream-2)] to-transparent" />
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center gap-12">
            <span className="display text-3xl text-[var(--brand-ink)] md:text-4xl">{t}</span>
            <span className="mono text-[var(--brand-accent)]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
