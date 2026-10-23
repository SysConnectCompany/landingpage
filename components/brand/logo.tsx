import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  tone?: "dark" | "light";
  className?: string;
};

export function LogoMark({ className }: Omit<LogoProps, "variant">) {
  return (
    <Image
      src="/brand/sysconnect-mark.png"
      alt=""
      aria-hidden
      width={256}
      height={256}
      priority
      className={cn("h-9 w-9 shrink-0", className)}
    />
  );
}

export function Logo({ variant = "full", tone = "dark", className }: LogoProps) {
  if (variant === "mark") return <LogoMark tone={tone} className={className} />;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} />
      <span
        className={cn(
          "text-[19px] leading-none tracking-[-0.02em]",
          tone === "light" ? "text-white" : "text-[var(--brand-ink)]",
        )}
      >
        <span className="font-bold">Sys</span>
        <span className="font-medium">Connect</span>
      </span>
    </span>
  );
}
