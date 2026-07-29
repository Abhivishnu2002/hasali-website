"use client";

import Image from "next/image";
import { SIGNATURE_PACKAGES } from "@/content/services";
import { WA_HREF } from "@/content/site";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function SignaturePackages() {
  return (
    <section
      aria-labelledby="signature-heading"
      className="section-pad"
      style={{
        backgroundColor: "var(--color-sage-pale)",
        borderTop: "1px solid rgba(35,31,28,0.08)",
        borderBottom: "1px solid rgba(35,31,28,0.08)",
      }}
    >
      <div className="container">
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Sparkles size={13} style={{ color: "var(--color-terracotta)" }} />
              Exclusive Clinic & Salon Offerings
            </span>
            <div className="rule-sage" style={{ margin: "0.875rem auto" }} />
            <h2
              id="signature-heading"
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                lineHeight: 1.1,
              }}
            >
              Signature Programs & Treatments
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-espresso-soft)",
                maxWidth: "52ch",
                margin: "1rem auto 0",
                lineHeight: 1.65,
              }}
            >
              Curated medical-grade cosmetology packages and restorative hair therapies — designed to deliver visible, long-lasting transformation.
            </p>
          </div>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2rem",
          }}
        >
          {SIGNATURE_PACKAGES.map((pkg, idx) => {
            const waLink = `${WA_HREF}?text=${encodeURIComponent(pkg.whatsappMsg)}`;
            return (
              <SectionReveal key={pkg.id} delay={idx * 0.1}>
                <div
                  style={{
                    backgroundColor: "var(--color-ivory)",
                    border: "1px solid rgba(35,31,28,0.12)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(35,31,28,0.04)",
                  }}
                >
                  {/* Package Image */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        backgroundColor: "rgba(35,31,28,0.85)",
                        backdropFilter: "blur(6px)",
                        color: "var(--color-brass-light)",
                        padding: "0.35rem 0.85rem",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        borderRadius: "2px",
                      }}
                    >
                      {pkg.category === "skin" ? "Skin Cosmetology" : "Hair Therapy"}
                    </div>
                  </div>

                  {/* Package Content */}
                  <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-terracotta)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {pkg.subtitle}
                    </span>

                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces, Georgia, serif)",
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        color: "var(--color-espresso)",
                        marginBottom: "0.75rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {pkg.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "var(--color-espresso-soft)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {pkg.description}
                    </p>

                    {/* Key Inclusions */}
                    <div
                      style={{
                        backgroundColor: "var(--color-ivory-dark)",
                        padding: "1rem 1.125rem",
                        borderRadius: "3px",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--color-sage)",
                          marginBottom: "0.6rem",
                        }}
                      >
                        Package Highlights & Inclusions:
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                        {pkg.inclusions.slice(0, 4).map((inc, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                              fontSize: "0.8rem",
                              color: "var(--color-espresso-soft)",
                              lineHeight: 1.4,
                            }}
                          >
                            <CheckCircle2 size={13} style={{ color: "var(--color-sage)", flexShrink: 0, marginTop: "0.15rem" }} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking CTA */}
                    <div style={{ marginTop: "auto" }}>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          padding: "0.75rem 1rem",
                        }}
                      >
                        <MessageCircle size={15} strokeWidth={1.5} />
                        Enquire Package on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
