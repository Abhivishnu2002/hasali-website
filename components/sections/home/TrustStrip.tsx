"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";


/* ── animated counter hook ── */
function useCountUp(target: number, shouldStart: boolean, duration = 1.4) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, (duration * 1000) / (target / step));
    return () => clearInterval(interval);
  }, [shouldStart, target, duration]);
  return count;
}

const PILLARS = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M20 20C14 20 8 24 7 32h26c-1-8-7-12-13-12z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M16 8c0-4 8-4 8 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "Skin Science",
    desc: "Medical-grade treatments backed by clinical technology for skin you can see and feel.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 6s-8 6-8 14a8 8 0 0016 0C28 12 20 6 20 6z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M20 24v-8M17 19l3-3 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Holistic Beauty",
    desc: "A comprehensive journey for your hair, skin, nails — and your overall sense of wellness.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M20 14v6l4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="8" r="1.5" fill="white"/>
        <circle cx="20" cy="32" r="1.5" fill="white"/>
        <circle cx="8" cy="20" r="1.5" fill="white"/>
        <circle cx="32" cy="20" r="1.5" fill="white"/>
      </svg>
    ),
    title: "Crafted Care",
    desc: "Spaces designed for your comfort and transformation — every detail considered.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="18" width="6" height="6" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="18" width="6" height="6" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 21h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 14v4M20 26v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="10" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="30" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Your Journey",
    desc: "Personalized treatment plans as unique as you are — built around your goals.",
  },
];

/* Animated stat */
function StatCounter({
  value,
  suffix,
  label,
  shouldStart,
}: {
  value: number;
  suffix: string;
  label: string;
  shouldStart: boolean;
}) {
  const count = useCountUp(value, shouldStart);
  return (
    <div style={{ textAlign: "center", padding: "0.5rem" }}>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "var(--color-espresso)",
        }}
      >
        {shouldStart ? count : 0}
        {suffix}
      </div>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          color: "var(--color-espresso-soft)",
          marginTop: "0.5rem",
          letterSpacing: "0.02em",
          margin: "0.5rem 0 0",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function TrustStrip() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section aria-label="About & Value Pillars" style={{ backgroundColor: "var(--color-ivory)", position: "relative" }}>

      {/* ── Animated Stats band ── */}
      <div
        ref={statsRef}
        className="container"
        style={{
          paddingBlock: "clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid rgba(35,31,28,0.08)",
        }}
      >
        <div className="trust-intro-grid">
          {/* Col 1: Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              borderRight: "1px solid rgba(0,0,0,0.08)",
              paddingRight: "clamp(1.5rem, 3vw, 3rem)",
            }}
          >
            <div style={{ display: "flex", gap: "clamp(1.5rem, 3vw, 2.5rem)", alignItems: "center" }}>
              <StatCounter value={2000} suffix="+" label="Happy clients" shouldStart={inView} />
              <div style={{ width: "1px", height: "3rem", backgroundColor: "rgba(0,0,0,0.08)" }} />
              <StatCounter value={375} suffix="+" label="Google reviews" shouldStart={inView} />
              <div style={{ width: "1px", height: "3rem", backgroundColor: "rgba(0,0,0,0.08)" }} />
              <StatCounter value={2} suffix="" label="Locations in Kochi" shouldStart={inView} />
            </div>
          </div>

          {/* Col 2: Description */}
          <div style={{ paddingInline: "clamp(1.5rem, 3vw, 3rem)", borderRight: "1px solid rgba(0,0,0,0.08)" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                lineHeight: 1.65,
                color: "var(--color-espresso-soft)",
                marginBottom: "0.875rem",
              }}
            >
              At our sanctuary of serenity, we weave masterful cosmetology therapy with transformative beauty rituals, crafting an oasis of calm.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "rgba(26,23,20,0.6)",
                margin: 0,
              }}
            >
              As Kochi's premier ISO 9001:2015 certified clinic, we invite you to unwind and renew in our soothing spaces and restorative treatments.
            </p>
          </div>

          {/* Col 3: CTA */}
          <div style={{ paddingLeft: "clamp(1.5rem, 3vw, 3rem)" }}>
            <a href="/about" className="btn-ghost" style={{ fontSize: "0.8125rem", padding: "0.75rem 1.5rem" }}>
              More About Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Dark pillars band ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-dark-panel)",
        }}
      >
        {/* Background blurred image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.3 }}>
          <Image
            src="/images/pic5.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", filter: "blur(2px)" }}
            aria-hidden="true"
          />
        </div>


        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingBlock: "clamp(3.5rem, 7vw, 6rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1rem" }}
            >
              <div>{pillar.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "24ch",
                  margin: 0,
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-intro-grid {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 0;
          align-items: center;
        }
        @media (max-width: 900px) {
          .trust-intro-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .trust-intro-grid > div {
            border-right: none !important;
            padding-right: 0 !important;
            padding-inline: 0 !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
