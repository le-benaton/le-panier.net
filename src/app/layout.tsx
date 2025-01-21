import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ル パニエ｜西宮・夙川のフレンチシェフが手掛けるデリカテッセン（お惣菜）とワインのお店",
  description: "西宮・夙川のフレンチシェフが手掛けるデリカテッセン（お惣菜）とワインのお店。",
  icons: [
    {
      href: "/favicon/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      url: "/favicon/favicon-96x96.png",
    },
    {
      href: "/favicon/favicon.svg",
      type: "image/svg+xml",
      url: "/favicon/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
