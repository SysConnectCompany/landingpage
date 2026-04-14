import { Section } from "@/components/layout/section";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="servicos" className="relative py-28 md:py-36">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            §01 · Serviços
          </div>
          <h2 className="display mt-5 text-5xl md:text-6xl">
            O que a<br />
            <span className="display-italic">Sys Connect</span>
            <br />
            faz por você.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted)]">
            Quatro frentes de trabalho, um time integrado. Você contrata por projeto, por squad ou por
            demanda — e mantém propriedade total do código.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-[var(--brand-border-soft)] border-y border-[var(--brand-border-soft)]">
            {services.map((svc, i) => (
              <li key={svc.title} className="group relative">
                <div className="grid grid-cols-[64px_1fr_auto] items-start gap-6 py-8 transition md:py-10">
                  <span className="mono pt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-3xl md:text-4xl">
                      {svc.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--brand-muted)]">
                      {svc.description}
                    </p>
                  </div>
                  <span className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-border-soft)] text-[var(--brand-ink)] transition group-hover:border-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white">
                    <svc.icon size={18} />
                  </span>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--brand-accent)] transition-transform duration-500 group-hover:scale-x-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
