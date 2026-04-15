import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "LINIO — AI-Powered Family Document & Finance Platform",
    template: "%s | LINIO",
  },
  description:
    "LINIO is the unified AI-powered platform for family life management. Secure document vault, financial portfolio tracking, and connected intelligence — all in one app. Starting at $149/yr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
