"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Award, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { BRAND, CREDENTIALS } from "@/content/site";
import SectionReveal from "@/components/ui/SectionReveal";
import { useBookingModal } from "@/components/ui/BookingModalContext";

const VALUES = [
  {
    icon: <ShieldCheck size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "Clinical Rigor",
    desc: "Every protocol at Hasali is grounded in dermatological science, strict hygiene benchmarks, and evidence-backed techniques.",
  },
  {
    icon: <HeartHandshake size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "Artisan Personalization",
    desc: "We treat no two clients the same. Every treatment plan begins with diagnosis and evolves as your skin and hair do.",
  },
  {
    icon: <Award size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "ISO Quality Standards",
    desc: "Certified under ISO 9001:2015, ensuring consistent quality, safety, and operational excellence across all branches.",
  },
];

export default function AboutClient() {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(4.5rem + clamp(3rem, 6vw, 5rem))",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "var(--section-pad-x)",
          backgroundColor: "#fdfbf7",
          color: "var(--color-espresso)",
          borderBottom: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>
              About Hasali
            </span>
            <div className="rule-gold" />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--color-espresso)",
                maxWidth: "22ch",
                marginBottom: "1.25rem",
              }}
            >
              Where clinical skin science meets artisan beauty.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "52ch",
              }}
            >
              Founded in 2023, Hasali Cosmetology Clinic is Kochi's premier unisex destination for medical-grade skincare, trichology hair rituals, and clinical aesthetics.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Brand story */}
      <section className="section-pad" style={{ backgroundColor: "#faf5ea" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }} className="about-story-grid">
            <SectionReveal>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", display: "block", marginBottom: "0.5rem" }}>
                Our Philosophy
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-espresso)",
                  marginBottom: "1.25rem",
                }}
              >
                A modern approach to skin health & confidence.
              </h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-espresso-soft)", marginBottom: "1rem" }}>
                At Hasali, we believe beauty is not about artificial standards — it is about health, balance, and feeling confident in your own skin. That is why every service we offer combines clinical expertise with bespoke care.
              </p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-espresso-soft)", margin: 0 }}>
                Whether you visit our flagship clinic in Kadavanthara or our branch in Kalamassery, you step into a tranquil, hygienic space designed for complete rejuvenation.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "20px", overflow: "hidden", border: "1.5px solid rgba(197, 160, 89, 0.35)", boxShadow: "0 12px 36px rgba(197, 160, 89, 0.12)" }}>
                <Image src="/images/cosmetology_treatment.jpg" alt="Cosmetology session at Hasali Clinic Kochi" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              </div>
            </SectionReveal>
          </div>
        </div>

        <style>{`
          .about-story-grid { grid-template-columns: 1fr; }
          @media (min-width: 768px) {
            .about-story-grid { grid-template-columns: 1.2fr 1fr; }
          }
        `}</style>
      </section>

      {/* Core Values */}
      <section className="section-pad" style={{ backgroundColor: "#fdfbf7" }}>
        <div className="container">
          <SectionReveal>
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
              <span className="section-pill" style={{ marginBottom: "1rem" }}>• What Sets Us Apart</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "var(--color-espresso)", letterSpacing: "-0.02em" }}>
                Built on trust & excellence
              </h2>
            </div>
          </SectionReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {VALUES.map((val, i) => (
              <SectionReveal key={val.title} delay={i * 0.1}>
                <div style={{ backgroundColor: "#ffffff", padding: "2.25rem 1.75rem", borderRadius: "16px", border: "1px solid rgba(197, 160, 89, 0.3)", boxShadow: "0 8px 24px rgba(197, 160, 89, 0.08)", height: "100%" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "12px", backgroundColor: "#faf5ea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 400, color: "var(--color-espresso)", marginBottom: "0.6rem" }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-espresso-soft)", margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#faf5ea", paddingBlock: "4rem", textAlign: "center", borderTop: "1px solid rgba(197, 160, 89, 0.25)" }}>
        <div className="container">
          <SectionReveal>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", color: "var(--color-espresso)", marginBottom: "1.5rem" }}>
              Come meet us in Kochi.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="btn-gold"
                style={{ cursor: "pointer" }}
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                Book a Consultation
              </button>
              <Link href="/locations" className="btn-ghost">
                View Locations
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
