import type { Metadata } from "next";
import { seo } from "@/data/seo";
import { site } from "@/data/site";
import { getSiteUrl } from "@/utils/siteUrl";

/** Builds the page metadata (title, Open Graph, Twitter) from data/seo.ts. */
export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: seo.title, template: seo.titleTemplate },
    description: seo.description,
    applicationName: seo.applicationName,
    openGraph: {
      title: seo.title,
      description: seo.shortDescription,
      url: "/",
      siteName: site.name,
      locale: seo.locale,
      type: "website",
      images: [seo.image],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.shortDescription,
      images: [seo.image.url],
    },
    robots: { index: true, follow: true },
  };
}
