import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="servicos" alt>
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Serviços
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">O que fazemos pela sua operação</h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Atuamos de ponta a ponta — do discovery à sustentação — com foco em entregar software
          que gera resultado de negócio.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((svc, i) => (
          <FadeIn key={svc.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-white p-8 transition hover:border-[var(--color-accent)] hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <svc.icon size={24} />
              </div>
              <h3 className="text-xl">{svc.title}</h3>
              <p className="mt-3 text-[var(--color-muted)]">{svc.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
