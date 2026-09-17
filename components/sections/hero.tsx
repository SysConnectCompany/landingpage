import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { sections } from "@/content/sections";
import { techStack } from "@/content/stack";

export function Hero() {
  const hero = sections.hero;

  return (
    <section className="bg-[var(--brand-ink)] text-white">
      <Container className="pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[#93B4FF]">{hero.eyebrow}</span>
            <h1 className="display mt-4 text-4xl md:text-5xl lg:text-[56px]">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brand-muted-on-dark)]">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
              >
                {hero.primaryCta.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-lg border border-[var(--brand-border-dark)] bg-white/[0.04] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-muted-on-dark)]">
                {hero.highlightsTitle}
              </p>
              <ul className="mt-6 space-y-6">
                {hero.highlights.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-primary)]/20 text-[#93B4FF]">
                      <item.icon size={20} aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted-on-dark)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>

      <div className="border-t border-[var(--brand-border-dark)]">
        <Container className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
            {hero.stackLabel}
          </span>
          <p className="text-sm text-[var(--brand-muted-on-dark)]">{techStack.slice(0, 9).join(" · ")}</p>
        </Container>
      </div>
    </section>
  );
}
