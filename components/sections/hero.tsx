import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-ink)] text-[var(--brand-paper)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dots" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 25%, rgba(43,108,255,0.22), transparent 60%), radial-gradient(40% 40% at 10% 110%, rgba(255,212,71,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="mb-10 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]">
            Sys/Connect · Engenharia de software · EST. 2018
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h1 className="display text-[54px] leading-[0.98] tracking-tight md:text-[84px] lg:text-[104px]">
              Software que{" "}
              <span className="display-italic text-[var(--brand-spark)]">não para</span>
              <br />
              para empresas que{" "}
              <span className="display-italic">não podem parar.</span>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-[var(--brand-muted-on-dark)] md:text-[17px]">
              Sistemas sob medida, aplicativos mobile, integrações e squads dedicados. Combinamos
              engenharia sólida com ferramentas de IA para entregar mais rápido, com menos retrabalho
              e sem abrir mão da qualidade.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--brand-accent-hot)]"
              >
                Agendar uma reunião
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm text-[var(--brand-paper)] backdrop-blur-sm transition hover:bg-white/10"
              >
                Ver o que fazemos
                <ArrowDown size={14} />
              </Link>
            </div>
          </div>

          <aside className="relative lg:col-span-4">
            <div className="sticky top-28 flex h-full flex-col justify-between gap-8">
              <div className="border-l border-white/10 pl-5">
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted-on-dark)]">
                  / métricas
                </div>
                <div className="mt-4 space-y-5">
                  <Metric n="40+" label="projetos entregues" />
                  <Metric n="6 anos" label="construindo software" />
                  <Metric n="< 1d" label="primeiro contato" />
                </div>
              </div>

              <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:block">
                <div className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted-on-dark)]">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-spark)]" />
                  em operação agora
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Squads multidisciplinares trabalhando em 12 produtos ativos para clientes de varejo,
                  saúde e logística.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-5 md:px-10">
          <div className="mono grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted-on-dark)] md:grid-cols-6">
            <span>· TypeScript</span>
            <span>· React / Next</span>
            <span>· Node / Go</span>
            <span>· PHP / Laravel</span>
            <span>· MySQL · PostgreSQL</span>
            <span>· Flutter · AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-3xl text-[var(--brand-paper)]">{n}</div>
      <div className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted-on-dark)]">
        {label}
      </div>
    </div>
  );
}
