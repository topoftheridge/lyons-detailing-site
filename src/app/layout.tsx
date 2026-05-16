import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Lyons Detailing | Professional Auto Detailing",
    template: "%s | Lyons Detailing",
  },
  description:
    "Lyons Detailing offers professional auto detailing services including interior detailing, exterior detailing, paint correction, and ceramic coating. Book your detail today.",
  keywords: [
    "auto detailing",
    "car detailing",
    "interior detailing",
    "exterior detailing",
    "paint correction",
    "ceramic coating",
    "Lyons Detailing",
    "professional car detailing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
