import type { Metadata } from "next";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { LOCATIONS, TEL_HREF, PHONE_DISPLAY, WA_HREF, BRAND } from "@/content/site";
import StarRating from "@/components/ui/StarRating";
import SectionReveal from "@/components/ui/SectionReveal";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find Hasali Cosmetology Clinic & Salon in Kochi — Kadavanthara (flagship) and Kalamassery (branch). Open daily 10 AM – 8 PM. Book via WhatsApp.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(4.5rem + clamp(3rem, 6vw, 5rem))",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "var(--section-pad-x)",
          backgroundColor: "#faf7f2",
          color: "var(--color-espresso)",
          borderBottom: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>
              Visit Us
            </span>
            <div className="rule-gold" />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--color-espresso)",
                maxWidth: "20ch",
                marginBottom: "1rem",
              }}
            >
              Two locations in Kochi, Kerala.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "44ch",
                fontWeight: 500,
              }}
            >
              Kadavanthara and Kalamassery — both offering the full range of {BRAND.name} services with the same standards, teams, and experience.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Location detail cards */}
      {LOCATIONS.map((loc, i) => (
        <section
          key={loc.id}
          className="section-pad"
          style={{
            backgroundColor: i % 2 === 0 ? "#fdfbf7" : "#faf5ea",
            borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "start",
              }}
              className="location-detail-grid"
            >
              {/* Info column */}
              <SectionReveal>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginBottom: "0.75rem",
                      padding: "0.3rem 0.85rem",
                      background: "linear-gradient(135deg, #bf953f, #d4af37, #aa771c)",
                      color: "#000",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      borderRadius: "6px",
                      boxShadow: "0 2px 8px rgba(197, 160, 89, 0.25)",
                    }}
                  >
                    {i === 0 ? "Flagship" : "Branch"}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-espresso)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {loc.name}
                  </h2>

                  <StarRating rating={loc.rating} reviewCount={loc.reviewCount} size={14} />

                  <div
                    style={{
                      marginTop: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                      <MapPin size={18} strokeWidth={1.5} style={{ color: "#9a7b38", flexShrink: 0, marginTop: "0.1rem" }} />
                      <div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "0.3rem" }}>
                          Address
                        </div>
                        <address style={{ fontStyle: "normal", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-espresso-soft)" }}>
                          {loc.address.street}<br />
                          {loc.address.area}, {loc.address.city}<br />
                          {loc.address.state} — {loc.address.pincode}
                        </address>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                      <Phone size={18} strokeWidth={1.5} style={{ color: "#9a7b38", flexShrink: 0, marginTop: "0.1rem" }} />
                      <div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "0.3rem" }}>
                          Phone
                        </div>
                        <a href={TEL_HREF} style={{ fontSize: "0.9375rem", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                      <Clock size={18} strokeWidth={1.5} style={{ color: "#9a7b38", flexShrink: 0, marginTop: "0.1rem" }} />
                      <div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "0.3rem" }}>
                          Opening Hours
                        </div>
                        <div style={{ fontSize: "0.9375rem", color: "var(--color-espresso-soft)", fontWeight: 500 }}>
                          {loc.hours}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <ExternalLink size={14} strokeWidth={1.5} />
                      Get Directions
                    </a>
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <MessageCircle size={14} strokeWidth={1.5} />
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </SectionReveal>

              {/* Map embed */}
              <SectionReveal delay={0.15}>
                <div
                  className="map-container"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: "1.5px solid rgba(197, 160, 89, 0.35)",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(197, 160, 89, 0.12)",
                  }}
                >
                  <iframe
                    src={loc.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing Hasali ${loc.shortName} location`}
                    aria-label={`Google Maps embed for Hasali ${loc.shortName} at ${loc.addressFormatted}`}
                  />
                </div>
              </SectionReveal>
            </div>
          </div>

          <style>{`
            /* Mobile: single column */
            .location-detail-grid { grid-template-columns: 1fr; }
            /* Tablet + Desktop (≥640px): side-by-side */
            @media (min-width: 640px) {
              .location-detail-grid { grid-template-columns: 1fr 1fr; }
            }
            /* Map aspect: 4/3 on mobile (tall), wider on desktop */
            .map-container { aspect-ratio: 4/3; }
            @media (min-width: 640px) {
              .map-container { aspect-ratio: 16/9; }
            }
          `}</style>
        </section>
      ))}

      {/* Contact nudge */}
      <section
        style={{
          backgroundColor: "#faf5ea",
          paddingBlock: "3.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <SectionReveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                marginBottom: "1.25rem",
              }}
            >
              Not sure which location to visit?
            </h2>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              Ask us on WhatsApp
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
