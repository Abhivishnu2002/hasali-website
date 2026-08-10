"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya Menon",
    role: "Regular Client, Kadavanthara",
    rating: 5,
    text: "From the moment I walked in, I felt completely at ease. The skin treatment was deeply therapeutic, and my face looked absolutely glowing. Truly a top-tier beauty experience in Kochi.",
    image: "/images/scrollpic3.png",
  },
  {
    id: "t2",
    name: "Rahul Nair",
    role: "Bridal Grooming Client",
    rating: 5,
    text: "The staff is professional, attentive, and incredibly skilled. Every treatment felt personalized. I left feeling refreshed, balanced, and completely rejuvenated for my big day.",
    image: "/images/scrollpic1.png",
  },
  {
    id: "t3",
    name: "Anjali K.",
    role: "Hair Therapy Client",
    rating: 5,
    text: "My hair has never felt this healthy! The trichology consultation was eye-opening, and the keratin treatment was transformative. I won't go anywhere else in Kochi.",
    image: "/images/scrollpic2.png",
  },
  {
    id: "t4",
    name: "Deepthi S.",
    role: "Bridal Package",
    rating: 5,
    text: "Hasali made my wedding look absolutely perfect. The bridal package covered everything — skin prep, hair, makeup, nails. Worth every rupee!",
    image: "/images/scrollpic.png",
  },
  {
    id: "t5",
    name: "Meera Thomas",
    role: "Skin Treatment Client",
    rating: 5,
    text: "The HydraFacial completely transformed my skin in just 3 sessions. The team is thorough, hygienic, and genuinely care about results. Highly recommend!",
    image: "/images/glass_skin_treatment.jpg",
  },
];


const CARD_WIDTH = 380;
const CARD_GAP = 20;

function StarRating({ count }: { count: number }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < count ? "#f59e0b" : "none"} stroke={i < count ? "none" : "#f59e0b"} strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;

  const scrollTo = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(total - 1, activeIndex + 1));

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(() => {
      setActiveIndex((idx) => {
        const next = idx >= total - 1 ? 0 : idx + 1;
        trackRef.current?.scrollTo({ left: next * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
        return next;
      });
    }, 4500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [isPaused, total]);

  // Sync scroll position → activeIndex
  const onScroll = () => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(idx);
  };

  // Drag
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = dragStart.current - e.clientX;
    trackRef.current.scrollLeft = scrollStart.current + delta;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to nearest
    const track = trackRef.current;
    if (!track) return;
    const idx = Math.round(track.scrollLeft / (CARD_WIDTH + CARD_GAP));
    scrollTo(Math.max(0, Math.min(total - 1, idx)));
  };

  return (
    <section
      aria-label="Client Testimonials"
      style={{ backgroundColor: "#16241B", color: "#fff", paddingBlock: "var(--section-pad-y)", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "50vw",
          height: "80%",
          background: "radial-gradient(ellipse, rgba(74,103,65,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="container">
        {/* Header row */}
        <div className="testimonials-header">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-pill-dark" style={{ marginBottom: "1.25rem" }}>• Testimonials</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Client Stories
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "30ch",
                marginBottom: "2rem",
              }}
            >
              Real experiences from clients across Kochi that inspire trust and transformation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <StarRating count={5} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>
                4.8/5 · 375+ Google Reviews
              </p>
            </div>
          </motion.div>

          {/* Right: arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", alignItems: "flex-end", gap: "0.625rem" }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              disabled={activeIndex === 0}
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.07)",
                cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activeIndex === 0 ? "rgba(255,255,255,0.25)" : "#fff",
                transition: "all 0.2s",
              }}
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              disabled={activeIndex === total - 1}
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.07)",
                cursor: activeIndex === total - 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activeIndex === total - 1 ? "rgba(255,255,255,0.25)" : "#fff",
                transition: "all 0.2s",
              }}
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="testimonial-carousel-track"
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            marginTop: "2.5rem",
            paddingBottom: "0.25rem",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flexShrink: 0,
                width: `${CARD_WIDTH}px`,
                scrollSnapAlign: "start",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                minHeight: "460px",
              }}
            >
              {/* Background portrait */}
              <div style={{ position: "absolute", inset: 0 }}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="380px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,8,6,0.94) 45%, rgba(10,8,6,0.25) 100%)",
                }}
              />
              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  minHeight: "460px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.75rem",
                }}
              >
                {/* Decorative quote mark */}
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  aria-hidden="true"
                  style={{ marginBottom: "0.75rem", opacity: 0.5 }}
                >
                  <path
                    d="M0 24V14.4C0 6.4 5.2 1.6 15.6 0L17.2 2.8C11.2 4 8.4 7.2 8 12H14.4V24H0ZM18 24V14.4C18 6.4 23.2 1.6 33.6 0L35.2 2.8C29.2 4 26.4 7.2 26 12H32.4V24H18Z"
                    fill="white"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.9)",
                    margin: "0 0 1.25rem 0",
                  }}
                >
                  {t.text}
                </p>
                <StarRating count={t.rating} />
                <div style={{ marginTop: "0.75rem" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#fff", margin: 0 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: activeIndex === i ? "1.5rem" : "0.4rem",
                height: "0.4rem",
                borderRadius: "999px",
                backgroundColor: activeIndex === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s var(--ease-out-expo)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .testimonial-carousel-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
