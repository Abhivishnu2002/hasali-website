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
      {/* ── Blog Section ── */}
      <section
        aria-label="Latest Articles"
        style={{
          backgroundColor: "#faf7f2",
          paddingBlock: "var(--section-pad-y)",
          borderTop: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-pill">• Latest Articles</span>
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
              Everyday Beauty Blog
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "var(--color-espresso-soft)",
                maxWidth: "44ch",
                margin: "0 auto",
              }}
            >
              Expert beauty insights and timeless rituals, designed to elevate your everyday glow.
            </p>
            <div className="diamond-rule" style={{ maxWidth: "120px", margin: "1.5rem auto 0" }}><span /></div>
          </div>

          {/* Article cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {ARTICLES.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(197, 160, 89, 0.25)",
                  boxShadow: "0 10px 30px rgba(197, 160, 89, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(197, 160, 89, 0.18)" }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "16px 16px 0 0", overflow: "hidden" }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Meta */}
                <div style={{ padding: "1.5rem 1.375rem 1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold-dark)" }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "rgba(197, 160, 89, 0.5)" }}>·</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-espresso-soft)", opacity: 0.6 }}>
                      {article.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                      color: "var(--color-espresso)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-espresso-soft)", margin: 0 }}>
                    {article.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final White & Golden Yellow Luxury CTA Band ── */}
      <section
        aria-label="Book appointment"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBlock: "clamp(5rem, 10vw, 9rem)",
          background: "linear-gradient(135deg, #fdfaf2 0%, #faf3e3 50%, #f7ebd4 100%)",
          borderTop: "1px solid rgba(197, 160, 89, 0.3)",
        }}
      >
        {/* Background video ambient light */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.15 }}>
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
              filter: "brightness(1.2)",
            }}
          >
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Decorative Golden SVG wave overlay */}
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
            style={{ opacity: 0.25, position: "absolute", inset: 0 }}
          >
            <path
              d="M0 200 Q 150 120 300 200 T 600 200 T 900 200 T 1200 200"
              stroke="#d4af37"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0 240 Q 150 160 300 240 T 600 240 T 900 240 T 1200 240"
              stroke="#c5a059"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0 160 Q 150 80 300 160 T 600 160 T 900 160 T 1200 160"
              stroke="#bf953f"
              strokeWidth="0.75"
              fill="none"
            />
            {[80, 240, 400, 560, 720, 880, 1040, 1120].map((x, i) => (
              <circle key={i} cx={x} cy={i % 2 === 0 ? 180 : 220} r="2.5" fill="#d4af37" opacity="0.6" />
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
            <span className="section-pill" style={{ marginBottom: "1.5rem" }}>• Begin Your Journey</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 5vw, 4.75rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--color-espresso)",
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
                color: "var(--color-espresso-soft)",
                maxWidth: "44ch",
                margin: "0 auto",
                fontWeight: 500,
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
              className="btn-gold"
              style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}
            >
              Book an Appointment
            </a>
            <a
              href="/services"
              className="btn-ghost"
              style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust signal */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              color: "var(--color-gold-dark)",
              fontWeight: 600,
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
