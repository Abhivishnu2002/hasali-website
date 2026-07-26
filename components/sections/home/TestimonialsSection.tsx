"use client";

import { useRef, useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

// Placeholder testimonial cards — structured for real content to be swapped in.
// To add real testimonials: replace the placeholder text and remove the [TODO] notice.
const placeholders = [
  { id: "t1", initials: "S.R.", service: "Skin Care Program", location: "Kadavanthara" },
  { id: "t2", initials: "A.M.", service: "Bridal Makeup", location: "Kadavanthara" },
  { id: "t3", initials: "P.K.", service: "Keratin Treatment", location: "Kalamassery" },
];

function TestimonialCard({ t }: { t: (typeof placeholders)[number] }) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-ivory)",
        border: "1px solid var(--color-sage-light)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        minHeight: "220px",
        height: "100%",
      }}
      aria-label={`Client testimonial placeholder for ${t.service}`}
    >
      <div
        style={{
          backgroundColor: "var(--color-sage-pale)",
          border: "1px dashed var(--color-sage-light)",
          padding: "0.75rem 1rem",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-sage)",
          textAlign: "center",
        }}
      >
        [TODO: Add client testimonial quote]
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginTop: "auto" }}>
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "var(--color-espresso)",
            color: "var(--color-ivory)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-fraunces, Georgia, serif)",
            fontSize: "0.8rem",
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-espresso)", letterSpacing: "0.02em" }}>
            {t.service}
          </div>
          <div style={{ fontSize: "0.7rem", color: "var(--color-sage)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {t.location}
          </div>
        </div>
      </div>
    </article>
  );
}

/*
 * Mobile (<640px):  horizontal scroll-snap carousel, one card per view,
 *                   with dot progress indicator.
 * Desktop (≥640px): 3-column grid.
 */
export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const idx = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.min(idx, placeholders.length - 1));
  };

  const scrollTo = (idx: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({ left: idx * carouselRef.current.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-pad"
      style={{ backgroundColor: "var(--color-sage-pale)" }}
    >
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <span className="eyebrow">Client Experiences</span>
            <div className="rule-sage" style={{ margin: "1rem auto" }} />
            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                margin: 0,
              }}
            >
              What clients say
            </h2>
          </div>
        </SectionReveal>
      </div>

      {/* ── MOBILE carousel (<640px) ── */}
      <div className="testi-carousel-wrap">
        <div
          ref={carouselRef}
          className="snap-x-scroll"
          onScroll={handleScroll}
          style={{
            paddingInline: "var(--section-pad-x)",
            gap: 0,
          }}
        >
          {placeholders.map((t) => (
            <div
              key={t.id}
              className="snap-item"
              style={{ minWidth: "100%", paddingInline: "0.25rem" }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Scroll-progress dots */}
        <div className="snap-dots" role="tablist" aria-label="Testimonials navigation">
          {placeholders.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Testimonial ${i + 1}`}
              className={`snap-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP grid (≥640px) ── */}
      <div className="container">
        <div className="testi-desktop-grid">
          {placeholders.map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.1}>
              <TestimonialCard t={t} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <p
            style={{
              textAlign: "center",
              marginTop: "2.5rem",
              fontSize: "0.8rem",
              color: "var(--color-sage)",
              letterSpacing: "0.04em",
            }}
          >
            4.4★ on Google · 375 reviews (Kadavanthara) &nbsp;·&nbsp; 4.3★ · 122 reviews (Kalamassery)
          </p>
        </SectionReveal>
      </div>

      <style>{`
        /* Mobile: carousel visible, grid hidden */
        .testi-carousel-wrap { display: block; }
        .testi-desktop-grid  { display: none; }

        /* Desktop (≥640px): 3-column grid */
        @media (min-width: 640px) {
          .testi-carousel-wrap { display: none; }
          .testi-desktop-grid  {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
