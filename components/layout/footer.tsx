import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "./container";
import { site } from "@/content/site";
import { sections } from "@/content/sections";

export function Footer() {
  const year = new Date().getFullYear();
  const copy = sections.footer;
  const headingClass = "text-xs font-semibold uppercase tracking-[0.08em] text-white";
  const linkClass = "text-[var(--brand-muted-on-dark)] transition-colors hover:text-white";

  return (
    <footer className="bg-[var(--brand-ink-2)] text-white">
      <Container className="pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--brand-muted-on-dark)]">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className={headingClass}>{copy.navTitle}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={linkClass}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className={headingClass}>{copy.contactTitle}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </li>
              <li className="text-[var(--brand-muted-on-dark)]">{site.phone}</li>
              <li className="flex gap-5">
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  LinkedIn
                </a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={headingClass}>{copy.companyTitle}</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--brand-muted-on-dark)]">
              <li>{site.name}</li>
              <li>CNPJ {site.cnpj}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--brand-border-dark)] pt-6 text-xs text-[var(--brand-muted-on-dark)]">
          © {year} {site.name}. {copy.rights}
        </div>
      </Container>
    </footer>
  );
}
