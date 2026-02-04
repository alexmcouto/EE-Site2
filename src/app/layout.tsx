import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/app/globals.css";
import { site } from "@/content/site";
import { defaultMetadata } from "@/lib/metadata";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    description: site.brand.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Presidente Nicolau Lobato, Bairro Colmera",
      addressLocality: "Dili",
      addressCountry: "Timor-Leste",
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
