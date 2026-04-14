import Link from "next/link";
import { site } from "@/content/site";

export function WhatsAppFab() {
  const href = `https://wa.me/${site.whatsapp}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/10 bg-[var(--brand-paper)] px-4 py-3 text-[13px] font-medium text-[var(--brand-ink)] shadow-[0_8px_30px_-8px_rgba(10,22,40,0.4)] transition hover:bg-[var(--brand-ink)] hover:text-[var(--brand-paper)]"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
      </span>
      <span className="hidden sm:inline">Fale no WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </Link>
  );
}
