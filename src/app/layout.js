import { Raleway } from "next/font/google";
import "./globals.css";
import "../components/style/header.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio Website",
  description: "A personal website showcasing various projects",
  openGraph: {
    title: "Portfolio",
    description: "Personal portfolio website",
    url: "https://example.com/",
    siteName: "Portfolio",
    type: "website",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Personal portfolio website",
    images: ["https://example.com/image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Developer",
      url: "https://example.com",
      sameAs: [],
      description: "A developer portfolio",
    },
  };

  return (
    <html lang="en" className={raleway.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body style={{ overflow: 'hidden', height: '100vh' }}>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
