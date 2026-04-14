import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-ink)] py-28 text-[var(--brand-paper)] md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 50%, rgba(43,108,255,0.18), transparent 60%), radial-gradient(40% 40% at 90% 30%, rgba(255,212,71,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]">
              §04 · Próximo passo
            </div>
            <h2 className="display mt-5 text-5xl leading-[1] md:text-7xl lg:text-[88px]">
              Vamos <span className="display-italic text-[var(--brand-spark)]">construir</span>
              <br />
              alguma coisa boa.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted-on-dark)]">
              Conte seu desafio. Voltamos em até 1 dia útil com os próximos passos e uma conversa
              inicial sem compromisso.
            </p>
            <Link
              href="#contato"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-paper)] px-6 py-3.5 text-sm font-medium text-[var(--brand-ink)] transition hover:bg-[var(--brand-spark)]"
            >
              Agendar reunião
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
