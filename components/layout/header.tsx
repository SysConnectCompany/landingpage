"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold text-[var(--color-primary)]">
          Sys<span className="text-[var(--color-accent)]">Connect</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]">
            <Link href="#contato">Agendar reunião</Link>
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]">
              <Link href="#contato" onClick={() => setOpen(false)}>
                Agendar reunião
              </Link>
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
