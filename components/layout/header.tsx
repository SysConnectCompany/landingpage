"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { Logo } from "@/components/brand/logo";
import { site } from "@/content/site";
import { sections } from "@/content/sections";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cta = sections.header.cta;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        solid
          ? "border-[var(--brand-border)] bg-white"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" aria-label={site.name}>
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-[var(--brand-muted)] hover:text-[var(--brand-ink)]"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={cta.href}
          className="hidden rounded-md bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-hover)] md:inline-flex"
        >
          {cta.label}
        </Link>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={cn("md:hidden", solid ? "text-[var(--brand-ink)]" : "text-white")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--brand-border)] bg-white md:hidden">
          <Container className="flex flex-col py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--brand-border)] py-3 text-base font-medium text-[var(--brand-ink)] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-md bg-[var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white"
            >
              {cta.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
