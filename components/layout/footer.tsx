import Link from "next/link";
import { Linkedin, Instagram, Github } from "lucide-react";
import { Container } from "./container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-lg font-bold text-[var(--color-primary)]">
              Sys<span className="text-[var(--color-accent)]">Connect</span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{site.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navegação</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-[var(--color-primary)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.phone}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Redes</h4>
            <div className="mt-3 flex gap-3 text-[var(--color-muted)]">
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href={site.social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted)] md:flex-row">
          <p>© {year} Sys Connect. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </Container>
    </footer>
  );
}
