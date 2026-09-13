import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { site } from "@/content/site";

export function Founder() {
  const founder = site.founder;

  return (
    <Section id="fundador" className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-50" />
      <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--brand-ink)]">
            <Image
              src={founder.image}
              alt={`Retrato de ${founder.name}, fundador da ${founder.company}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            Por trás da Sys Connect
          </div>
          <h2 className="display mt-5 max-w-2xl text-5xl leading-[1.02] md:text-6xl">
            Tecnologia construída por quem conhece o desafio por dentro.
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-[var(--brand-muted)] md:text-base">
            <p>
              Sou Julio Castro, fundador da Sys Connect Company e engenheiro de software com mais de 11 anos de experiência no desenvolvimento de produtos digitais.
            </p>
            <p>
              Ao longo da minha carreira, participei da construção e evolução de sistemas web, aplicativos mobile e plataformas utilizadas em operações de diferentes portes e segmentos.
            </p>
            <p>
              Criei a Sys Connect com uma proposta simples: aproximar engenharia de software dos problemas reais de negócio, construindo soluções tecnicamente sólidas, escaláveis e que façam sentido para a operação e para os objetivos de cada cliente.
            </p>
          </div>

          <div className="mt-10 border-l border-[var(--brand-accent)] pl-5">
            <p className="display text-3xl text-[var(--brand-ink)]">{founder.name}</p>
            <p className="mono mt-2 text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
              {founder.role}
              <br />
              {founder.company}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-reveal inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--brand-ink)] transition hover:text-[var(--brand-accent)]"
            >
              LinkedIn
              <ArrowUpRight size={16} aria-hidden />
            </a>
            <Link
              href={founder.storyHref}
              className="link-reveal inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--brand-ink)] transition hover:text-[var(--brand-accent)]"
            >
              Conheça minha trajetória
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
