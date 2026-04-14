import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Desenvolvimento de Software
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Construímos software sob medida para empresas que não podem parar.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
            Sistemas, aplicativos e integrações de ponta a ponta. Tecnologia moderna,
            entregas ágeis e parceria de longo prazo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
            >
              <Link href="#contato">
                Agendar reunião <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#servicos">Ver serviços</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--color-muted)]">
            <span>• Stack moderna</span>
            <span>• Entregas ágeis</span>
            <span>• Código próprio do cliente</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-bg-alt)] to-white shadow-xl ring-1 ring-[var(--color-border)]" />
            <div className="absolute left-8 top-8 h-20 w-20 rounded-2xl bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/30" />
            <div className="absolute right-10 top-24 h-32 w-32 rounded-2xl bg-[var(--color-primary)]/5 ring-1 ring-[var(--color-primary)]/20" />
            <div className="absolute bottom-12 left-16 h-24 w-48 rounded-xl bg-white shadow-lg ring-1 ring-[var(--color-border)]" />
            <div className="absolute bottom-24 right-12 h-16 w-16 rounded-full bg-[var(--color-accent)] opacity-80" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
