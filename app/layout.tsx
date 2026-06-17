import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { salonInfo } from "@/data/salon";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salonInfo.siteUrl),
  title: {
    default: `${salonInfo.name} | Peluquería de Autor en Buenos Aires`,
    template: `%s | ${salonInfo.name}`,
  },
  description: salonInfo.description,
  keywords: [
    "peluquería Buenos Aires",
    "salón de belleza Palermo",
    "balayage Buenos Aires",
    "corte de pelo premium",
    "keratina Buenos Aires",
    "barbería premium",
    "coloración cabello",
    "Maison Aurea",
  ],
  authors: [{ name: salonInfo.name }],
  creator: salonInfo.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: salonInfo.siteUrl,
    siteName: salonInfo.name,
    title: `${salonInfo.name} | Peluquería de Autor`,
    description: salonInfo.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${salonInfo.name} - Peluquería de lujo en Buenos Aires`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${salonInfo.name} | Peluquería de Autor`,
    description: salonInfo.description,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: salonInfo.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: salonInfo.name,
    description: salonInfo.description,
    url: salonInfo.siteUrl,
    telephone: salonInfo.phone,
    email: salonInfo.email,
    image: `${salonInfo.siteUrl}/opengraph-image`,
    priceRange: salonInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Santa Fe 2847",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.588929,
      longitude: -58.410758,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: salonInfo.rating,
      reviewCount: salonInfo.reviewCount,
      bestRating: 5,
    },
    sameAs: [
      salonInfo.social.instagram,
      salonInfo.social.facebook,
      salonInfo.social.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
