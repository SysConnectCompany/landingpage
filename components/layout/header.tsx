"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container
        className={cn(
          "mt-4 flex h-14 items-center justify-between rounded-full border px-5 transition-all",
          scrolled
            ? "border-[var(--brand-border-soft)] bg-[var(--brand-paper)]/85 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.15)] backdrop-blur-lg"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--brand-ink)] text-[10px] text-[var(--brand-paper)]">
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4 L8 8 L3 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 12 L8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-[15px] font-medium tracking-tight text-[var(--brand-ink)]">
            Sys<span className="text-[var(--brand-muted)]">/</span>Connect
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[var(--brand-muted)] transition hover:text-[var(--brand-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contato"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-ink)] px-4 py-2 text-[13px] font-medium text-[var(--brand-paper)] transition hover:bg-[var(--brand-accent)]"
          >
            Agendar reunião
            <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="text-[var(--brand-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-[var(--brand-border-soft)] bg-[var(--brand-paper)] p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--brand-ink)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--brand-ink)] px-4 py-2.5 text-sm text-[var(--brand-paper)]"
            >
              Agendar reunião <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
