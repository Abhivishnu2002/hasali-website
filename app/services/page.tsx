import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full service menu at Hasali Cosmetology Clinic & Salon, Kochi — Dermatology & Cosmetology Consultation, Hair & Trichology, IV Wellness Therapy, Advanced Skin Treatments, and Nails. Book a consultation for pricing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
