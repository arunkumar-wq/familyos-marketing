import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FamilyOS — AI-Powered Family Document & Finance Platform",
    template: "%s | FamilyOS",
  },
  description:
    "Stop paying the Fragmentation Tax. One intelligent platform for family documents, portfolio tracking, and estate planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
