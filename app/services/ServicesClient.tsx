"use client";

import { SERVICE_CATEGORIES } from "@/content/services";
import { WA_HREF } from "@/content/site";
import { MessageCircle } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SignaturePackages from "@/components/sections/home/SignaturePackages";

export default function ServicesClient() {
  return (
    <>
      {/* Page header */}
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
            <span className="eyebrow">Our Services</span>
            <div className="rule-sage" />
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
              Everything you need. One address.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--color-espresso-soft)",
                maxWidth: "50ch",
              }}
            >
              Medical-grade skin treatments alongside premium hair, bridal, and nail services — all under one roof, in both our Kochi locations. Book a consultation for personalised pricing.
            </p>
          </SectionReveal>

          {/* Category jump nav */}
          <SectionReveal delay={0.15}>
            <nav
              aria-label="Service category navigation"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginTop: "2rem" }}
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="svc-nav-pill"
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </SectionReveal>
        </div>
      </section>

      {/* Signature Brochure Packages */}
      <SignaturePackages />

      {/* Service categories */}
      {SERVICE_CATEGORIES.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.slug}
          className="section-pad"
          style={{
            backgroundColor: catIndex % 2 === 0 ? "var(--color-ivory)" : "var(--color-gold-pale)",
            scrollMarginTop: "4.5rem",
          }}
        >
          <div className="container">
            <SectionReveal>
              <div style={{ marginBottom: "3rem" }}>
                {/* Large numeral */}
                <div
                  style={{
                    fontFamily: "var(--font-fraunces, Georgia, serif)",
                    fontSize: "clamp(4rem, 10vw, 8rem)",
                    fontWeight: 300,
                    color: catIndex % 2 === 0 ? "rgba(35,31,28,0.06)" : "rgba(197,160,89,0.25)",
                    lineHeight: 0.9,
                    marginBottom: "0.5rem",
                    userSelect: "none",
                    letterSpacing: "-0.04em",
                  }}
                  aria-hidden="true"
                >
                  {String(catIndex + 1).padStart(2, "0")}
                </div>
                <span className="eyebrow">{cat.label}</span>
                <div className="rule-gold" />
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces, Georgia, serif)",
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--color-espresso)",
                    marginBottom: "1rem",
                  }}
                >
                  {cat.name}
                </h2>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "var(--color-espresso-soft)",
                    maxWidth: "56ch",
                    marginBottom: "2.5rem",
                  }}
                >
                  {cat.description}
                </p>
              </div>
            </SectionReveal>

            {/* Service list — responsive grid/carousel */}
            <div className="svc-card-grid">
              {cat.services.map((svc, i) => (
                <SectionReveal key={svc.id} delay={i * 0.07}>
                  <div
                    style={{
                      backgroundColor: catIndex % 2 === 0 ? "var(--color-ivory)" : "var(--color-sage-pale)",
                      padding: "1.75rem 2rem",
                      height: "100%",
                    }}
                    className="svc-card"
                    data-even={catIndex % 2 === 0 ? "true" : "false"}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces, Georgia, serif)",
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        color: "var(--color-espresso)",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {svc.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "var(--color-espresso-soft)",
                        margin: "0 0 1rem",
                      }}
                    >
                      {svc.description}
                    </p>
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-sage)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        borderBottom: "1px solid var(--color-sage-light)",
                        paddingBottom: "0.1rem",
                        minHeight: "44px",
                      }}
                    >
                      Book a consultation →
                    </a>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Category CTA */}
            <SectionReveal delay={0.3}>
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.75rem" }}
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                  Book {cat.label} on WhatsApp
                </a>
                <span style={{ fontSize: "0.8rem", color: "var(--color-sage)", fontStyle: "italic" }}>
                  Consultation required · No price commitment
                </span>
              </div>
            </SectionReveal>
          </div>
        </section>
      ))}

      <style>{`
        .svc-nav-pill {
          padding: 0.45rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(35,31,28,0.15);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-espresso);
          transition: background-color 0.2s, color 0.2s;
          background-color: transparent;
        }
        .svc-nav-pill:hover {
          background-color: var(--color-espresso);
          color: var(--color-ivory);
        }
        .svc-card[data-even="true"]:hover { background-color: var(--color-ivory-dark) !important; }
        .svc-card[data-even="false"]:hover { background-color: var(--color-ivory) !important; }
        .svc-card { transition: background-color 0.3s; }

        /* Service card grid — responsive */
        .svc-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: rgba(35,31,28,0.08);
          border: 1px solid rgba(35,31,28,0.08);
        }
        @media (min-width: 640px) {
          .svc-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .svc-card-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}
