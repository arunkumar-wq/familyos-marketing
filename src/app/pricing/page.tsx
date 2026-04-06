import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Stop paying the Fragmentation Tax. One intelligent platform for family documents, portfolio tracking, and estate planning.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
