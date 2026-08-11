"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useBookingModal } from "@/components/ui/BookingModalContext";

/* ── Data ── */
const BENEFITS = [
  {
    id: "skin",
    number: "01",
    heading: "Your Journey to Radiant Skin",
    summary:
      "Our medical-grade protocols restore texture and radiance, healing sun damage, pigmentation, and everyday stress from your complexion.",
    image: "/images/cosmetology_treatment.jpg",
    imgAlt: "Skin rejuvenation facial treatment at Hasali Cosmetology Clinic Kochi",
    items: [
      {
        id: "s1",
        title: "Medical-Grade Facials",
        body: "HydraFacials, chemical peels, and clinical-grade skin therapies tailored to your unique skin type and concerns.",
      },
      {
        id: "s2",
        title: "Pigmentation & Anti-Aging",
        body: "Targeted protocols for dark spots, fine lines, and uneven tone using evidence-backed active ingredients.",
      },
      {
        id: "s3",
        title: "Personalized Skin Plan",
        body: "Every treatment begins with a diagnostic skin analysis — so your plan evolves as your skin does.",
      },
    ],
    reverse: false,
  },
  {
    id: "hair",
    number: "02",
    heading: "Restore Your Hair's Vitality",
    summary:
      "From trichology-led scalp analysis to premium keratin rituals, we craft solutions that bring back strength, shine, and softness.",
    image: "/images/brazilian_botox_hair.jpg",
    imgAlt: "Professional hair therapy at Hasali Salon Kochi",
    items: [
      {
        id: "h1",
        title: "Trichology Consultation",
        body: "A structured hair and scalp diagnostic to identify the root cause of hair loss, dryness, or damage.",
      },
      {
        id: "h2",
        title: "Keratin & Smoothing",
        body: "Salon-exclusive keratin treatments that seal the cuticle, reduce frizz, and add mirror shine for weeks.",
      },
      {
        id: "h3",
        title: "Deep Conditioning Rituals",
        body: "Advanced clinical hair reconstructive therapy infused with Moroccan argan oil, protein masks, and scalp revitalization.",
      },
    ],
    reverse: true,
  },
];

/* ── Sub-accordion ── */
function SubAccordion({
  items,
}: {
  items: { id: string; title: string; body: string }[];
}) {
  const [openId, setOpenId] = useState<string>(items[0].id);

  return (
    <div style={{ marginTop: "2rem" }}>
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="sub-accordion-item">
            <button
              className="sub-accordion-trigger"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              aria-expanded={isOpen}
            >
              <span style={{ display: "flex", alignItems: "center", flex: 1, gap: "0.75rem" }}>
                <span className="sub-num">0{i + 1}</span>
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={14} strokeWidth={2} style={{ flexShrink: 0, color: "var(--color-gold-dark)" }} />
              ) : (
                <Plus size={14} strokeWidth={2} style={{ flexShrink: 0, color: "var(--color-espresso-soft)", opacity: 0.5 }} />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "var(--color-espresso-soft)",
                      paddingBottom: "1rem",
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── One alternating row with scroll animation on image ── */
function BenefitRow({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[0];
  index: number;
}) {
  const { openBookingModal } = useBookingModal();
  const rowRef = useRef<HTMLDivElement>(null);

  // Image scroll animations
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={rowRef}
      className={`benefit-row${benefit.reverse ? " reverse" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image pane with Scroll Animation */}
      <div className="benefit-row-img-pane" style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{
            position: "absolute",
            inset: "-10%",
            width: "120%",
            height: "120%",
            scale: imageScale,
            y: imageY,
          }}
        >
          <Image
            src={benefit.image}
            alt={benefit.imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        {/* Number overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "1.5rem",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 8vw, 7rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.22)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 2,
          }}
          aria-hidden="true"
        >
          {benefit.number}
        </div>
      </div>

      {/* Text pane */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(2rem, 5vw, 5rem) clamp(1.25rem, 5vw, 4.5rem)",
          backgroundColor: index % 2 === 0 ? "var(--color-ivory)" : "var(--color-cream)",
        }}
      >
        <span className="section-pill" style={{ marginBottom: "1.5rem" }}>• Benefits</span>

        {/* Large display number */}
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 5vw, 5rem)",
            fontWeight: 400,
            color: "var(--color-ivory-dark)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            display: "block",
            marginBottom: "0.5rem",
          }}
          aria-hidden="true"
        >
          {benefit.number}
        </span>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(1.625rem, 2.8vw, 2.5rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "var(--color-espresso)",
            marginBottom: "1rem",
          }}
        >
          {benefit.heading}
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
          {benefit.summary}
        </p>

        <SubAccordion items={benefit.items} />

        <button
          type="button"
          onClick={() => openBookingModal(benefit.heading)}
          className="btn-ghost"
          style={{ marginTop: "2rem", alignSelf: "flex-start", fontSize: "0.8125rem", cursor: "pointer" }}
        >
          Book This Service →
        </button>
      </div>
    </motion.div>
  );
}

export default function SignaturePackages() {
  return (
    <section aria-label="Benefits — Your Journey" style={{ backgroundColor: "var(--color-ivory)" }}>
      {/* Section header */}
      <div className="container" style={{ paddingBlock: "var(--section-pad-y)", paddingBottom: "0" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "600px" }}
        >
          <span className="section-pill" style={{ marginBottom: "1.25rem" }}>• Your Journey</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--color-espresso)",
              marginBottom: "1rem",
            }}
          >
            Everything Your Beauty Deserves
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
            Two pillars of clinical beauty and wellness — each one a complete journey, crafted just for you.
          </p>
        </motion.div>
      </div>

      {/* Alternating rows — full-bleed */}
      <div style={{ marginTop: "4rem" }}>
        {BENEFITS.map((benefit, i) => (
          <BenefitRow key={benefit.id} benefit={benefit} index={i} />
        ))}
      </div>

      <style>{`
        .benefit-row-img-pane { min-height: 520px; }
        @media (max-width: 768px) {
          .benefit-row-img-pane { min-height: 300px; }
        }
      `}</style>
    </section>
  );
}
