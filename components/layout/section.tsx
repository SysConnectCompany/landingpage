import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  containerClassName,
  alt = false,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        alt && "bg-[var(--brand-surface-alt)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <span className={cn("eyebrow", tone === "light" && "text-[#93B4FF]")}>{eyebrow}</span>}
      <h2
        className={cn(
          "display mt-3 text-3xl md:text-4xl",
          tone === "light" ? "text-white" : "text-[var(--brand-ink)]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "light" ? "text-[var(--brand-muted-on-dark)]" : "text-[var(--brand-muted)]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
