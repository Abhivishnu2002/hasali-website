"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/content/services";
import SectionReveal from "@/components/ui/SectionReveal";

const categoryImages = [
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic2.jpg",
  "/images/pic7.jpg",
];

const categoryAlts = [
  "Hasali hair styling station with gold-framed mirrors",
  "Hasali salon floor with arched mirrors",
  "Hasali consultation room, sage green walls",
  "Hasali waiting lounge — Look Good. Feel Good.",
];

/*
 * Mobile (<640px):  horizontal scroll-snap carousel, one card 85vw + peek
 * Tablet (640–1023px): 2-column grid
 * Desktop (≥1024px): 4-column magazine grid
 */
export default function ServicesOverview() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const cardWidth = clientWidth * 0.85 + 16; // 85vw + gap
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, SERVICE_CATEGORIES.length - 1));
  };

  const scrollTo = (idx: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth * 0.85 + 16;
    carouselRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="section-pad"
      style={{ backgroundColor: "var(--color-ivory)", overflow: "hidden" }}
    >
      <div className="container">
        {/* Header */}
        <SectionReveal>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">What We Offer</span>
            <div className="rule-sage" />
            <h2
              id="services-heading"
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                maxWidth: "22ch",
                lineHeight: 1.1,
              }}
            >
              Clinic precision.<br />Salon artistry.
            </h2>
          </div>
        </SectionReveal>
      </div>

      {/* ── MOBILE carousel (<640px) ── */}
      <div className="svc-carousel-wrap">
        <div
          ref={carouselRef}
          className="snap-x-scroll"
          onScroll={handleScroll}
          style={{
            paddingInline: "var(--section-pad-x)",
            paddingRight: "calc(var(--section-pad-x) + 10%)",
            gap: "1rem",
          }}
        >
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/services#${cat.slug}`}
              className="snap-item"
              style={{
                display: "block",
                position: "relative",
                minWidth: "85vw",
                aspectRatio: "3/4",
                overflow: "hidden",
                flexShrink: 0,
                textDecoration: "none",
                backgroundColor: "var(--color-ivory-dark)",
              }}
              aria-label={`Explore ${cat.name} services`}
            >
              <Image
                src={categoryImages[i]}
                alt={categoryAlts[i]}
                fill
                sizes="85vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(35,31,28,0.75) 0%, rgba(35,31,28,0.1) 50%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.25rem",
                  color: "var(--color-ivory)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces, Georgia, serif)",
                    fontSize: "2rem",
                    fontWeight: 300,
                    opacity: 0.35,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-fraunces, Georgia, serif)",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {cat.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-sage-light)",
                    }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll-progress dots */}
        <div className="snap-dots" role="tablist" aria-label="Service categories">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${cat.name}`}
              className={`snap-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {/* ── TABLET + DESKTOP grid (≥640px) ── */}
      <div className="container">
        <div className="svc-desktop-grid">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <SectionReveal key={cat.id} delay={i * 0.08}>
              <Link
                href={`/services#${cat.slug}`}
                style={{
                  display: "block",
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  textDecoration: "none",
                  cursor: "pointer",
                  backgroundColor: "var(--color-ivory-dark)",
                }}
                aria-label={`Explore ${cat.name} services`}
              >
                <Image
                  src={categoryImages[i]}
                  alt={categoryAlts[i]}
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                  className="service-card-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(35,31,28,0.75) 0%, rgba(35,31,28,0.1) 50%, transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                    color: "var(--color-ivory)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-fraunces, Georgia, serif)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      opacity: 0.35,
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-fraunces, Georgia, serif)",
                        fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {cat.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-sage-light)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style>{`
        /* Mobile: carousel visible, grid hidden */
        .svc-carousel-wrap { display: block; }
        .svc-desktop-grid  { display: none; }

        /* Tablet (≥640px): grid 2-col, carousel hidden */
        @media (min-width: 640px) {
          .svc-carousel-wrap { display: none; }
          .svc-desktop-grid  {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5px;
            background-color: rgba(35,31,28,0.1);
          }
        }

        /* Desktop (≥1024px): 4-col magazine grid */
        @media (min-width: 1024px) {
          .svc-desktop-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .service-card-img { transition: transform 0.7s cubic-bezier(0.16,1,0.3,1) !important; }
        a:hover .service-card-img { transform: scale(1.04) !important; }
      `}</style>
    </section>
  );
}
