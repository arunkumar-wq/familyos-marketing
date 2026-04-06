import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "FamilyOS — AI-Powered Family Document & Finance Platform",
    template: "%s | FamilyOS",
  },
  description:
    "FamilyOS is the unified AI-powered platform for family life management. Secure document vault, financial portfolio tracking, and connected intelligence — all in one app. Starting at $149/yr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
