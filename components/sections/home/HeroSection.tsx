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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeService, setActiveService] = useState(0);

  // Set video start time to 5 seconds
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      if (videoRef.current.currentTime < 5) {
        videoRef.current.currentTime = 5;
      }
    }
  }, []);

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

  // Signal to LoadingScreen that the hero video is ready to play
  const handleVideoCanPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime < 5) {
      video.currentTime = 5;
    }
    // Set global flag and dispatch custom event for LoadingScreen
    (window as unknown as Record<string, unknown>).__hasaliVideoReady = true;
    window.dispatchEvent(new CustomEvent("hasali:video-ready"));
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
        backgroundColor: "#faf7f2",
      }}
    >
      {/* ── Scroll Parallax Ambient Video / Image Background ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10% 0",
          height: "125%",
          y: bgFarY,
          scale: bgScale,
          zIndex: 0,
          opacity: 0.95,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/cosmetology_treatment.jpg"
          onCanPlay={handleVideoCanPlay}
          onLoadedMetadata={(e) => {
            if (e.currentTarget.currentTime < 5) {
              e.currentTarget.currentTime = 5;
            }
          }}
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime < 5) {
              e.currentTarget.currentTime = 5;
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.95) contrast(1.05)",
          }}
        >
          <source src="/images/ad_01_web.mp4#t=5" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Transparent warm gold & soft ivory vignette overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(253, 251, 247, 0.72) 0%, rgba(253, 251, 247, 0.35) 50%, rgba(253, 251, 247, 0.65) 100%), radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.25) 0%, transparent 60%)",
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
          justifyContent: "center",
          paddingBlock: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        {/* Social proof row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div className="avatar-stack">
              {AVATARS.map((src, i) => (
                <img key={i} src={src} alt="" aria-hidden="true" width={32} height={32} />
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
                  color: "var(--color-gold-dark)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                4.4/5 · 375+ reviews
              </span>
            </div>
          </div>
          <div className="hero-social-divider" style={{ width: "1px", height: "2rem", backgroundColor: "rgba(197,160,89,0.3)" }} />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "var(--color-espresso-soft)",
              fontWeight: 500,
              margin: 0,
              maxWidth: "none",
            }}
          >
            <strong style={{ color: "var(--color-espresso)", fontWeight: 700 }}>2,000+</strong>{" "}
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
              style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-dark)",
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
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#b8860b",
                      display: "inline-block",
                    }}
                  >
                    {SERVICES[activeService].title}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* HASALI Header matching Screenshot flyer */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              style={{ marginBottom: "1rem" }}
            >
              <h1
                className="text-gold-gradient"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                  letterSpacing: "0.02em",
                  lineHeight: 0.95,
                  margin: "0 0 0.5rem 0",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                HASALI
              </h1>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.75rem, 1.8vw, 1.125rem)",
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#9a7b38",
                  marginBottom: "1rem",
                }}
              >
                Cosmetology Clinic & Salon
              </div>

              {/* Decorative Flyer Diamond Rule */}
              <div className="diamond-rule" style={{ maxWidth: "260px" }}><span /></div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                lineHeight: 1.65,
                color: "var(--color-espresso-soft)",
                maxWidth: "46ch",
                marginBottom: "2rem",
              }}
            >
              Kochi's premier unisex cosmetology clinic — where medical-grade skin science meets artisan beauty. ISO 9001:2015 certified.
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
                className="btn-gold"
                style={{ fontSize: "0.875rem", padding: "0.875rem 2rem" }}
              >
                Book an Appointment
              </a>
              <a
                href="/services"
                className="btn-ghost"
                style={{ fontSize: "0.875rem", padding: "0.875rem 2rem" }}
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right: floating luxury white-gold glass service card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1.5px solid rgba(197, 160, 89, 0.35)",
                borderRadius: "20px",
                padding: "1.75rem",
                width: "100%",
                maxWidth: "340px",
                boxShadow: "0 20px 48px rgba(197, 160, 89, 0.16)",
              }}
            >
              {/* Rotating service preview */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-gold-dark)",
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
                      color: "var(--color-espresso)",
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
                      backgroundColor: activeService === i ? "var(--color-gold-dark)" : "rgba(197, 160, 89, 0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.4s var(--ease-out-expo)",
                    }}
                  />
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(197,160,89,0.25)", marginBottom: "1.25rem" }} />

              {/* Credentials */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.6rem", color: "var(--color-gold-dark)" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-espresso)", fontWeight: 500 }}>
                    ISO 9001:2015 Certified
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.6rem", color: "var(--color-gold-dark)" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-espresso)", fontWeight: 500 }}>
                    Kadavanthra & Kalamassery
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
        @media (max-width: 480px) {
          .hero-social-divider { display: none; }
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
