import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Douziech | Portfolio",
  description: "Building AI that bypasses the job hunt BS. Founder of Bypass – an AI-powered platform connecting students directly to decision-makers.",
  keywords: "Nathan Douziech, AI, Bypass, startup, finance, tech entrepreneur, job platform",
  authors: [{ name: "Nathan Douziech" }],
  openGraph: {
    title: "Nathan Douziech | Portfolio",
    description: "Building AI that bypasses the job hunt BS",
    type: "website",
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
