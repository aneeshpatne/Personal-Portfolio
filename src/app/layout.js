import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aneesh Patne - Professional Portfolio",
  description: "Masters student with a strong foundation in Full Stack Web Development & Data Structures and Algorithms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
