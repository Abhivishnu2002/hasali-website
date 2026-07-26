"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND, WA_HREF, TEL_HREF, PHONE_DISPLAY } from "@/content/site";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SSR-safe parallax: default to false (no parallax) on first render.
  // After mount, check if this is a fine-pointer (non-touch) device.
  const [isPointerFine, setIsPointerFine] = useState(false);
  useEffect(() => {
    setIsPointerFine(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax only activates for pointer-fine devices; maps to 0% otherwise
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    isPointerFine ? ["0%", "18%"] : ["0%", "0%"]
  );

  const enterAnim = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      style={{
        backgroundColor: "var(--color-ivory)",
        overflow: "hidden",
        position: "relative",
        paddingTop: "4.5rem",
      }}
    >
      {/*
       * THREE DISTINCT LAYOUTS — not scaled from one:
       *
       * Mobile (<640px):   Single column — eyebrow/headline/copy → image → CTAs
       * Tablet (640–1023): 1fr/1fr side-by-side — text left, image right
       * Desktop (≥1024px): 5fr/7fr asymmetric — current design, full parallax
       */}

      {/* ── MOBILE layout (<640px) ── */}
      <div className="hero-mobile">
        <div style={{ padding: "2.5rem var(--section-pad-x) 0" }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}
          >
            <span style={{ width: "1.5rem", height: "1px", backgroundColor: "var(--color-sage)", flexShrink: 0 }} />
            <span className="eyebrow">Est. 2023 · Kochi, Kerala</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 400,
              fontSize: "clamp(2.6rem, 11vw, 4rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--color-espresso)",
              marginBottom: "1rem",
            }}
          >
            {BRAND.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "var(--color-espresso-soft)",
              fontStyle: "italic",
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 300,
              marginBottom: "1.75rem",
            }}
          >
            Kochi's only unisex cosmetology clinic and beauty salon — medical-grade skin science and premium salon artistry, together.
          </motion.p>
        </div>

        {/* Full-bleed image between copy and CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}
        >
          <Image
            src="/images/pic1.jpg"
            alt="Hasali flagship reception — gold-lit salon interior with marble floors"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          {/* ISO badge on image */}
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              backgroundColor: "rgba(247,243,236,0.92)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(124,139,111,0.2)",
              padding: "0.6rem 0.875rem",
            }}
          >
            <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)", display: "block" }}>
              ISO 9001:2015
            </span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-espresso-soft)" }}>
              Quality Certified
            </span>
          </div>
        </motion.div>

        {/* Full-width stacked CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            padding: "1.75rem var(--section-pad-x) 2.5rem",
          }}
          className="fab-clearance"
        >
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ justifyContent: "center", width: "100%", minHeight: "52px" }}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Book on WhatsApp
          </a>
          <a
            href={TEL_HREF}
            className="btn-ghost"
            style={{ justifyContent: "center", width: "100%", minHeight: "52px" }}
          >
            <Phone size={15} strokeWidth={1.5} />
            {PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>

      {/* ── TABLET + DESKTOP layout (≥640px) ── */}
      <div
        className="hero-split"
        style={{ minHeight: "calc(100dvh - 4.5rem)" }}
      >
        {/* Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(2.5rem,5vw,5rem) var(--section-pad-x)",
            zIndex: 2,
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
          >
            <span style={{ width: "2rem", height: "1px", backgroundColor: "var(--color-sage)" }} />
            <span className="eyebrow">Est. 2023 · Kochi, Kerala</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 400,
              fontSize: "clamp(2.75rem, 6vw, 6.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--color-espresso)",
              maxWidth: "12ch",
              marginBottom: "1.5rem",
            }}
          >
            {BRAND.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.9375rem, 1.4vw, 1.15rem)",
              lineHeight: 1.65,
              color: "var(--color-espresso-soft)",
              maxWidth: "38ch",
              marginBottom: "2.5rem",
              fontStyle: "italic",
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 300,
            }}
          >
            Kochi's only unisex cosmetology clinic and beauty salon — medical-grade skin science and premium salon artistry, together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
          >
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} strokeWidth={1.5} />
              Book on WhatsApp
            </a>
            <a href={TEL_HREF} className="btn-ghost">
              <Phone size={15} strokeWidth={1.5} />
              {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* Sage accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "var(--section-pad-x)",
              width: "5rem",
              height: "1px",
              backgroundColor: "var(--color-sage)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Image column */}
        <div
          className="hero-image-col"
          style={{ position: "relative", overflow: "hidden", backgroundColor: "var(--color-ivory-dark)" }}
        >
          <motion.div
            style={{ y: imageY, position: "absolute", inset: "-10% 0", height: "120%" }}
          >
            <Image
              src="/images/pic1.jpg"
              alt="Hasali flagship reception — gold-lit salon interior with marble floors and the Hasali signage"
              fill
              sizes="(max-width: 1023px) 50vw, 58vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div
              className="hero-vignette"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, var(--color-ivory) 0%, transparent 25%)",
              }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "1.75rem",
              right: "1.75rem",
              backgroundColor: "rgba(247,243,236,0.92)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(124,139,111,0.25)",
              padding: "0.875rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
            }}
          >
            <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)" }}>
              ISO 9001:2015
            </span>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--color-espresso-soft)" }}>
              Quality Certified · Est. 2023
            </span>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Mobile: only mobile layout visible */
        .hero-mobile { display: block; }
        .hero-split  { display: none; }

        /* Tablet + Desktop (≥640px): split layout */
        @media (min-width: 640px) {
          .hero-mobile { display: none; }
          .hero-split  {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .hero-image-col { min-height: unset; }
          .hero-vignette  { display: none; }
        }

        /* Desktop (≥1024px): asymmetric split */
        @media (min-width: 1024px) {
          .hero-split {
            grid-template-columns: 5fr 7fr;
          }
          .hero-vignette { display: block; }
        }
      `}</style>
    </section>
  );
}
