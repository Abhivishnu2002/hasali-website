"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { WA_HREF } from "@/content/site";

const PACKAGES = [
  {
    category: "HAIR RECONSTRUCTION & TRICHOLOGY",
    title: "Hair Care",
    price: "₹599",
    unit: "/session",
    features: [
      "Scalp analysis & consultation",
      "Deep conditioning therapy",
      "Anti-dandruff / keratin care",
      "Scalp detox & micro-nourishment",
    ],
    highlight: false,
    ctaText: "Book Hair Care",
  },
  {
    category: "MEDICAL-GRADE FACIALS",
    title: "Skin Treatments",
    price: "₹999",
    unit: "/session",
    features: [
      "Skin type diagnostic",
      "Hydra facial & deep cleanse",
      "Pigmentation / acne therapy",
      "Radiance glow mask",
    ],
    highlight: false,
    ctaText: "Book Skin Care",
  },
  {
    category: "COMPLETE BRIDAL GLOW",
    title: "Bridal Package",
    price: "₹4,999",
    unit: "/package",
    features: [
      "Pre-bridal skin prep sessions",
      "HD / Airbrush bridal makeup",
      "Hair styling & saree draping",
      "Nail extensions & art",
      "Trial session included",
    ],
    highlight: true,
    ctaText: "Book Bridal Package",
  },
];

export default function QuantumPricingGrid() {
  return (
    <section style={{ backgroundColor: "var(--color-ivory)", paddingBlock: "var(--section-pad-y)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        {/* Subtitle badge */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="section-pill">• Pricing & Packages</span>
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "600px", marginInline: "auto", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--color-espresso)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "0.875rem",
            }}
          >
            Best Service, Best Pricing
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-espresso-soft)", margin: 0 }}>
            We offer specialized services for hair, skin, and bridal care — designed to nurture your inner and outer beauty.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                backgroundColor: pkg.highlight ? "var(--color-dark-panel)" : "#fff",
                color: pkg.highlight ? "#fff" : "var(--color-espresso)",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                border: pkg.highlight ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                boxShadow: pkg.highlight ? "0 20px 40px rgba(0,0,0,0.2)" : "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              {pkg.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "999px",
                    backgroundColor: "var(--color-gold)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#000",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Sparkles size={12} /> MOST POPULAR
                </div>
              )}

              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: pkg.highlight ? "var(--color-gold-light)" : "var(--color-gold-dark)",
                  marginBottom: "0.75rem",
                }}
              >
                {pkg.category}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: pkg.highlight ? "#fff" : "var(--color-espresso)",
                  margin: 0,
                  marginBottom: "1rem",
                }}
              >
                {pkg.title}
              </h3>

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "1.75rem" }}>
                <span style={{ fontSize: "0.9375rem", color: pkg.highlight ? "rgba(255,255,255,0.7)" : "var(--color-espresso-soft)" }}>from</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "2.25rem", fontWeight: 600, color: pkg.highlight ? "#fff" : "var(--color-espresso)" }}>
                  {pkg.price}
                </span>
                <span style={{ fontSize: "0.8125rem", color: pkg.highlight ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}>{pkg.unit}</span>
              </div>

              <div style={{ height: "1px", backgroundColor: pkg.highlight ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)", marginBottom: "1.75rem" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem", flex: 1 }}>
                {pkg.features.map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
                    <div
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        borderRadius: "50%",
                        backgroundColor: pkg.highlight ? "rgba(212,175,55,0.2)" : "var(--color-gold-pale)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} style={{ color: pkg.highlight ? "var(--color-gold-light)" : "var(--color-gold-dark)" }} />
                    </div>
                    <span style={{ color: pkg.highlight ? "rgba(255,255,255,0.85)" : "var(--color-espresso-soft)" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={pkg.highlight ? "btn-gold" : "btn-primary"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {pkg.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
