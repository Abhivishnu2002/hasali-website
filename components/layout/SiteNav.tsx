"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, WA_HREF, PHONE_DISPLAY, TEL_HREF, BRAND } from "@/content/site";

/* ── Marquee ticker content ── */
const TICKER_ITEMS = [
  "🌿 ISO 9001:2015 Certified",
  "✦ Free consultation with every first visit",
  "✦ Award-winning cosmetology clinic in Kochi",
  "✦ 2,000+ happy clients across 2 locations",
  "✦ Bridal packages from ₹4,999",
  "✦ Open 7 days · 10 AM – 8 PM",
];

// Build one copy of item JSX
const TickerItems = () => (
  <>
    {TICKER_ITEMS.map((text, i) => (
      <span key={i} className="marquee-item">
        <span style={{ color: "rgba(201,169,110,0.8)", fontSize: "0.5rem" }}>◆</span>
        {text}
      </span>
    ))}
  </>
);

function MarqueeTicker() {
  return (
    <div className="marquee-outer">
      {/* Two identical copies — the second one starts exactly where the first ends */}
      <div className="marquee-track">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}


export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll(); // run immediately
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Nav is transparent when at the top of the homepage (hero is dark behind it)
  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      {/* ── Marquee Promo Bar ── */}
      <div className="promo-bar">
        <MarqueeTicker />
      </div>

      {/* ── Main Header ── */}
      <header
        style={{
          position: "fixed",
          top: "2.375rem",
          left: 0,
          right: 0,
          zIndex: 100,
          transition:
            "background-color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
          backgroundColor: isTransparent
            ? "rgba(253, 251, 247, 0.85)"
            : "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
          boxShadow:
            scrolled && !menuOpen ? "0 4px 24px rgba(197, 160, 89, 0.12)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Hasali — home" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Image
              src="/images/logo.png"
              alt="Hasali Cosmetology Clinic & Salon"
              width={160}
              height={44}
              style={{ height: "2.4rem", width: "auto", objectFit: "contain", transition: "opacity 0.3s" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: pathname === item.href
                    ? "var(--color-gold-dark)"
                    : "var(--color-espresso)",
                  transition: "color 0.2s ease",
                  paddingBottom: "0.125rem",
                  borderBottom:
                    pathname === item.href
                      ? "2px solid var(--color-gold-light)"
                      : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-gold-dark)";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-espresso)";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.78rem" }}
            >
              Book an Appointment
            </a>
          </nav>

          {/* Mobile: call + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="show-mobile">
            <a
              href={TEL_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              style={{ color: "var(--color-gold-dark)", display: "flex" }}
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-espresso)",
                display: "flex",
              }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              backgroundColor: "var(--color-ivory)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0 var(--section-pad-x)",
            }}
          >
            <nav aria-label="Mobile navigation" style={{ width: "100%" }}>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      minHeight: "44px",
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2rem, 8vw, 3rem)",
                      fontWeight: 400,
                      color: pathname === item.href ? "var(--color-sage)" : "var(--color-espresso)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      paddingBlock: "0.5rem",
                      borderBottom: "1px solid rgba(35,31,28,0.07)",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}
              >
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book an Appointment
                </a>
                <a href={TEL_HREF} className="btn-ghost">
                  <Phone size={15} strokeWidth={1.5} />
                  {PHONE_DISPLAY}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: none !important; }
        .show-mobile { display: flex !important; }
        @media (min-width: 1024px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
