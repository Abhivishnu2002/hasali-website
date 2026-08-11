"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WA_HREF } from "@/content/site";

const PLANS = [
  {
    id: "hair",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M20 28c0 0-8 2-8 10h24c0-8-8-10-8-10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M18 10c2-4 10-4 12 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    name: "Hair Care",
    price: "from ₹599",
    priceNote: "/session",
    tagline: "Hair Reconstruction & Trichology",
    features: ["Scalp analysis", "Deep conditioning", "Keratin therapy", "Hair botox & smoothing"],
    dark: false,
  },
  {
    id: "skin",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    name: "Skin Treatments",
    price: "from ₹999",
    priceNote: "/session",
    tagline: "Medical-Grade Facials",
    features: ["Skin analysis", "Hydra facial", "Pigmentation therapy", "Anti-aging"],
    dark: false,
  },
  {
    id: "bridal",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="16" r="7" stroke="#d4af37" strokeWidth="1.5" fill="none"/>
        <path d="M14 38s2-10 10-10 10 10 10 10" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M24 9l2 3h3l-2.5 2 1 3L24 15l-3.5 2 1-3L19 12h3z" stroke="#d4af37" strokeWidth="1.2" fill="#d4af37" fillOpacity="0.4"/>
      </svg>
    ),
    name: "Bridal Package",
    price: "from ₹4,999",
    priceNote: "/package",
    tagline: "Complete Bridal Glow",
    features: ["Bridal makeup", "Hair styling", "Pre-bridal facials", "Nail art"],
    dark: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop&auto=format&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HasaliDifference() {
  return (
    <section
      aria-label="Therapy Pricing"
      style={{ backgroundColor: "var(--color-ivory-warm)", paddingBlock: "var(--section-pad-y)" }}
    >
      <div className="container">
        {/* Pill + heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-pill">• Service Packages</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.025em",
              color: "var(--color-espresso)",
              marginBottom: "0.875rem",
            }}
          >
            Best Service, Best Pricing
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--color-espresso-soft)",
              maxWidth: "48ch",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            We offer specialized services for hair, skin, and bridal care — designed to nurture your inner and outer beauty.
          </p>

          <div className="diamond-rule" style={{ maxWidth: "120px", margin: "1.5rem auto 0" }}><span /></div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="pricing-card"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid rgba(197, 160, 89, 0.35)",
                boxShadow: "0 10px 30px rgba(197, 160, 89, 0.1)",
                borderRadius: "16px",
                padding: "2.25rem 2rem",
              }}
            >
              <div style={{ color: "var(--color-gold-dark)", marginBottom: "1rem" }}>{plan.icon}</div>
              <div style={{ width: "2rem", height: "2px", background: "linear-gradient(90deg, #bf953f, #d4af37)", marginBottom: "1rem" }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "0.4rem" }}>
                {plan.tagline}
              </p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "var(--color-espresso)", letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>
                {plan.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 400, color: "var(--color-gold-dark)" }}>{plan.price}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-espresso-soft)", opacity: 0.7 }}>{plan.priceNote}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem 0", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-espresso-soft)", fontWeight: 500 }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-gold-dark)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "0.78rem" }}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
