import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find Hasali Cosmetology Clinic & Salon in Kochi — Kadavanthara (flagship) and Kalamassery (branch). Open daily 10 AM – 8 PM. Book a consultation online.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
