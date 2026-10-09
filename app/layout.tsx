import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "R. Shree Varshan — Building secure Digital Experience with code & Ai",
  description:
    "Computer Science Engineer specializing in SaaS Development, Model Context Protocol (MCP) servers, full-stack web & mobile apps, and cybersecurity.",
  keywords: [
    "Shree Varshan",
    "SaaS Development",
    "MCP",
    "Model Context Protocol",
    "AI Development",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Cybersecurity",
    "SEO",
  ],
  authors: [{ name: "R. Shree Varshan", url: "https://github.com/Shree-varshan-430" }],
  openGraph: {
    title: "R. Shree Varshan — Building secure Digital Experience with code & Ai",
    description:
      "Specializing in SaaS Development, MCP Servers & AI Toolchains, Full-Stack Web & Mobile Apps, and Cybersecurity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${jetBrains.variable} font-sans antialiased bg-[#0c0e12] text-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
