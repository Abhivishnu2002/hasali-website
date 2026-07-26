import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full service menu at Hasali Cosmetology Clinic & Salon, Kochi — Skin & Cosmetology, Hair, Bridal & Makeup, and Nails. Book a consultation for pricing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
