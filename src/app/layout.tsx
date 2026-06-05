import type { Metadata } from "next";
import { Outfit, Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Varshan | Full Stack Developer & AI Automation Builder",
  description: "Personal portfolio and technical logs of Shree Varshan. Discover full stack Next.js solutions, workflow automation AI agents, technical SEO strategies, and digital marketing optimizations.",
  keywords: ["Shree Varshan", "Full Stack Developer", "AI Agents Builder", "SEO Specialist", "Digital Marketer", "Video Editor", "Next.js", "TypeScript"],
  authors: [{ name: "Shree Varshan" }],
  creator: "Shree Varshan",
  metadataBase: new URL("https://shreevarshan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreevarshan.dev",
    title: "Shree Varshan | Full Stack Developer & AI Automation Builder",
    description: "Navigating Ideas Into Digital Reality. Explore interactive code islands, custom AI automations, and search ranking strategies.",
    siteName: "Shree Varshan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Varshan Portfolio - Charting New Routes Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Varshan | Full Stack Developer & AI Automation Builder",
    description: "Personal portfolio and technical logs of Shree Varshan. Navigating Ideas Into Digital Reality.",
    images: ["/og-image.jpg"],
    creator: "@shreevarshan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schemas for Search Indexers
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://shreevarshan.dev/#person",
        "name": "Shree Varshan",
        "jobTitle": "Full Stack Developer & AI Builder",
        "url": "https://shreevarshan.dev",
        "image": "https://shreevarshan.dev/avatar.jpg",
        "sameAs": [
          "https://github.com/shreevarshan",
          "https://linkedin.com/in/shreevarshan",
          "https://twitter.com/shreevarshan"
        ],
        "description": "B.Tech Graduate, Full Stack Developer, AI Builder, SEO Specialist, Digital Marketer, and Video Editor."
      },
      {
        "@type": "WebSite",
        "@id": "https://shreevarshan.dev/#website",
        "url": "https://shreevarshan.dev",
        "name": "Shree Varshan Portfolio",
        "publisher": {
          "@id": "https://shreevarshan.dev/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-400/35 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
