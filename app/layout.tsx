import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albin Antony - Full Stack Engineer & System Architect | Performance-Focused Backend Specialist",
  description: "Full Stack Engineer specializing in high-performance APIs handling 1M+ requests/day with <100ms latency. Expert in .NET ecosystem, microservices architecture, and production-grade system design. Proven track record of reducing costs by 35% while serving 5M+ users at 99.9% uptime.",
  keywords: [
    "Albin Antony",
    "Full Stack Engineer",
    "System Architect",
    "Performance Optimization",
    ".NET Core Expert",
    "Backend Specialist",
    "Microservices Architect",
    "High-Performance APIs",
    "Cloud-Native Architecture",
    "Production Engineering",
    "System Design",
  ],
  authors: [{ name: "Albin Antony" }],
  openGraph: {
    title: "Albin Antony - Full Stack Engineer & System Architect",
    description: "Expert in designing high-performance, scalable systems. Proven track record with 1M+ requests/day, <100ms latency, and 99.9% uptime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
