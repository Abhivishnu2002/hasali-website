"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WA_HREF } from "@/content/site";

const ARTICLES = [
  {
    id: "a1",
    date: "Aug 2025",
    category: "Skin Care",
    title: "5 Signs You Need a Professional Skin Analysis",
    desc: "Learn the telltale signs that your skin needs expert attention — from persistent breakouts to uneven texture.",
    image: "/images/scrollpic.png",
  },
  {
    id: "a2",
    date: "Jul 2025",
    category: "Hair Care",
    title: "The Science Behind Keratin Treatments",
    desc: "Everything you need to know about how keratin works, who it's for, and what to expect from your first session.",
    image: "/images/brazilian_botox_hair.jpg",
  },
  {
    id: "a3",
    date: "Jun 2025",
    category: "Bridal",
    title: "Your Complete Pre-Bridal Beauty Timeline",
    desc: "From 6 months out to the morning of your wedding — a step-by-step guide to looking radiant on your big day.",
    image: "/images/scrollpic2.png",
  },
];

export default function FinalCTABand() {
  return (
    <>
      {/* ── Blog Section (dark) ── */}
      <section
        aria-label="Latest Articles"
        style={{
          backgroundColor: "var(--color-dark-panel)",
          paddingBlock: "var(--section-pad-y)",
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-pill-dark">• Latest Articles</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.025em",
                color: "#fff",
                marginBottom: "0.875rem",
              }}
            >
              Everyday Beauty Blog
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "rgba(253,249,244,0.6)",
                maxWidth: "44ch",
                margin: "0 auto",
              }}
            >
              Expert beauty insights and timeless rituals, designed to elevate your everyday glow.
            </p>
            <div className="diamond-rule" style={{ maxWidth: "120px", margin: "1.5rem auto 0", opacity: 0.25 }}><span /></div>
          </div>

          {/* Article cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {ARTICLES.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="blog-card"
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Meta */}
                <div style={{ padding: "1.375rem 1.25rem 1.625rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-sage-light)" }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "rgba(253,249,244,0.35)" }}>·</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "rgba(253,249,244,0.4)" }}>
                      {article.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                      color: "#fff",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(253,249,244,0.55)", margin: 0 }}>
                    {article.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Band with Background Video (video1.mp4) ── */}
      <section
        aria-label="Book appointment"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBlock: "clamp(5rem, 10vw, 9rem)",
        }}
      >
        {/* Background video — video1.mp4 */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/scrollpic2.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15,13,10,0.68)",
            }}
          />
        </div>

        {/* Decorative SVG wave overlay — like Quantum CTA banner */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.12, position: "absolute", inset: 0 }}
          >
            <path
              d="M0 200 Q 150 120 300 200 T 600 200 T 900 200 T 1200 200"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0 240 Q 150 160 300 240 T 600 240 T 900 240 T 1200 240"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0 160 Q 150 80 300 160 T 600 160 T 900 160 T 1200 160"
              stroke="white"
              strokeWidth="0.75"
              fill="none"
            />
            <path
              d="M0 280 Q 200 180 400 280 T 800 280 T 1200 280"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M0 120 Q 200 20 400 120 T 800 120 T 1200 120"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Scattered dots */}
            {[80, 240, 400, 560, 720, 880, 1040, 1120].map((x, i) => (
              <circle key={i} cx={x} cy={i % 2 === 0 ? 180 : 220} r="2" fill="white" opacity="0.4" />
            ))}
          </svg>
        </div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-pill-dark" style={{ marginBottom: "1.5rem" }}>• Begin Your Journey</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 5vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "#fff",
                maxWidth: "18ch",
                margin: "0 auto 1.5rem",
              }}
            >
              Your Most Beautiful Self Awaits
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "42ch",
                margin: "0 auto",
              }}
            >
              Step into Hasali and experience Kochi's most trusted cosmetology clinic. Your transformation begins with a single appointment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}
          >
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sage"
              style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}
            >
              Book an Appointment
            </a>
            <a
              href="/services"
              className="btn-ghost-ivory"
              style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust signal */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            ISO 9001:2015 Certified · Kadavanthara & Kalamassery · Est. 2023
          </p>
        </div>
      </section>
    </>
  );
}
