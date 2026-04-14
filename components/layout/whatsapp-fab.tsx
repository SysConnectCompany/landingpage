import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export function WhatsAppFab() {
  const href = `https://wa.me/${site.whatsapp}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-[#20BD5C]"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </Link>
  );
}
