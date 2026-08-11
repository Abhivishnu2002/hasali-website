"use client";

import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { LOCATIONS, TEL_HREF, PHONE_DISPLAY } from "@/content/site";
import StarRating from "@/components/ui/StarRating";
import SectionReveal from "@/components/ui/SectionReveal";
import { useBookingModal } from "@/components/ui/BookingModalContext";

export default function LocationsClient() {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(4.5rem + clamp(3rem, 6vw, 5rem))",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "var(--section-pad-x)",
          backgroundColor: "#fdfbf7",
          color: "var(--color-espresso)",
          borderBottom: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>
              Two Locations in Kochi
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
                maxWidth: "22ch",
                marginBottom: "1rem",
              }}
            >
              Close to where you are.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "48ch",
              }}
            >
              Visit us in Kadavanthara or Kalamassery. Both branches offer our full range of medical skin therapies, trichology hair rituals, and clinical care.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Jump nav */}
      <section
        style={{
          backgroundColor: "#faf5ea",
          paddingBlock: "1.25rem",
          borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold-dark)" }}>
              Jump to branch:
            </span>
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={`#${loc.id}`}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-espresso)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "rgba(197, 160, 89, 0.5)",
                }}
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed branch sections */}
      {LOCATIONS.map((loc, index) => (
        <section
          key={loc.id}
          id={loc.id}
          className="section-pad"
          style={{
            backgroundColor: index % 2 === 0 ? "#fdfbf7" : "#faf5ea",
            scrollMarginTop: "5rem",
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
              {/* Branch info */}
              <SectionReveal>
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.35rem 0.875rem",
                      backgroundColor: "rgba(197, 160, 89, 0.12)",
                      border: "1px solid rgba(197, 160, 89, 0.35)",
                      borderRadius: "100px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--color-gold-dark)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <MapPin size={13} /> {loc.shortName} Branch
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-espresso)",
                      marginBottom: "1rem",
                    }}
                  >
                    {loc.name}
                  </h2>

                  {/* Rating badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <StarRating rating={loc.rating} size={15} />
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-espresso)" }}>
                      {loc.rating}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--color-espresso-soft)" }}>
                      ({loc.reviewCount} Google reviews)
                    </span>
                  </div>

                  {/* Address box */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(197, 160, 89, 0.25)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
                      <MapPin size={18} strokeWidth={1.5} style={{ color: "var(--color-gold-dark)", flexShrink: 0, marginTop: "0.15rem" }} />
                      <div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "0.25rem" }}>
                          Full Address
                        </div>
                        <address style={{ fontStyle: "normal", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--color-espresso)" }}>
                          {loc.address.street}<br />
                          {loc.address.area}, {loc.address.city}<br />
                          {loc.address.state} {loc.address.pincode}
                        </address>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.875rem" }}>
                      <Phone size={16} strokeWidth={1.5} style={{ color: "var(--color-gold-dark)", flexShrink: 0 }} />
                      <a href={TEL_HREF} style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-gold-dark)" }}>
                        {PHONE_DISPLAY}
                      </a>
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <Clock size={16} strokeWidth={1.5} style={{ color: "var(--color-gold-dark)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)" }}>
                        {loc.hours}
                      </span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                    <button
                      type="button"
                      onClick={() => openBookingModal()}
                      className="btn-ghost"
                      style={{ fontSize: "0.75rem", cursor: "pointer" }}
                    >
                      <MessageCircle size={14} strokeWidth={1.5} />
                      Book Appointment
                    </button>
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
            .location-detail-grid { grid-template-columns: 1fr; }
            @media (min-width: 640px) {
              .location-detail-grid { grid-template-columns: 1fr 1fr; }
            }
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
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="btn-gold"
              style={{ cursor: "pointer" }}
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              Book a Consultation
            </button>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
