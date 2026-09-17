import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { site } from "@/content/site";
import { sections } from "@/content/sections";

export function Founder() {
  const founder = site.founder;
  const copy = sections.founder;

  return (
    <Section id="fundador" alt>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-[var(--brand-border)] bg-[var(--brand-ink)] shadow-sm">
            <Image
              src={founder.image}
              alt={`Retrato de ${founder.name}, fundador da ${founder.company}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="display mt-3 max-w-2xl text-3xl text-[var(--brand-ink)] md:text-4xl">{copy.title}</h2>

          <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-[var(--brand-muted)]">
            {copy.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-[var(--brand-primary)] pl-4">
            <p className="text-lg font-semibold text-[var(--brand-ink)]">{founder.name}</p>
            <p className="mt-1 text-sm text-[var(--brand-muted)]">
              {founder.role} · {founder.company}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-ink)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary)]"
            >
              {copy.linkedinLabel}
            </a>
            <Link
              href={founder.storyHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--brand-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-ink)] transition-colors hover:border-[var(--brand-ink)]"
            >
              {copy.storyLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
