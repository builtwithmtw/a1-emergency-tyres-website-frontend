import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { PHONE_NUMBER, COMPANY_NAME, COVERAGE_AREAS } from "@/lib/constants";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-emergency-tyres.netlify.app/"),
  title: {
    default: "A1 Emergency Mobile Tyres | 24/7 Roadside Assistance UK",
    template: "%s | A1 Emergency Mobile Tyres"
  },
  description: "Stranded with a flat tyre? A1 Emergency Mobile Tyres offers 24/7 roadside tyre fitting and puncture repair across Bedfordshire, Buckinghamshire, Cambridgeshire, Hertfordshire, Northamptonshire, and Essex. 35-minute average response time.",
  keywords: ["mobile tyre fitting", "emergency puncture repair", "roadside assistance", "24/7 tyres", "wheel nut removal", "TPMS repair", "Bedfordshire tyres", "Buckinghamshire mobile tyres", "Hertfordshire tyre repair", "Essex mobile fitting"],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: `${COMPANY_NAME} | 24/7 Roadside Assistance`,
    description: "Stranded? We're on our way. 24/7 Professional Mobile Tyre Services. 35-minute average response time.",
    url: "https://ai-emergency-tyres.netlify.app/",
    siteName: COMPANY_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - 24/7 Roadside Assistance`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | 24/7 Roadside Assistance`,
    description: "24/7 Professional Mobile Tyre Services. We come to you within 35 minutes on average.",
    images: ["/og-image.jpg"],
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
    canonical: "https://ai-emergency-tyres.netlify.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "image": "https://ai-emergency-tyres.netlify.app/og-image.jpg",
  "@id": "https://ai-emergency-tyres.netlify.app/",
  "url": "https://ai-emergency-tyres.netlify.app/",
  "telephone": PHONE_NUMBER,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mobile Service",
    "addressLocality": "Luton",
    "addressRegion": "Bedfordshire",
    "postalCode": "LU1",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.8787,
    "longitude": -0.4200
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://ai-emergency-tyres.netlify.app/"
  ],
  "areaServed": COVERAGE_AREAS.map(area => area.name),
  "description": "24/7 emergency roadside tyre fitting and puncture repair across the UK."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${dmSans.variable} font-dm antialiased bg-dark text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
