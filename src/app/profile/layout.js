import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Aneesh Patne",
  description: "Portfolio and Bento Resume",
};

export default function ProfileLayout({ children }) {
  return <div className={spaceGrotesk.className}>{children}</div>;
}
