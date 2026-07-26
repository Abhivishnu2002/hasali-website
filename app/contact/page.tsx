import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Contact Hasali Cosmetology Clinic & Salon in Kochi — book via WhatsApp, call, or send a message. Two locations: Kadavanthara & Kalamassery.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
