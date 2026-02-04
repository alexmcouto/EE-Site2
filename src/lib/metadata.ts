import type { Metadata } from "next";

import { site } from "@/content/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.brand.name,
    template: `%s | ${site.brand.name}`,
  },
  description: site.brand.tagline,
  openGraph: {
    title: site.brand.name,
    description: site.brand.tagline,
    type: "website",
    siteName: site.brand.name,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: site.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.name,
    description: site.brand.tagline,
    images: ["/og.svg"],
  },
};
