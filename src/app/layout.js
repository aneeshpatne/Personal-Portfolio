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
  link: [
    {
      rel: "preload",
      href: "../components/style/header.css",
      as: "style",
    },
  ],
  icons: {
    icon: "/assets/img/favicon.svg",
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
        <meta
          property="og:title"
          content="Aneesh Patne - Professional Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aneeshpatne.com/" />
        <meta
          property="og:image"
          content="https://www.aneeshpatne.com/assets/img/header.png"
        />
        <meta
          property="og:description"
          content="Aneesh Patne is a engineer with expertise in full stack web development, and Artificial Inteligence."
        />
        <meta property="og:site_name" content="Aneesh Patne" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aneeshpatne" />
        <meta name="twitter:title" content="Aneesh Patne" />
        <meta
          name="twitter:description"
          content="Aneesh Patne is a engineer with expertise in full stack web development, and Artificial Inteligence."
        />
        <meta
          name="twitter:image"
          content="https://www.aneeshpatne.com/assets/img/aneesh.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-2ZB3L8XV5X" />
    </html>
  );
}
