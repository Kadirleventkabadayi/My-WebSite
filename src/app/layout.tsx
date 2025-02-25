import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/areas/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadir Levent Kabadayı",
  description: "Kadir Levent Kabadayı's personal website",
  openGraph: {
    images: "/metaimg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lemon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
