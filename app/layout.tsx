import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import StructuredData from "@/components/StructuredData";
import { personalInfo } from "@/lib/data";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  keywords: [
    personalInfo.name,
    "Full Stack Engineer",
    "System Architect",
    ".NET Developer",
    "ASP.NET Core",
    "Microservices",
    "Azure",
    "React",
    "TypeScript",
    "Backend Engineer India",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: siteConfig.faviconUrl, type: "image/png" }],
    shortcut: siteConfig.faviconUrl,
    apple: siteConfig.faviconUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: personalInfo.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImageUrl,
        alt: `${personalInfo.name} — ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImageUrl],
  },
  category: "technology",
  other: {
    "geo.region": "IN-TN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
