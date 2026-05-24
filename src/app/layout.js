import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Chandu Interior Designs | Warangal",
    template: "%s | Chandu Interior Designs",
  },
  description:
    "Premium interior design studio in Warangal & Hanamakonda. We blend heritage craftsmanship with modern minimalism to create timeless spaces.",
  keywords: [
    "interior design",
    "Warangal",
    "Hanamakonda",
    "home interiors",
    "luxury interiors",
    "residential design",
    "commercial interiors",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
