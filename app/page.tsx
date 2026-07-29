import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustStrip from "@/components/sections/home/TrustStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import SignaturePackages from "@/components/sections/home/SignaturePackages";
import HasaliDifference from "@/components/sections/home/HasaliDifference";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import LocationsPreview from "@/components/sections/home/LocationsPreview";
import InstagramTeaser from "@/components/sections/home/InstagramTeaser";
import FinalCTABand from "@/components/sections/home/FinalCTABand";

export const metadata: Metadata = {
  title: "Hasali Cosmetology Clinic & Salon — Kochi",
  description:
    "Premium unisex cosmetology clinic and beauty salon in Kochi, Kerala. ISO 9001:2015 certified. Medical-grade skin treatments, hair, bridal makeup & nails across 2 locations: Kadavanthara & Kalamassery.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <SignaturePackages />
      <HasaliDifference />
      <TestimonialsSection />
      <LocationsPreview />
      <InstagramTeaser />
      <FinalCTABand />
    </>
  );
}
