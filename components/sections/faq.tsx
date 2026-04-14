"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/layout/section";
import { faq } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="relative bg-[var(--brand-cream)] py-28 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            §05 · Perguntas
          </div>
          <h2 className="display mt-5 text-5xl md:text-6xl">
            Dúvidas que<br />
            aparecem <span className="display-italic">antes</span><br />
            da primeira call.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted)]">
            Se a sua não está aqui, use o formulário ou o WhatsApp — respondemos rápido.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-[var(--brand-ink)]/15">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-[var(--brand-ink)]/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-5 text-lg text-[var(--brand-ink)] md:text-xl">
                      <span className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-6 pl-[52px] text-[15px] leading-relaxed text-[var(--brand-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
