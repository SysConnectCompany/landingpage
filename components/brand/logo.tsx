import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  tone?: "dark" | "light";
  className?: string;
};

export function LogoMark({ tone = "dark", className }: Omit<LogoProps, "variant">) {
  const light = tone === "light";
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <rect width="40" height="40" rx="8" fill={light ? "#FFFFFF" : "#0B1F3A"} />
      <g stroke={light ? "#0B1F3A" : "#FFFFFF"} strokeWidth="2.6" strokeLinecap="round">
        <path d="M17.6 15.5A4.3 4.3 0 1 0 13.3 19.8A4.3 4.3 0 1 1 9 24.1" />
        <path d="M31.6 15.4A7 7 0 1 0 31.6 24.6" />
      </g>
      <path d="M13.3 19.8H20" stroke="#1D4ED8" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="31.6" cy="24.6" r="2.4" fill="#1D4ED8" />
    </svg>
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
