"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    number: "1",
    title: "Skin Treatments",
    desc: "Experience bespoke medical-grade facials and advanced skin therapies tailored to your skin type. Our dermatology-trained cosmetologists blend the latest technology with personalized care to reveal your skin's natural radiance.",
    image: "/images/glass_skin_treatment.jpg",
    imgAlt: "Professional skin treatment at Hasali Kochi",
  },
  {
    number: "2",
    title: "Holistic Facial Rejuvenation",
    desc: "Our signature facial treatments go beyond the surface — combining deep cleansing, nourishing serums, and clinical-grade tools to restore your glow and target concerns like pigmentation, fine lines, and dullness.",
    image: "/images/cosmetology_treatment.jpg",
    imgAlt: "Holistic facial rejuvenation treatment at Hasali Cosmetology Clinic Kochi",
  },
  {
    number: "3",
    title: "Hair Therapy",
    desc: "From trichology-based scalp analysis to premium keratin treatments and clinical hair reconstructive care, our hair therapists craft solutions that restore strength, shine, and vitality to every strand.",
    image: "/images/brazilian_botox_hair.jpg",
    imgAlt: "Professional hair therapy session at Hasali",
  },
  {
    number: "4",
    title: "IV & Wellness Therapy",
    desc: "Experience systemic skin transformation from the inside out. Our medical-grade IV glutathione infusions, complete skin restoration programs, and wellness therapies deliver deep cellular-level results — radiance, clarity, and vitality that no topical treatment can match.",
    image: "/images/skin_transformation_package.jpg",
    imgAlt: "IV wellness therapy at Hasali Cosmetology Clinic Kochi",
  },
];

export default function ServicesOverview() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      aria-label="Our Services"
      style={{ backgroundColor: "var(--color-ivory)", paddingBlock: "var(--section-pad-y)" }}
    >
      <div className="container">
        {/* Section pill */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <span className="section-pill">• Our Services</span>
        </div>

        {/* Heading centered like Quantum */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            marginInline: "auto",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--color-espresso)",
              marginBottom: "0.875rem",
            }}
          >
            Therapies & Treatments
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-espresso-soft)", marginInline: "auto" }}>
            Hasali offers an evolved approach to cosmetology & beauty, rooted in clinical science and personalized care to restore your skin & hair.
          </p>
        </div>

        {/* Accordion + Image grid */}
        <div className="services-grid">
          {/* Left: Numbered accordion */}
          <div>
            {/* Diamond rule */}
            <div className="diamond-rule"><span /></div>

            {SERVICES.map((svc, i) => (
              <div
                key={svc.number}
                className={`service-item${activeIdx === i ? " active" : ""}`}
                onClick={() => setActiveIdx(i)}
                role="button"
                tabIndex={0}
                aria-expanded={activeIdx === i}
                onKeyDown={(e) => e.key === "Enter" && setActiveIdx(i)}
              >
                <span className="service-item-number">{svc.number}</span>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 400,
                        fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
                        color: activeIdx === i ? "var(--color-espresso)" : "var(--color-espresso-soft)",
                        letterSpacing: "-0.015em",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: activeIdx === i ? "var(--color-gold-dark)" : "rgba(197,160,89,0.3)",
                        flexShrink: 0,
                        transition: "background-color 0.25s ease",
                      }}
                    />
                  </div>

                  <AnimatePresence>
                    {activeIdx === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: "0.625rem" }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          color: "var(--color-espresso-soft)",
                          overflow: "hidden",
                          margin: 0,
                        }}
                      >
                        {svc.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}

            <div className="diamond-rule" style={{ marginTop: "1.5rem" }}><span /></div>
          </div>

          {/* Right: Large image with transition */}
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4/5",
              backgroundColor: "var(--color-ivory-dark)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={SERVICES[activeIdx].image}
                  alt={SERVICES[activeIdx].imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}
