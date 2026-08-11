"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useBookingModal } from "@/components/ui/BookingModalContext";

const STEPS = [
  {
    number: "01",
    title: "Personal Consultation",
    desc: "We begin every session by discussing your goals, skin or hair concerns, and any areas you'd like to address.",
    size: "large",
  },
  {
    number: "02",
    title: "Sensory Immersion",
    desc: "Premium certified products and calming scents create a complete sensory escape from the everyday.",
    size: "small",
  },
  {
    number: "03",
    title: "Bespoke Therapy",
    desc: "Your therapist applies a personalized protocol — selecting techniques, tools, and products tailored to your needs.",
    size: "small",
  },
  {
    number: "04",
    title: "Aftercare Guidance",
    desc: "Expert tips, product recommendations, and a maintenance plan to extend and amplify your results.",
    size: "large",
  },
];

const APPROACH_IMAGE = "/images/glass_skin_treatment.jpg";

/* ── Bento step card ── */
function StepCard({
  step,
  style,
}: {
  step: (typeof STEPS)[0];
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "clamp(1.25rem, 4vw, 2rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "200px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Large ghost number */}
      <span
        style={{
          position: "absolute",
          bottom: "-0.5rem",
          right: "1rem",
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(5rem, 8vw, 7rem)",
          fontWeight: 400,
          color: "var(--color-ivory-dark)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        {step.number}
      </span>

      <div>
        {/* Small number badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2rem",
            height: "2rem",
            border: "1.5px solid rgba(35,31,28,0.18)",
            borderRadius: "6px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-gold-dark)",
            marginBottom: "1.25rem",
          }}
        >
          {step.number}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
            color: "var(--color-espresso)",
            letterSpacing: "-0.015em",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "var(--color-espresso-soft)",
            margin: 0,
            maxWidth: "28ch",
          }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function LocationsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBookingModal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.06]);

  return (
    <section
      ref={sectionRef}
      aria-label="Our Approach"
      style={{ backgroundColor: "var(--color-cream)", paddingBlock: "var(--section-pad-y)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3.5rem", maxWidth: "600px" }}
        >
          <span className="section-pill" style={{ marginBottom: "1.25rem" }}>• Our Approach</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--color-espresso)",
              marginBottom: "0.875rem",
            }}
          >
            The Path to Your Transformation
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              color: "var(--color-espresso-soft)",
              margin: 0,
            }}
          >
            We believe beauty is a personal journey. Our four-step approach ensures you receive a treatment plan as unique as you are.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="approach-bento">
          {/* Step 01 — large left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <StepCard step={STEPS[0]} style={{ minHeight: "240px" }} />
          </motion.div>

          {/* Step 02 — top right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepCard step={STEPS[1]} style={{ height: "100%", minHeight: "240px" }} />
          </motion.div>

          {/* Step 03 — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepCard step={STEPS[2]} style={{ height: "100%", minHeight: "240px" }} />
          </motion.div>

          {/* Image tile — with Scroll Scale Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              minHeight: "280px",
              gridColumn: "span 1",
            }}
          >
            <motion.div style={{ position: "absolute", inset: "-5%", width: "110%", height: "110%", scale: imageScale }}>
              <Image
                src={APPROACH_IMAGE}
                alt="Hasali cosmetology treatment in progress"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            {/* Overlay label */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                borderRadius: "8px",
                padding: "0.5rem 0.875rem",
                border: "1px solid rgba(255,255,255,0.25)",
                zIndex: 2,
              }}
            >
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, color: "#fff", margin: 0, letterSpacing: "0.06em" }}>
                🌿 Bespoke therapy in progress
              </p>
            </div>
          </motion.div>

          {/* Step 04 — bottom right large */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ gridColumn: "span 2" }}
          >
            <div
              style={{
                backgroundColor: "#fdfaf2",
                border: "1.5px solid rgba(197, 160, 89, 0.35)",
                boxShadow: "0 10px 30px rgba(197, 160, 89, 0.12)",
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "200px",
                gap: "1.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2rem",
                    height: "2rem",
                    border: "1.5px solid #d4af37",
                    borderRadius: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-gold-dark)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {STEPS[3].number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                    color: "var(--color-espresso)",
                    letterSpacing: "-0.015em",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {STEPS[3].title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-espresso-soft)", margin: 0 }}>
                  {STEPS[3].desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="btn-gold"
                style={{ alignSelf: "flex-start", fontSize: "0.8125rem", cursor: "pointer" }}
              >
                Begin Your Journey →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .approach-bento {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-auto-rows: auto;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .approach-bento {
            grid-template-columns: 1fr;
          }
          .approach-bento > div[style*="span 2"],
          .approach-bento > div[style*="span 1"] {
            grid-column: span 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .approach-bento {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
