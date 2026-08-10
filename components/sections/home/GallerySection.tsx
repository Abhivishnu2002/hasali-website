"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/pic1.jpg",
    alt: "Hasali Cosmetology Clinic Reception Desk Kochi",
    caption: "Clinic Reception",
  },
  {
    src: "/images/pic4.jpg",
    alt: "Hasali Salon Styling Station and Arch Mirrors",
    caption: "Styling Suite",
  },
  {
    src: "/images/pic3.jpg",
    alt: "Hasali Treatment and Pedicure Spa Room",
    caption: "Pedicure Lounge",
  },
  {
    src: "/images/pic5.jpg",
    alt: "Hasali Salon Premium Sanctuary Interior",
    caption: "Sanctuary Lounge",
  },
  {
    src: "/images/pic2.jpg",
    alt: "Hasali Private Consultation Suite",
    caption: "Consultation Suite",
  },
  {
    src: "/images/pic6.jpg",
    alt: "Hasali Teal Reception Counter Kalamassery",
    caption: "Teal Lounge",
  },
  {
    src: "/images/pic7.jpg",
    alt: "Hasali Waiting Lounge Area",
    caption: "Waiting Lounge",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 20;

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  const total = GALLERY_IMAGES.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollXParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const scrollToIndex = (idx: number) => {
    const clamped = Math.max(0, Math.min(total - 1, idx));
    trackRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const onScroll = () => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(idx);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = scrollStart.current + (dragStart.current - e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    onScroll();
    const snap = Math.round((trackRef.current?.scrollLeft ?? 0) / (CARD_WIDTH + CARD_GAP));
    scrollToIndex(snap);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Gallery"
      style={{ backgroundColor: "var(--color-ivory-dark)", paddingBlock: "var(--section-pad-y)", overflow: "hidden" }}
    >
      {/* Header */}
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-pill" style={{ marginBottom: "1.25rem" }}>• Gallery</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--color-espresso)",
                margin: 0,
              }}
            >
              Moments of Transformation
            </h2>
          </motion.div>

          {/* Arrow controls */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: "0.625rem" }}
          >
            <button
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous gallery image"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                border: "1.5px solid rgba(35,31,28,0.2)",
                background: activeIndex === 0 ? "transparent" : "var(--color-espresso)",
                cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activeIndex === 0 ? "rgba(35,31,28,0.25)" : "#fff",
                transition: "all 0.25s",
              }}
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex >= total - 1}
              aria-label="Next gallery image"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                border: "1.5px solid rgba(35,31,28,0.2)",
                background: activeIndex >= total - 1 ? "transparent" : "var(--color-espresso)",
                cursor: activeIndex >= total - 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activeIndex >= total - 1 ? "rgba(35,31,28,0.25)" : "#fff",
                transition: "all 0.25s",
              }}
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Drag-scroll track */}
      <motion.div style={{ x: scrollXParallax }}>
        <div
          ref={trackRef}
          className="gallery-scroll-track"
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
            paddingInline: "clamp(1.25rem, 5vw, 5rem)",
            paddingBottom: "0.5rem",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="gallery-card gallery-scroll-item"
              style={{
                width: `${CARD_WIDTH}px`,
                height: "420px",
                scrollSnapAlign: "start",
                borderRadius: "16px",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="320px"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s var(--ease-out-expo)",
                  pointerEvents: "none",
                }}
                draggable={false}
              />
              {/* Caption overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,8,6,0.75) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.125rem",
                  left: "1.125rem",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", marginTop: "2rem" }}>
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Gallery image ${i + 1}`}
            style={{
              width: activeIndex === i ? "1.5rem" : "0.4rem",
              height: "0.4rem",
              borderRadius: "999px",
              backgroundColor: activeIndex === i ? "var(--color-espresso)" : "rgba(35,31,28,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s var(--ease-out-expo)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
