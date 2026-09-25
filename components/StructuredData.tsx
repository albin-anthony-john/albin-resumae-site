import { personalInfo } from "@/lib/data";
import { getSiteUrl, siteConfig } from "@/lib/site";

export default function StructuredData() {
  const siteUrl = getSiteUrl();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.summary,
    email: `mailto:${personalInfo.email}`,
    url: siteUrl,
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kallakurichi",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: personalInfo.name,
      url: siteUrl,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteUrl,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: siteUrl },
    mainEntity: {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      sameAs: [...siteConfig.sameAs],
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, webSite, webPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
