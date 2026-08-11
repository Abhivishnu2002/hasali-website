"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ChevronDown } from "lucide-react";

function InstagramIcon({ size = 15, strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import {
  BRAND,
  LOCATIONS,
  NAV_ITEMS,
  TEL_HREF,
  PHONE_DISPLAY,
  WA_HREF,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/content/site";

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(253,249,244,0.5)",
        }}
      >
        {title}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          style={{ transition: "transform 0.3s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
          className="footer-chevron"
        />
      </button>
      <div className={`footer-accordion-body ${open ? "open" : "closed"} footer-accordion-mobile`}>
        <div style={{ paddingBottom: "0.75rem" }}>{children}</div>
      </div>
      <div className="footer-accordion-desktop" style={{ marginTop: "1rem" }}>
        {children}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ backgroundColor: "#fdfbf7", color: "var(--color-espresso)", borderTop: "2px solid rgba(197, 160, 89, 0.3)" }}>
      {/* ── Newsletter top band ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
          paddingBlock: "2.5rem",
          backgroundColor: "#faf5ea",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "var(--color-espresso)",
                letterSpacing: "-0.02em",
                marginBottom: "0.375rem",
              }}
            >
              Stay Luminous & Glowing
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-espresso-soft)", margin: 0 }}>
              Beauty insights, clinical updates, and bespoke care offers.
            </p>
          </div>

          {subscribed ? (
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-gold-dark)", fontWeight: 600, margin: 0 }}>
              ✓ Thank you — you're subscribed!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address for newsletter"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid rgba(197, 160, 89, 0.4)",
                  borderRadius: "6px",
                  padding: "0.75rem 1.25rem",
                  color: "var(--color-espresso)",
                  outline: "none",
                  minWidth: "min(220px, 100%)",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(197, 160, 89, 0.4)")}
              />
              <button
                type="submit"
                className="btn-gold"
                style={{ padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container" style={{ paddingBlock: "3.5rem 2rem" }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Hasali — home" style={{ display: "inline-block", marginBottom: "1rem" }}>
              <Image
                src="/images/logo.png"
                alt="Hasali Cosmetology Clinic & Salon"
                width={160}
                height={44}
                style={{ height: "2.4rem", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "1.25rem" }}>
              Cosmetology Clinic & Salon
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-espresso-soft)", maxWidth: "24ch", marginBottom: "1.5rem" }}>
              {BRAND.tagline}. Kochi's premier unisex cosmetology clinic.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hasali on Instagram"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(197, 160, 89, 0.4)",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold-dark)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#d4af37";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#d4af37";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(197, 160, 89, 0.4)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-gold-dark)";
                }}
              >
                <InstagramIcon size={15} strokeWidth={1.5} />
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Hasali"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(197, 160, 89, 0.4)",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold-dark)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#d4af37";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#d4af37";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(197, 160, 89, 0.4)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-gold-dark)";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Locations */}
          {LOCATIONS.map((loc) => (
            <FooterAccordion key={loc.id} title={loc.shortName}>
              <div style={{ display: "flex", gap: "0.625rem", marginBottom: "0.75rem" }}>
                <MapPin size={15} strokeWidth={1.75} style={{ color: "var(--color-gold-dark)", flexShrink: 0, marginTop: "0.15rem" }} />
                <address style={{ fontStyle: "normal", fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--color-espresso-soft)", fontWeight: 500 }}>
                  {loc.address.street}<br />
                  {loc.address.area}, {loc.address.city}<br />
                  {loc.address.state} {loc.address.pincode}
                </address>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center", marginBottom: "0.5rem" }}>
                <Phone size={14} strokeWidth={1.75} style={{ color: "var(--color-gold-dark)", flexShrink: 0 }} />
                <a href={TEL_HREF} style={{ fontSize: "0.8125rem", color: "var(--color-gold-dark)", fontWeight: 600, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-gold-dark)")}>
                  {PHONE_DISPLAY}
                </a>
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(26,23,20,0.5)", marginBottom: "0.75rem" }}>{loc.hours}</p>
              <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-gold-dark)", borderBottom: "1.5px solid var(--color-gold-light)", paddingBottom: "0.1rem", transition: "color 0.2s" }}>
                Get Directions →
              </a>
            </FooterAccordion>
          ))}

          {/* Explore */}
          <FooterAccordion title="Explore">
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}
                      style={{ fontSize: "0.8125rem", color: "var(--color-espresso-soft)", fontWeight: 500, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-dark)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-espresso-soft)")}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{ marginTop: "1.5rem" }}>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "0.72rem", padding: "0.6rem 1.125rem" }}>
                Book an Appointment
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
            borderTop: "1px solid rgba(197, 160, 89, 0.2)",
            marginTop: "3rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--color-espresso-soft)", opacity: 0.7, margin: 0 }}>
            © {new Date().getFullYear()} {BRAND.fullName}. Est. {BRAND.established}.
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-gold-dark)", fontWeight: 500, margin: 0 }}>
            ISO 9001:2015 Certified · Business Excellence Award 2023
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }
        @media (max-width: 639px) {
          .footer-grid { grid-template-columns: 1fr; gap: 0; }
          .footer-accordion { border-bottom: 1px solid rgba(197, 160, 89, 0.15); padding-block: 0.25rem; }
          .footer-accordion-mobile  { display: block !important; }
          .footer-accordion-desktop { display: none !important; }
          .footer-chevron { display: block; }
        }
        @media (min-width: 640px) {
          .footer-accordion-mobile  { display: none !important; }
          .footer-accordion-desktop { display: block !important; }
          .footer-accordion-header  { cursor: default; }
          .footer-chevron           { display: none; }
        }
      `}</style>
    </footer>
  );
}
