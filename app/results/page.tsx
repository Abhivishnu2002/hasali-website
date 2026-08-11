import type { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description:
    "Real client transformations at Hasali Cosmetology Clinic, Kochi — skin rejuvenation, hair restoration, and clinical treatments. Book your consultation.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return <ResultsClient />;
}
