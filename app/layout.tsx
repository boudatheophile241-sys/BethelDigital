import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Police manuscrite (script) — utilisee pour le slogan du carnet.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "600", "700"],
  display: "swap",
});

const url = "https://betheldigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Bethel Digital — Identite visuelle & Branding",
    template: "%s | Bethel Digital",
  },
  description:
    "Bethel Digital est une agence créative fondée par Théophile Bouda. Identité visuelle, branding, design graphique, impression, marketing digital et création de sites web.",
  keywords: [
    "identite visuelle",
    "branding",
    "design graphique",
    "creation de logo",
    "agence creative",
    "Maroc",
    "Afrique",
    "site web",
    "packaging",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url,
    siteName: site.name,
    title: "Bethel Digital — Identite visuelle & Branding",
    description:
      "Des identités visuelles qui racontent une histoire. Branding, design, impression, web et marketing digital.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bethel Digital — Identite visuelle & Branding",
    description: "Des identites visuelles qui racontent une histoire.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description:
    "Agence créative spécialisée en identité visuelle, branding, design graphique, impression, marketing digital et création de sites web.",
  url,
  founder: { "@type": "Person", name: site.founder },
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: site.location },
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}
