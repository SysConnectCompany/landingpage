import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { sections } from "@/content/sections";

export function WhatsAppFab() {
  const href = `https://wa.me/${site.whatsapp}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sections.whatsapp.label}
      title={sections.whatsapp.label}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
