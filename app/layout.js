import { Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Juanse Hurtado",
  description:
    "With over 5 years of combined experience, I'm a Full-stack developer skilled in building web applications, with a solid background in digital marketing.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
    </html>
  );
}
