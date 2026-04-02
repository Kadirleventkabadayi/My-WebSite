import "./globals.css";

export const metadata = {
  title: "Kadir Levent Kabadayı — Full Stack Developer",
  description:
    "Full-stack developer with a background in game development. Skilled in React, Next.js, Node.js, Spring Boot.",
  icons: {
    icon: "/klk.ico",
  },
  keywords: [
    "full stack developer",
    "react",
    "next.js",
    "node.js",
    "spring boot",
    "kadir levent kabadayi",
  ],
  authors: [{ name: "Kadir Levent Kabadayı" }],
  openGraph: {
    title: "Kadir Levent Kabadayı — Full Stack Developer",
    description:
      "Full-stack developer building responsive interfaces and robust APIs.",
    url: "https://kadirleventkabadayi.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
