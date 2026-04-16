import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[var(--brand-ink-2)] text-[var(--brand-paper)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dots opacity-50" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="display text-6xl leading-[1] md:text-7xl">
              Sys/<span className="display-italic text-[var(--brand-accent-hot)]">Connect</span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted-on-dark)]">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-reveal hover:text-[var(--brand-spark)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link-reveal">
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
              <li className="flex gap-5 pt-3 text-[var(--brand-muted-on-dark)]">
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="link-reveal hover:text-[var(--brand-paper)]">
                  LinkedIn ↗
                </a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="link-reveal hover:text-[var(--brand-paper)]">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mono mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-[var(--brand-muted-on-dark)] md:flex-row">
          <p>© {year} Sys/Connect · Todos os direitos reservados</p>
          <p>CNPJ 65.951.698/0001-76</p>
        </div>
      </div>
    </footer>
  );
}
