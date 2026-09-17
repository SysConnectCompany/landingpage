"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/section";
import { faq } from "@/content/faq";
import { sections } from "@/content/sections";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const copy = sections.faq;

  return (
    <Section id="faq" alt>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </div>

        <ul className="divide-y divide-[var(--brand-border)] rounded-lg border border-[var(--brand-border)] bg-white lg:col-span-8">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--brand-ink)]">{item.question}</span>
                  <ChevronDown
                    size={20}
                    aria-hidden
                    className={cn(
                      "shrink-0 text-[var(--brand-muted)] transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-5 leading-relaxed text-[var(--brand-muted)]">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
