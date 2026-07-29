"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, WA_HREF, PHONE_DISPLAY, TEL_HREF } from "@/content/site";

import Image from "next/image";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const darkHeroPages = ["/about", "/locations", "/contact"];
  const isDarkHero = !scrolled && !menuOpen && darkHeroPages.includes(pathname);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background-color 0.35s ease, box-shadow 0.35s ease",
          backgroundColor: scrolled || menuOpen
            ? "rgba(247, 243, 236, 0.96)"
            : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          boxShadow: scrolled && !menuOpen
            ? "0 1px 0 rgba(35,31,28,0.08)"
            : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Hasali — home"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={isDarkHero ? "/images/logo-light.png" : "/images/logo.png"}
              alt="Hasali Cosmetology Clinic & Salon"
              width={180}
              height={48}
              style={{
                height: "2.65rem",
                width: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.25rem",
            }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-switzer, system-ui, sans-serif)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: pathname === item.href
                    ? (isDarkHero ? "var(--color-sage-light)" : "var(--color-sage)")
                    : (isDarkHero ? "var(--color-ivory)" : "var(--color-espresso)"),
                  position: "relative",
                  paddingBottom: "0.15rem",
                  transition: "color 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkHero ? "var(--color-sage-light)" : "var(--color-sage)";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    (e.currentTarget as HTMLElement).style.color = isDarkHero ? "var(--color-ivory)" : "var(--color-espresso)";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Book CTA */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={isDarkHero ? "btn-ghost-ivory" : "btn-primary"}
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}
            >
              Book on WhatsApp
            </a>
          </nav>

          {/* Mobile: call + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="show-mobile">
            <a
              href={TEL_HREF}
              aria-label={`Call us at ${PHONE_DISPLAY}`}
              style={{
                color: isDarkHero ? "var(--color-ivory)" : "var(--color-espresso)",
                transition: "color 0.35s ease",
                display: "flex",
                alignItems: "center",
              }}
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
                color: isDarkHero ? "var(--color-ivory)" : "var(--color-espresso)",
                transition: "color 0.35s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
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
              {/* WhatsApp CTA first — primary conversion action */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book on WhatsApp
                </a>
                <a href={TEL_HREF} className="btn-ghost">
                  <Phone size={15} strokeWidth={1.5} />
                  {PHONE_DISPLAY}
                </a>
              </motion.div>

              {/* Nav links */}
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      minHeight: "44px",
                      fontFamily: "var(--font-fraunces, Georgia, serif)",
                      fontSize: "clamp(2rem, 8vw, 3rem)",
                      fontWeight: 400,
                      color: pathname === item.href
                        ? "var(--color-sage)"
                        : "var(--color-espresso)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      paddingBlock: "0.4rem",
                      borderBottom: "1px solid rgba(35,31,28,0.08)",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for desktop/mobile visibility — breakpoint 1024px */}
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
