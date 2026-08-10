"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { WA_HREF } from "@/content/site";

const SERVICES = [
  { title: "Skin Treatments", tag: "Medical-Grade" },
  { title: "Hair Therapy", tag: "Trichology-Led" },
  { title: "Bridal Makeup", tag: "Premium Artistry" },
  { title: "Nail Extensions", tag: "Salon Exclusive" },
];

const AVATARS = [
  "/images/100251.jpg",
  "/images/100253.jpg",
  "/images/100257.jpg",
  "/images/100265.jpg",
  "/images/103529.jpg",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  // Auto-rotate service label
  useEffect(() => {
    const t = setInterval(() => setActiveService((v) => (v + 1) % SERVICES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll animations on video background
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgFarY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "6.375rem",
      }}
    >
      {/* ── Scroll Parallax Background Video (ad_01_web.mp4) ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10% 0",
          height: "125%",
          y: bgFarY,
          scale: bgScale,
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/scrollpic.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        >
          <source src="/images/ad_01_web.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Gradient overlays for contrast and readability ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.48) 50%, rgba(10,8,6,0.25) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(to right, rgba(10,8,6,0.5) 0%, transparent 60%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        {/* Social proof row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div className="avatar-stack">
              {AVATARS.map((src, i) => (
                <img key={i} src={src} alt="" aria-hidden="true" />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
              <div className="stars" aria-label="4.5 star rating">
                {[1,2,3,4].map(i => <Star key={i} size={13} fill="#f59e0b" stroke="none" />)}
                <Star size={13} fill="none" stroke="#f59e0b" strokeWidth={1.5} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.62)",
                  letterSpacing: "0.02em",
                }}
              >
                4.4/5 · 375+ reviews
              </span>
            </div>
          </div>
          <div style={{ width: "1px", height: "2rem", backgroundColor: "rgba(255,255,255,0.25)" }} />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.78)",
              fontWeight: 400,
              margin: 0,
              maxWidth: "none",
            }}
          >
            <strong style={{ color: "#fff", fontWeight: 600 }}>2,000+</strong>{" "}
            clients trust Hasali across Kochi
          </p>
        </motion.div>

        {/* Main grid: heading left, rotating card right */}
        <div className="hero-content-grid">
          {/* Left column */}
          <div>
            {/* Eyebrow with animated service label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Now offering
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  height: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brass-light)",
                      display: "inline-block",
                    }}
                  >
                    {SERVICES[activeService].title}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.75rem, 6.5vw, 6.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#fff",
                marginBottom: "1.25rem",
                maxWidth: "14ch",
              }}
            >
              Your Weekly Ritual of Beauty & Glow
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "42ch",
                marginBottom: "2.25rem",
              }}
            >
              Kochi's premier cosmetology clinic — where medical-grade skin science meets artisan beauty. ISO 9001:2015 certified.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
            >
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sage"
                style={{ fontSize: "0.875rem", padding: "0.875rem 2rem" }}
              >
                Book an Appointment
              </a>
              <a
                href="/services"
                className="btn-ghost-ivory"
                style={{ fontSize: "0.875rem", padding: "0.875rem 2rem" }}
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right: floating glassmorphic service card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                padding: "1.5rem",
                width: "min(300px, 100%)",
                boxShadow: "0 24px 48px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Rotating service preview */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-brass-light)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {SERVICES[activeService].tag}
                </span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeService}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {SERVICES[activeService].title}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {SERVICES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    aria-label={`Service ${i + 1}`}
                    style={{
                      width: activeService === i ? "1.5rem" : "0.4rem",
                      height: "0.4rem",
                      borderRadius: "999px",
                      backgroundColor: activeService === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.4s var(--ease-out-expo)",
                    }}
                  />
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)", marginBottom: "1.25rem" }} />

              {/* Credentials */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                    ISO 9001:2015 Certified
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                    Business Excellence Award 2023
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-content-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .hero-content-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: flex-end;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
