import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pickpathconsulting.com"),

  title: {
    default: "PickPath — AI-Powered Warehouse Management System (WMS)",
    template: "%s | PickPath WMS",
  },

  description:
    "PickPath is an AI-powered Warehouse Management System (WMS) built for small and growing businesses. Smart pick routing, predictive analytics, anomaly detection, and a natural language assistant — all in one scanner-ready app.",

  keywords: [
    "warehouse management system",
    "AI warehouse management",
    "WMS software",
    "AI-powered WMS",
    "warehouse AI",
    "smart warehouse software",
    "pick routing software",
    "inventory management system",
    "warehouse automation",
    "artificial intelligence warehouse",
    "warehouse management app",
    "barcode scanning WMS",
    "small business WMS",
    "ecommerce warehouse software",
    "warehouse operations software",
    "predictive analytics warehouse",
    "warehouse anomaly detection",
    "natural language warehouse assistant",
    "mobile WMS",
    "cloud warehouse management system",
  ],

  authors: [{ name: "PickPath", url: "https://pickpathconsulting.com" }],
  creator: "PickPath",
  publisher: "PickPath Consulting",

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://pickpathconsulting.com",
    siteName: "PickPath",
    title: "PickPath — AI-Powered Warehouse Management System",
    description:
      "The WMS that thinks with you. Smart pick routing, predictive stockout alerts, real-time anomaly detection, and a natural language assistant — built for growing warehouses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PickPath AI Warehouse Management System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PickPath — AI-Powered Warehouse Management System",
    description:
      "Smart pick routing, predictive analytics, anomaly detection and a natural language assistant — the WMS built for growing warehouses.",
    images: ["/og-image.png"],
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

  alternates: {
    canonical: "https://pickpathconsulting.com",
  },

  category: "technology",
};

// JSON-LD structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "PickPath",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "AUD",
        lowPrice: "149",
        highPrice: "349",
        offerCount: "3",
      },
      description:
        "AI-powered Warehouse Management System with smart pick routing, predictive analytics, anomaly detection, and natural language assistant.",
      url: "https://pickpathconsulting.com",
      featureList: [
        "AI-powered smart pick routing",
        "Predictive stockout analytics",
        "Real-time anomaly detection",
        "Natural language warehouse assistant",
        "Scanner-first mobile apps (iOS & Android)",
        "Offline-capable operations",
        "Bin-level inventory tracking",
        "FEFO receiving and receipting",
        "Automated putaway suggestions",
      ],
    },
    {
      "@type": "Organization",
      name: "PickPath",
      url: "https://pickpathconsulting.com",
      logo: "https://pickpathconsulting.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "rahulnair160793@gmail.com",
      },
      sameAs: ["https://github.com/rahulnair160793"],
    },
    {
      "@type": "WebSite",
      url: "https://pickpathconsulting.com",
      name: "PickPath",
      description:
        "AI-powered Warehouse Management System for small and growing businesses",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://pickpathconsulting.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI-powered Warehouse Management System?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI-powered WMS like PickPath uses artificial intelligence to optimise warehouse operations — including smart pick routing, predictive stock alerts, real-time anomaly detection, and a natural language assistant that answers questions about your inventory.",
          },
        },
        {
          "@type": "Question",
          name: "How does PickPath's smart pick routing work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PickPath uses a greedy serpentine routing algorithm that sequences pick lines by zone, aisle, and bay — minimising travel distance automatically every time a pick task is opened.",
          },
        },
        {
          "@type": "Question",
          name: "Does PickPath work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. PickPath is built offline-first using local device databases. All warehouse operations including picking, receiving, and putaway continue without an internet connection.",
          },
        },
        {
          "@type": "Question",
          name: "Is PickPath suitable for small warehouses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. PickPath is specifically designed for small to medium-sized warehouses — ecommerce brands, wholesalers, distributors, and 3PLs — that need enterprise-grade AI features without the enterprise price tag.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
