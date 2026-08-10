"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY = [
  {
    src: "/images/pic1.jpg",
    alt: "Peaceful salon space — Hasali Kochi",
    aspect: "3/4",
  },
  {
    src: "/images/pic4.jpg",
    alt: "Expert facial treatment styling suite at Hasali",
    aspect: "3/4",
  },
  {
    src: "/images/pic3.jpg",
    alt: "Pedicure and spa treatment room at Hasali",
    aspect: "3/4",
  },
  {
    src: "/images/pic5.jpg",
    alt: "Sanctuary lounge interior at Hasali Salon",
    aspect: "1/1",
  },
  {
    src: "/images/pic2.jpg",
    alt: "Private consultation room at Hasali",
    aspect: "1/1",
  },
  {
    src: "/images/pic6.jpg",
    alt: "Teal reception area at Hasali Kalamassery",
    aspect: "1/1",
  },
];

export default function InstagramTeaser() {
  return (
    <section
      aria-label="Our Gallery"
      style={{ backgroundColor: "var(--color-ivory)", paddingBlock: "var(--section-pad-y)" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-pill">• Our Gallery</span>
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
            Beauty Moments
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
            Discover peaceful spaces and beautiful results crafted for every client.
          </p>
          <div className="diamond-rule" style={{ maxWidth: "120px", margin: "1.5rem auto 0" }}><span /></div>
        </div>

        {/* 3-col photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="gallery-grid"
        >
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="gallery-card"
              style={{
                position: "relative",
                aspectRatio: item.aspect,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="https://instagram.com/hasali_cosmetology_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: "0.8125rem" }}
          >
            Follow @hasali_cosmetology_clinic →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 380px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
