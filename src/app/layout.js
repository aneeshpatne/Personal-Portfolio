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
  title: "Aneesh Patne - Professional Portfolio",
  description: "A lifelong learner who is talented, motivated, and adaptable",
  openGraph: {
    title: "Aneesh Patne - Professional Portfolio",
    description: "A lifelong learner who is talented, motivated, and adaptable",
    url: "https://www.aneeshpatne.com/",
    siteName: "Aneesh Patne",
    type: "website",
    images: [
      {
        url: "https://www.aneeshpatne.com/assets/img/header.jpg",
        width: 1200,
        height: 630,
        alt: "Aneesh Patne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Patne",
    description: "A lifelong learner who is talented, motivated, and adaptable",
    images: ["https://www.aneeshpatne.com/assets/img/aneesh.png"],
  },
  link: [
    {
      rel: "preload",
      href: "../components/style/header.css",
      as: "style",
    },
  ],
  icons: {
    icon: "/assets/img/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Aneesh Patne",
      url: "https://www.aneeshpatne.com",
      image: "https://www.aneeshpatne.com/assets/img/aneesh.png",
      sameAs: [
        "https://www.linkedin.com/in/aneeshpatne",
        "https://github.com/aneeshpatne",
      ],
      description:
        "Aneesh Patne is a engineer with expertise in full stack web development, and Artificial Inteligence.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Veermata Jijabai Technological University",
      },
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
      <body>{children}</body>
      <GoogleAnalytics gaId="G-2ZB3L8XV5X" />
    </html>
  );
}
