import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustStrip from "@/components/sections/home/TrustStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import QuantumFeaturesGrid from "@/components/sections/home/QuantumFeaturesGrid";
import SignaturePackages from "@/components/sections/home/SignaturePackages";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import GallerySection from "@/components/sections/home/GallerySection";
import LocationsPreview from "@/components/sections/home/LocationsPreview";
import InstagramTeaser from "@/components/sections/home/InstagramTeaser";
import FAQSection from "@/components/sections/home/FAQSection";
import FinalCTABand from "@/components/sections/home/FinalCTABand";

export const metadata: Metadata = {
  title: "Hasali Cosmetology Clinic & Salon — Kochi",
  description:
    "Premium unisex cosmetology clinic and beauty salon in Kochi, Kerala. ISO 9001:2015 certified. Medical-grade skin treatments, hair & trichology, IV wellness therapy across 2 locations: Kadavanthara & Kalamassery.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <QuantumFeaturesGrid />
      <SignaturePackages />
      <TestimonialsSection />
      <GallerySection />
      <LocationsPreview />
      <InstagramTeaser />
      <FAQSection />
      <FinalCTABand />
    </>
  );
}
