import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
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
  title: "A1 Emergency Mobile Tyres | 24/7 Roadside Assistance UK",
  description: "24/7 emergency roadside tyre fitting and puncture repair across Bedfordshire, Buckinghamshire, Cambridgeshire, Hertfordshire, Northamptonshire, and Essex.",
  keywords: "mobile tyre fitting, emergency puncture repair, roadside assistance, 24/7 tyres, wheel nut removal, TPMS repair",
  openGraph: {
    title: "A1 Emergency Mobile Tyres",
    description: "Stranded? We're on our way. 24/7 Professional Mobile Tyre Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${dmSans.variable} font-dm antialiased bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
