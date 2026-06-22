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
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon.jpg", type: "image/jpeg" },
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
        url: "/icon.jpg",
        width: 1200,
        height: 1200,
        alt: "Agilent Freight - The Corridor Managers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agilent Freight | The Corridor Managers",
    description:
      "Intelligent freight forwarding and corridor management across Southern Africa and global trade routes.",
    images: ["/icon.jpg"],
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
