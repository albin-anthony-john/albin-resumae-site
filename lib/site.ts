import { personalInfo } from "./data";

/** Production site URL. Set NEXT_PUBLIC_SITE_URL in Cloudflare / local env. */
const DEFAULT_SITE_URL = "https://albinanthony.tech";

const CDN =
  "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-resumae";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = fromEnv || DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}

export function getOgImageUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  return fromEnv || `${CDN}/icons/favicon.png`;
}

export const siteConfig = {
  name: personalInfo.name,
  defaultTitle: `${personalInfo.name} | ${personalInfo.title}`,
  shortTitle: personalInfo.title,
  description: personalInfo.summary,
  locale: "en_IN" as const,
  faviconUrl: `${CDN}/icons/favicon.png`,
  ogImageUrl: getOgImageUrl(),
  sameAs: [personalInfo.github, personalInfo.linkedin] as const,
};
