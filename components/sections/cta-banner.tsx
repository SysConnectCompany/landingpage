import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { sections } from "@/content/sections";

export function CtaBanner() {
  const copy = sections.cta;

  return (
    <section className="bg-[var(--brand-ink)] text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <h2 className="display text-3xl md:text-4xl">{copy.title}</h2>
          <p className="mt-4 leading-relaxed text-[var(--brand-muted-on-dark)]">{copy.description}</p>
        </div>
        <Link
          href={copy.button.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-primary-soft)]"
        >
          {copy.button.label}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
