import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.defaultTitle,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    lang: "en-IN",
    icons: [
      {
        src: siteConfig.faviconUrl,
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
