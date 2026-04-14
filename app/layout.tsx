import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Sys Connect — Desenvolvimento de Software sob medida",
    template: "%s | Sys Connect",
  },
  description:
    "Desenvolvimento de software sob medida, aplicativos mobile, integrações e squads dedicados para empresas que buscam tecnologia de ponta.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sys Connect",
    images: ["/og-image.svg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sys Connect",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    description:
      "Desenvolvimento de software sob medida, aplicativos mobile, integrações e squads dedicados.",
  };

  return (
    <html lang="pt-BR" className={cn(inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
