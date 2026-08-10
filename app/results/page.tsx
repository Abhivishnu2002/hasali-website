import type { Metadata } from "next";
import Image from "next/image";
import { WA_HREF } from "@/content/site";
import { MessageCircle } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Results & Gallery",
  description:
    "See Hasali Cosmetology Clinic & Salon — interior spaces, salon environment, and our clinic aesthetic in Kochi, Kerala.",
  alternates: { canonical: "/results" },
};

// Gallery using all 7 real images in a varied masonry-style layout
const galleryItems = [
  {
    src: "/images/pic1.jpg",
    alt: "Hasali flagship reception — gold-lit salon interior and marble floors",
    span: 2,
  },
  {
    src: "/images/pic6.jpg",
    alt: "Hasali Kalamassery reception — teal desk, gold Hasali signage, pendant lights",
    span: 1,
  },
  {
    src: "/images/pic2.jpg",
    alt: "Hasali consultation room — elegant gold-accented walls, warm sconce lighting",
    span: 1,
  },
  {
    src: "/images/pic7.jpg",
    alt: "Hasali waiting lounge — teal velvet chairs, botanical wallpaper",
    span: 1,
  },
  {
    src: "/images/pic3.jpg",
    alt: "Hasali hair styling floor — gold mirrors, pendant lights, service corridor",
    span: 1,
  },
  {
    src: "/images/pic4.jpg",
    alt: "Hasali main salon — marble floors, arched mirrors, chandelier",
    span: 2,
  },
  {
    src: "/images/pic5.jpg",
    alt: "Hasali warm interior render — organic tree installation and arch mirrors",
    span: 1,
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(4.5rem + clamp(3rem, 6vw, 5rem))",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "var(--section-pad-x)",
          backgroundColor: "var(--color-ivory)",
          borderBottom: "1px solid rgba(35,31,28,0.08)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">Gallery</span>
            <div className="rule-gold" />
            <h1
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--color-espresso)",
                maxWidth: "22ch",
                marginBottom: "1.25rem",
              }}
            >
              Spaces designed to make you feel something.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "50ch",
                marginBottom: "0.75rem",
              }}
            >
              A look inside Hasali — our interiors, styling stations, and consultation spaces across both Kochi locations.
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-gold-dark)",
                padding: "0.5rem 0.875rem",
                border: "1px dashed var(--color-gold)",
                display: "inline-block",
                letterSpacing: "0.04em",
              }}
            >
              ✦ Client treatment photos and before/after results coming soon — check our Instagram for the latest work.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery grid */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-ivory)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "4px",
            }}
            className="gallery-grid"
          >
            {galleryItems.map((item, i) => (
              <SectionReveal
                key={i}
                delay={i * 0.06}
                style={{ "--span": item.span, gridColumn: `span ${item.span}` } as React.CSSProperties}
                className="gallery-cell"
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: item.span === 2 ? "16/9" : "4/5",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={item.span === 2 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    className="gallery-img"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <style>{`
          /* Mobile (<640px): single column, all span 1, square-ish aspect */
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-cell {
            grid-column: span 1 !important;
          }
          .gallery-cell .mob-aspect {
            aspect-ratio: 4/3;
          }
          /* Tablet (640–1023px): 2-column, wide items span 2 */
          @media (min-width: 640px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .gallery-cell {
              grid-column: inherit !important;
            }
            /* cap span at 2 so it never exceeds column count */
            .gallery-cell { grid-column: span min(var(--span), 2); }
          }
          /* Desktop (≥1024px): 3-col, original mixed spans */
          @media (min-width: 1024px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .gallery-img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1) !important; }
          .gallery-cell:hover .gallery-img { transform: scale(1.04) !important; }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--color-espresso)",
          paddingBlock: "3.5rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <SectionReveal>
            <h2
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-ivory)",
                marginBottom: "1.5rem",
              }}
            >
              Ready to visit?
            </h2>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-ivory"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              Book on WhatsApp
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
