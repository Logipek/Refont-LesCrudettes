import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import { WarningDialog } from "@/components/ui/alert-dialog";

// Optimiser le chargement de la police en préchargeant uniquement les poids nécessaires
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

// Fusionner metadata et generateMetadata en une seule exportation
export const metadata: Metadata = {
  title: "Les Crudettes - Produits bio et éco-responsables",
  description:
    "Des produits frais et savoureux, cultivés avec passion pour une alimentation saine et responsable.",
  metadataBase: new URL("https://lescrudettes.fr"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#10b981",
  robots: "index, follow",
  openGraph: {
    title: "Les Crudettes - Produits bio et éco-responsables",
    description:
      "Des produits frais et savoureux, cultivés avec passion pour une alimentation saine et responsable.",
    type: "website",
    locale: "fr_FR",
    url: "https://lescrudettes.fr",
  },
  // Ajout des headers pour l'optimisation directement dans metadata
  other: {
    "Cache-Control": "public, max-age=31536000, immutable",
    "Content-Security-Policy":
      "default-src 'self'; img-src 'self' data: https://images.unsplash.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.gstatic.com;",
    "X-DNS-Prefetch-Control": "on",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        {/* Préchargement des ressources critiques */}
        <link
          rel="preload"
          href="/images/optimized/hero-bg.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/hero-recettes.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#10b981" />
        <meta name="color-scheme" content="light" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Pour améliorer les métriques FCP et LCP */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
          crossOrigin=""
        />

        {/* Script d'optimisation critique pour éviter les LCP lents */}
        <Script id="performance-improvements" strategy="beforeInteractive">{`
          // Méthode pour éviter les polices web FOIT (Flash of Invisible Text)
          document.documentElement.classList.add('font-loaded');

          // Définir les variables CSS pour une meilleure performance
          document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');

          // Désactiver les animations pour les utilisateurs qui préfèrent le mouvement réduit
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.classList.add('no-motion');
          }
        `}</Script>
      </head>
      <body className="antialiased">
        <WarningDialog />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
