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
        alt && "bg-[var(--brand-cream)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
