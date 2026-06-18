import type { Metadata } from "next";
import { Manrope, Inter, Archivo, Michroma } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/JsonLd";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const michroma = Michroma({
  variable: "--font-button",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Front Range Detail Studio - PPF, Ceramic Coating, Window Tinting in Denver",
    template: "%s | Front Range Detail Studio",
  },
  description:
    "Premium auto detailing studio in Englewood, CO. Ceramic coating, PPF, window tinting, vinyl wraps, paint correction for cars, RVs & boats. System X Certified. 5.0★ Google Reviews.",
  metadataBase: new URL("https://frontrangedetailstudio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Front Range Detail Studio",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3EVpSF8J7BYGcfrDJ4Z3bxfTn0C/hf_20260617_234445_6c35146a-5d69-4372-80d6-a91c3c0cd694.png",
        width: 1200,
        height: 630,
        alt: "Front Range Detail Studio - Premium Auto Detailing in Denver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://frontrangedetailstudio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${archivo.variable} ${michroma.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
