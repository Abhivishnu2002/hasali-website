"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import StarRating from "@/components/ui/StarRating";
import { useBookingModal } from "@/components/ui/BookingModalContext";

const CASE_STUDIES = [
  {
    id: "cs1",
    serviceCategory: "Skin Rejuvenation",
    title: "Celebrity Glass Skin Protocol — 30 Days",
    tag: "30-Day Transformation",
    timeline: "4 sessions across 30 days",
    description:
      "Client presented with dullness, uneven texture, and early pigmentation. Followed our signature 30-day protocol combining HydraFacial, clinical peel, carbon glow, and LED therapy.",
    highlights: [
      "Visibly refined skin texture",
      "Noticeable reduction in dark spots",
      "Luminous, hydrated glass-skin glow",
    ],
    clientQuote: "My skin has never felt this hydrated or looked this clear. People ask me what I've done!",
    clientName: "Ananya S., Kochi",
    beforeImage: "/images/cosmetology_treatment.jpg",
    afterImage: "/images/glass_skin_treatment.jpg",
  },
  {
    id: "cs2",
    serviceCategory: "Hair Therapy & Trichology",
    title: "Keratin Botox Hair Repair",
    tag: "1 Session Result",
    timeline: "Single 2-hour treatment session",
    description:
      "Client suffered from severe frizz, breakage, and dullness following chemical straightening. Received our reconstructive Keratin Botox hair treatment.",
    highlights: [
      "100% frizz elimination",
      "Mirror-like shine and silkiness",
      "Restored hair fiber strength",
    ],
    clientQuote: "I was skeptical about hair botox, but the difference after just one session blew me away.",
    clientName: "Deepika M., Ernakulam",
    beforeImage: "/images/scrollpic1.png",
    afterImage: "/images/brazilian_botox_hair.jpg",
  },
];

export default function ResultsClient() {
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
              Real Transformations
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
                marginBottom: "1rem",
              }}
            >
              Results that speak for themselves.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "48ch",
              }}
            >
              Real stories and documented journeys from Hasali clients in Kadavanthara and Kalamassery.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-pad" style={{ backgroundColor: "#faf5ea" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {CASE_STUDIES.map((cs, i) => (
              <SectionReveal key={cs.id} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(197, 160, 89, 0.3)",
                    boxShadow: "0 12px 36px rgba(197, 160, 89, 0.08)",
                    padding: "clamp(1.5rem, 4vw, 3rem)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "2.5rem",
                      alignItems: "center",
                    }}
                    className="cs-grid"
                  >
                    {/* Visual before/after pair */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", backgroundColor: "#f0ebe1" }}>
                        <Image src={cs.beforeImage} alt={`${cs.title} — Before`} fill sizes="25vw" style={{ objectFit: "cover" }} />
                        <span style={{ position: "absolute", bottom: "0.5rem", left: "0.5rem", backgroundColor: "rgba(35,31,28,0.75)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                          Before
                        </span>
                      </div>
                      <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", backgroundColor: "#f0ebe1" }}>
                        <Image src={cs.afterImage} alt={`${cs.title} — After`} fill sizes="25vw" style={{ objectFit: "cover" }} />
                        <span style={{ position: "absolute", bottom: "0.5rem", left: "0.5rem", backgroundColor: "var(--color-gold-dark)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                          After
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", display: "block", marginBottom: "0.5rem" }}>
                        {cs.serviceCategory} · {cs.timeline}
                      </span>
                      <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "var(--color-espresso)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                        {cs.title}
                      </h2>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--color-espresso-soft)", marginBottom: "1.25rem" }}>
                        {cs.description}
                      </p>

                      <div style={{ marginBottom: "1.5rem" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-espresso)", marginBottom: "0.5rem" }}>
                          Key Results:
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          {cs.highlights.map((h, hi) => (
                            <li key={hi} style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <span style={{ color: "var(--color-gold-dark)", fontWeight: 700 }}>✓</span> {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quote box */}
                      <blockquote style={{ margin: 0, padding: "1rem 1.25rem", backgroundColor: "#faf5ea", borderLeft: "3px solid var(--color-gold-dark)", borderRadius: "0 8px 8px 0" }}>
                        <StarRating rating={5} size={13} />
                        <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "var(--color-espresso)", margin: "0.35rem 0 0.25rem" }}>
                          "{cs.clientQuote}"
                        </p>
                        <cite style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-gold-dark)", fontStyle: "normal" }}>
                          — {cs.clientName}
                        </cite>
                      </blockquote>

                      <button
                        type="button"
                        onClick={() => openBookingModal(cs.title)}
                        className="btn-gold"
                        style={{ marginTop: "1.5rem", fontSize: "0.75rem", cursor: "pointer" }}
                      >
                        <MessageCircle size={14} strokeWidth={1.5} />
                        Book This Protocol
                      </button>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <style>{`
          .cs-grid { grid-template-columns: 1fr; }
          @media (min-width: 768px) {
            .cs-grid { grid-template-columns: 1fr 1.2fr; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#fdfbf7",
          paddingBlock: "4rem",
          textAlign: "center",
          borderTop: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                marginBottom: "1.5rem",
              }}
            >
              Ready to start your transformation?
            </h2>
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="btn-gold"
              style={{ cursor: "pointer" }}
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              Book Your Consultation
            </button>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
