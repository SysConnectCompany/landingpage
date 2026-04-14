import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-[var(--color-primary)] px-8 py-16 text-center md:px-16 md:py-20">
            <h2 className="text-3xl text-white md:text-4xl">Vamos construir juntos.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              Conte seu desafio para a nossa equipe. Respondemos em até 1 dia útil com os próximos passos.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                <Link href="#contato">
                  Agendar reunião <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
