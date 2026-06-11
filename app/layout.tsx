import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030305",
};

export const metadata: Metadata = {
  title: "Meno Pixels — Web & E-commerce Studio | Sri Lanka",
  description:
    "Meno Pixels helps tourism brands, local businesses, and online sellers build modern websites, online stores, and Google-ready digital presence that turns visitors into customers.",
  keywords: [
    "web design Sri Lanka",
    "e-commerce setup Sri Lanka",
    "Shopify WooCommerce Sri Lanka",
    "tourism website Negombo",
    "digital presence Sri Lanka",
    "website design Negombo",
    "Meno Pixels",
  ],
  authors: [{ name: "Meno Pixels" }],
  openGraph: {
    title: "Meno Pixels — Web & E-commerce Studio",
    description:
      "Modern websites, online stores & digital presence for Sri Lankan businesses.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
