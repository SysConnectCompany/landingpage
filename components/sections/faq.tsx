import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Perguntas frequentes</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Não encontrou o que procura? Fale com a gente pelo formulário ou WhatsApp.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--color-muted)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </Section>
  );
}
