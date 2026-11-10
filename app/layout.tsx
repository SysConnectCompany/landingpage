import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { site } from "@/content/site";
import { buildStructuredData, jsonLdScript } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(buildStructuredData()) }}
        />
        {children}
        <CookieConsent gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
