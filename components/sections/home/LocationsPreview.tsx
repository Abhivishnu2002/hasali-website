import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS, TEL_HREF, PHONE_DISPLAY } from "@/content/site";
import StarRating from "@/components/ui/StarRating";
import SectionReveal from "@/components/ui/SectionReveal";

const locationImages = [
  { src: "/images/pic4.jpg", alt: "Hasali Kadavanthara — bright salon floor with arched mirrors and chandelier" },
  { src: "/images/pic6.jpg", alt: "Hasali Kalamassery — dramatic dark-wall reception with teal desk and Hasali signage" },
];

export default function LocationsPreview() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="section-pad"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Visit Us</span>
            <div className="rule-sage" />
            <h2
              id="locations-heading"
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                margin: 0,
              }}
            >
              Two locations in Kochi
            </h2>
          </div>
        </SectionReveal>

        <div className="locations-grid">
          {LOCATIONS.map((loc, i) => (
            <SectionReveal key={loc.id} delay={i * 0.12}>
              <article
                style={{
                  border: "1px solid rgba(35,31,28,0.1)",
                  overflow: "hidden",
                  backgroundColor: "var(--color-ivory)",
                }}
              >
                {/* Photo */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image
                    src={locationImages[i].src}
                    alt={locationImages[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                    className="loc-img"
                  />
                  {/* Location badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "rgba(247,243,236,0.92)",
                      backdropFilter: "blur(8px)",
                      padding: "0.3rem 0.75rem",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-sage)",
                    }}
                  >
                    {i === 0 ? "Flagship" : "Branch"}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces, Georgia, serif)",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      color: "var(--color-espresso)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {loc.shortName}
                  </h3>

                  <StarRating rating={loc.rating} reviewCount={loc.reviewCount} size={13} />

                  <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                      <MapPin size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0, marginTop: "0.15rem" }} />
                      <address style={{ fontStyle: "normal", fontSize: "0.875rem", lineHeight: 1.55, color: "var(--color-espresso-soft)" }}>
                        {loc.address.street}<br />
                        {loc.address.area}, {loc.address.city} {loc.address.pincode}
                      </address>
                    </div>
                    <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                      <Phone size={13} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0 }} />
                      <a href={TEL_HREF} style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)" }}>{PHONE_DISPLAY}</a>
                    </div>
                    <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                      <Clock size={13} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)" }}>{loc.hours}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.7rem", padding: "0.55rem 1rem" }}
                    >
                      Get Directions
                    </a>
                    <Link
                      href="/locations"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-sage)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        alignSelf: "center",
                      }}
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style>{`
        /* Mobile: single column stack */
        .locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        /* Tablet + Desktop (≥640px): side-by-side */
        @media (min-width: 640px) {
          .locations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        .loc-img { transition: transform 0.6s ease !important; }
        article:hover .loc-img { transform: scale(1.03) !important; }
      `}</style>
    </section>
  );
}
