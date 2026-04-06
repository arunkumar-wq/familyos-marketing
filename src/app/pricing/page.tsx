import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Replace 5 disconnected apps with FamilyOS — plans from $149/yr. Save 50–90% vs. separate document storage, portfolio trackers, and password managers. 14-day free trial, 30-day money-back guarantee.",
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
