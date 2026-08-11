import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hasali Cosmetology Clinic & Salon, Kochi — ISO 9001:2015 certified unisex clinic offering medical-grade skin and hair treatments across Kadavanthara and Kalamassery.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
