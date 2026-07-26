"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import {
  BRAND,
  LOCATIONS,
  NAV_ITEMS,
  TEL_HREF,
  PHONE_DISPLAY,
  WA_HREF,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CREDENTIALS,
} from "@/content/site";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Accordion section — mobile only.
 * On desktop the content is always visible (via CSS); the toggle does nothing.
 */
function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          fontFamily: "var(--font-switzer, system-ui, sans-serif)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-sage-light)",
        }}
      >
        {title}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          style={{
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
          className="footer-chevron"
        />
      </button>

      {/* Mobile: collapsible */}
      <div className={`footer-accordion-body ${open ? "open" : "closed"} footer-accordion-mobile`}>
        <div style={{ paddingBottom: "0.75rem" }}>{children}</div>
      </div>

      {/* Desktop: always visible */}
      <div className="footer-accordion-desktop" style={{ marginTop: "1rem" }}>
        {children}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-espresso)",
        color: "var(--color-ivory)",
        paddingBlock: "4rem 2rem",
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand column — always fully visible, no accordion */}
          <div>
            <Link href="/" aria-label="Hasali — home">
              <span
                style={{
                  fontFamily: "var(--font-fraunces, Georgia, serif)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ivory)",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                Hasali
              </span>
              <span
                style={{
                  fontFamily: "var(--font-switzer, system-ui, sans-serif)",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-sage-light)",
                  display: "block",
                  marginBottom: "1.25rem",
                }}
              >
                Cosmetology Clinic &amp; Salon
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(247,243,236,0.65)",
                maxWidth: "22ch",
                marginBottom: "1.5rem",
              }}
            >
              {BRAND.tagline}. Kochi's premium unisex cosmetology clinic and beauty salon.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {CREDENTIALS.map((c) => (
                <span
                  key={c.id}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-brass-light)",
                  }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--color-brass-light)", flexShrink: 0 }} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Location columns — collapsible on mobile */}
          {LOCATIONS.map((loc) => (
            <FooterAccordion key={loc.id} title={loc.shortName}>
              <div style={{ display: "flex", gap: "0.625rem", marginBottom: "0.75rem" }}>
                <MapPin size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0, marginTop: "0.2rem" }} />
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                    color: "rgba(247,243,236,0.7)",
                  }}
                >
                  {loc.address.street}<br />
                  {loc.address.area}, {loc.address.city}<br />
                  {loc.address.state} {loc.address.pincode}
                </address>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <Phone size={13} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0 }} />
                <a
                  href={TEL_HREF}
                  style={{ fontSize: "0.8125rem", color: "rgba(247,243,236,0.7)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ivory)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,236,0.7)")}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(247,243,236,0.45)", marginTop: "0.5rem" }}>
                {loc.hours}
              </p>
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-sage-light)",
                  borderBottom: "1px solid var(--color-sage)",
                  paddingBottom: "0.1rem",
                  transition: "color 0.2s",
                }}
              >
                Get Directions →
              </a>
            </FooterAccordion>
          ))}

          {/* Nav + Social — collapsible on mobile */}
          <FooterAccordion title="Explore">
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{ fontSize: "0.8125rem", color: "rgba(247,243,236,0.65)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ivory)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,236,0.65)")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-ivory"
                style={{ fontSize: "0.7rem", padding: "0.6rem 1rem" }}
              >
                Book on WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                  color: "rgba(247,243,236,0.6)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ivory)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,236,0.6)")}
              >
                <InstagramIcon size={15} />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </FooterAccordion>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(247,243,236,0.1)",
            marginTop: "3rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(247,243,236,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} {BRAND.fullName}. Est. {BRAND.established}.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(247,243,236,0.25)", margin: 0 }}>
            ISO 9001:2015 Certified · Business Excellence Award 2023
          </p>
        </div>
      </div>

      <style>{`
        /* Desktop grid */
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 3rem;
          padding-bottom: 0;
        }

        /* Mobile: single column, accordions active */
        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .footer-accordion {
            border-bottom: 1px solid rgba(247,243,236,0.08);
            padding-block: 0.25rem;
          }
          /* On mobile: show collapsible body, hide static desktop body */
          .footer-accordion-mobile  { display: block !important; }
          .footer-accordion-desktop { display: none !important; }
          /* ChevronDown only relevant on mobile */
          .footer-chevron { display: block; }
        }

        /* Desktop: hide collapsible body, always show static body */
        @media (min-width: 640px) {
          .footer-accordion-mobile  { display: none !important; }
          .footer-accordion-desktop { display: block !important; }
          .footer-accordion-header  { cursor: default; }
          .footer-chevron           { display: none; }
          .footer-accordion-header .footer-chevron { display: none; }
        }
      `}</style>
    </footer>
  );
}
