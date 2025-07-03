import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Douziech | Portfolio",
  description: "Building AI that bypasses the job hunt BS. Tech entrepreneur passionate about solving real-world problems through AI and automation.",
  keywords: "Nathan Douziech, AI, tech entrepreneur, finance, software development, job platform, automation",
  openGraph: {
    title: "Nathan Douziech | AI Builder & Tech Entrepreneur",
    description: "Building AI that bypasses the job hunt BS",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
