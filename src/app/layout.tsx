import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Archivo, Michroma } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, SiteGraphSchema } from "@/components/JsonLd";

const GTM_ID = "GTM-P5TFBMGZ";

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
    default: "Front Range Detail Studio | PPF, Clear Bra, Ceramic Coating & Window Tinting",
    template: "%s | Front Range Detail Studio",
  },
  description:
    "Expert Colorado Window Tinting, Paint Protection Film (PPF), Clear Bra, Ceramic Coating, Detailing for vehicles, motorhomes, RVs, boats, aircraft.",
  metadataBase: new URL("https://frontrangedetailstudio.com"),
  applicationName: "Front Range Detail Studio",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  /* The old WP site sent index,follow with max-image-preview:large. Without
     it Google falls back to small thumbnails in image-heavy SERPs, which is
     exactly where a detailing shop wants to show up. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Front Range Detail Studio",
    url: "https://frontrangedetailstudio.com/",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Front Range Detail Studio — vehicle protection studio in Englewood, Colorado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/og-default.jpg"],
  },
  alternates: {
    canonical: "https://frontrangedetailstudio.com/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${manrope.variable} ${inter.variable} ${archivo.variable} ${michroma.variable}`}
    >
      <head>
        {/* Lighthouse: ~70ms saved. GTM/GA and the Maps embed are the only
            third-party origins the site touches; warm the connections early
            instead of paying DNS+TLS when the tag actually fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteGraphSchema />
        {await LocalBusinessSchema()}
        <Navigation />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
