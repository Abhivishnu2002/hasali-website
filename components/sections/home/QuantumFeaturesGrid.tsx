"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartHandshake, Award } from "lucide-react";

const FEATURES = [
  {
    icon: <Sparkles size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "Clinical Skin Science",
    desc: "Advanced medical-grade facials, skin peels, and rejuvenation techniques delivered by trained cosmetologists.",
  },
  {
    icon: <ShieldCheck size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "ISO 9001:2015 Certified",
    desc: "Kochi's only ISO certified cosmetology clinic, ensuring rigorous safety, hygiene, and clinical standard compliance.",
  },
  {
    icon: <HeartHandshake size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "Bespoke Beauty Care",
    desc: "Every therapy plan is individually tailored to your unique skin type, hair texture, and aesthetic goals.",
  },
  {
    icon: <Award size={24} style={{ color: "var(--color-gold-dark)" }} />,
    title: "Business Excellence 2023",
    desc: "Recognized as Kochi's top unisex salon & clinic for quality service, customer trust, and bridal expertise.",
  },
];

export default function QuantumFeaturesGrid() {
  return (
    <section style={{ backgroundColor: "var(--color-ivory)", paddingBlock: "var(--section-pad-y)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        {/* Top pill badge */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="section-pill">• Speciality</span>
        </div>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "600px", marginInline: "auto", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-espresso)",
              letterSpacing: "-0.02em",
              marginBottom: "0.875rem",
            }}
          >
            Vibrant Skin, Radiance & Care
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-espresso-soft)", margin: 0 }}>
            We combine high-tech clinical solutions with deeply relaxing aesthetic rituals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "2.25rem 1.75rem",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "12px",
                  backgroundColor: "var(--color-sage-pale)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-espresso)",
                  margin: 0,
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "rgba(26,23,20,0.7)",
                  margin: 0,
                }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
