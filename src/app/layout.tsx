import type { Metadata } from "next";
import { Manrope, Inter, Archivo, Michroma } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
