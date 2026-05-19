import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aligientfreight.com"),
  title: "Agilent Freight | The Corridor Managers",
  description:
    "Agilent Freight delivers intelligent freight forwarding, corridor management, and trade logistics solutions across Southern Africa and global trade routes. Agile in Motion. Intelligent in Mind.",
  keywords: [
    "freight forwarding",
    "logistics",
    "corridor management",
    "air freight",
    "ocean freight",
    "road freight",
    "customs clearance",
    "project cargo",
    "cold chain",
    "trade finance",
    "Zimbabwe",
    "Africa logistics",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Agilent Freight | The Corridor Managers",
    description:
      "Intelligent freight forwarding and corridor management across Southern Africa and global trade routes.",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "/images/og_share.png",
        width: 1200,
        height: 630,
        alt: "Agilent Freight - The Corridor Managers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agilent Freight | The Corridor Managers",
    description:
      "Intelligent freight forwarding and corridor management across Southern Africa and global trade routes.",
    images: ["/images/og_share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${geist.variable} scroll-smooth antialiased`}
      >
        <body className="min-h-screen bg-background font-sans text-foreground">
          {children}
          <CookieNotice />
        </body>
    </html>
  );
}
