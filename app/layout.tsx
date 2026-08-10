import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
import { BRAND, LOCATIONS, SITE_URL } from "@/content/site";

/* ── Fraunces — display serif for headlines ── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

/* ── Switzer — grotesk body font, self-hosted ── */
const switzer = localFont({
  src: [
    { path: "../public/fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Switzer-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

/* ── JSON-LD structured data for both locations ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": LOCATIONS.map((loc) => ({
    "@type": ["BeautySalon", "MedicalSpa", "LocalBusiness"],
    name: BRAND.fullName,
    alternateName: BRAND.name,
    description: BRAND.positioning,
    url: SITE_URL,
    telephone: "+919995366858",
    priceRange: "₹₹",
    image: [`${SITE_URL}/images/pic1.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${loc.address.street}, ${loc.address.area}`,
      addressLocality: loc.address.city,
      addressRegion: loc.address.state,
      postalCode: loc.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: loc.rating,
      reviewCount: loc.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    // ASSUMPTION: Open 10 AM – 8 PM daily — confirm with client
    openingHoursSpecification: loc.openingHoursSpecification,
    hasMap: loc.mapsUrl,
    foundingDate: String(BRAND.established),
    sameAs: ["https://instagram.com/hasali_cosmetology_clinic"],
  })),
};

/* ── Site-wide default metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hasali Cosmetology Clinic & Salon — Kochi",
    template: "%s — Hasali",
  },
  description:
    "Premium unisex cosmetology clinic and beauty salon in Kochi, Kerala. Medical-grade skin treatments, hair, bridal makeup, and nails. Two locations: Kadavanthara & Kalamassery.",
  keywords: [
    "cosmetology clinic kochi",
    "beauty salon kochi",
    "skin treatment kochi",
    "bridal makeup kochi",
    "hair salon kochi",
    "unisex salon kochi",
    "kadavanthara salon",
    "kalamassery beauty clinic",
    "hasali",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BRAND.fullName,
    title: "Hasali Cosmetology Clinic & Salon — Kochi",
    description:
      "Where clinical skin science meets artisan beauty. Two locations in Kochi, Kerala.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hasali Cosmetology Clinic & Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasali Cosmetology Clinic & Salon — Kochi",
    description: "Where clinical skin science meets artisan beauty.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${switzer.variable}`}
    >
      <body style={{ fontFamily: "var(--font-switzer), system-ui, sans-serif" }}>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
