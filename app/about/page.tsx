import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BRAND, CREDENTIALS, WA_HREF } from "@/content/site";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hasali Cosmetology Clinic & Salon — founded in 2023 in Kochi, Kerala. ISO 9001:2015 certified, Business Excellence Award 2023 winner. Kochi's only unisex cosmetology clinic and beauty salon.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    label: "Clinical Standards",
    body: "Every skin protocol at Hasali follows a consultation-first model. We assess, prescribe, and monitor — the same discipline a medical practice applies, in a salon environment.",
  },
  {
    label: "Premium Products",
    body: "We use professional-grade product lines chosen for efficacy and safety, not commission margins. What goes on your skin or hair matters to us.",
  },
  {
    label: "Inclusive by Design",
    body: "Hasali was always going to be unisex. We don't believe in a 'men's menu' and a 'women's menu.' We believe in great results for every person who walks in.",
  },
  {
    label: "Two Locations, One Standard",
    body: "Whether you visit our Kadavanthara flagship or our Kalamassery branch, the training, protocols, and experience are identical. No B-team at either location.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "4.5rem",
          backgroundColor: "var(--color-espresso)",
          color: "var(--color-ivory)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            minHeight: "70vh",
          }}
          className="about-hero-grid"
        >
          {/* Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "clamp(3rem,6vw,6rem) var(--section-pad-x)",
            }}
          >
            <SectionReveal>
              <span className="eyebrow" style={{ color: "var(--color-gold-light)" }}>
                Our Story
              </span>
              <div className="rule-gold" />
              <h1
                style={{
                  fontFamily: "var(--font-fraunces, Georgia, serif)",
                  fontWeight: 400,
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "var(--color-ivory)",
                  maxWidth: "18ch",
                  marginBottom: "1.25rem",
                }}
              >
                Built for everyone who wants to look — and feel — exceptional.
              </h1>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "rgba(247,243,236,0.7)",
                  maxWidth: "44ch",
                  margin: 0,
                }}
              >
                {BRAND.positioning}
              </p>
            </SectionReveal>
          </div>

          {/* Image */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "50vw" }} className="about-hero-img">
            <Image
              src="/images/pic6.jpg"
              alt="Hasali cosmetology clinic reception — dark-wall backdrop with gold Hasali signage and pendant lights"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, var(--color-espresso) 0%, transparent 30%)",
              }}
              className="about-vignette"
            />
          </div>
        </div>

        <style>{`
          .about-hero-grid { grid-template-columns: 1fr; }
          .about-hero-img { min-height: 55vw; }
          .about-vignette { display: none; }
          @media (min-width: 768px) {
            .about-hero-grid { grid-template-columns: 1fr 1fr; }
            .about-hero-img { min-height: unset; }
            .about-vignette { display: block; }
          }
        `}</style>
      </section>

      {/* Founding Story */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <SectionReveal>
            <span className="eyebrow">Founded 2023</span>
            <div className="rule-gold" />
            <h2
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                marginBottom: "1.5rem",
                maxWidth: "28ch",
              }}
            >
              Kochi needed one place that took both skin health and beauty seriously.
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-espresso-soft)", marginBottom: "1.25rem" }}>
              Hasali opened in 2023 with a simple conviction: that the clinical discipline of a cosmetology clinic and the warmth of a premium beauty salon didn't have to exist in separate buildings. Most clients need both — a dermatologist-grade approach to their skin concerns, and a skilled, trustworthy stylist for the rest. We built the space that offers both, under one roof, in Kochi.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-espresso-soft)", marginBottom: "1.25rem" }}>
              We also made an early decision to be fully unisex — not just in name, but in design, training, and service menu. Every treatment and service at Hasali is available to every client, evaluated on need rather than gender.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-espresso-soft)" }}>
              In our first year of operation, Hasali was awarded the <strong>Business Excellence Award 2023 for Best Innovative Cosmetology Clinic in Kerala</strong>, and achieved <strong>ISO 9001:2015 quality management certification</strong> — a mark of our commitment to consistent, professional standards across both locations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: "var(--color-sage-pale)", paddingBlock: "3rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CREDENTIALS.map((c, i) => (
              <SectionReveal key={c.id} delay={i * 0.1}>
                <div
                  style={{
                    border: "1px solid var(--color-sage-light)",
                    padding: "2rem",
                    backgroundColor: "var(--color-ivory)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "3px",
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "var(--color-brass)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-brass)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "var(--color-espresso-soft)" }}>
                      {c.description}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">What We Stand For</span>
            <div className="rule-gold" />
            <h2
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-espresso)",
                marginBottom: "3rem",
              }}
            >
              Our commitments to you
            </h2>
          </SectionReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {values.map((v, i) => (
              <SectionReveal key={v.label} delay={i * 0.08}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces, Georgia, serif)",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: "var(--color-espresso)",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ width: "1.5rem", height: "1px", backgroundColor: "var(--color-sage)", flexShrink: 0 }} />
                    {v.label}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-espresso-soft)", margin: 0 }}>
                    {v.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior gallery strip */}
      <section style={{ overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px" }} className="about-gallery">
          {["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic5.jpg"].map((src, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image
                src={src}
                alt={["Hasali flagship reception", "Hasali consultation room", "Hasali warm salon interior"][i]}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <style>{`.about-gallery { grid-template-columns: 1fr; } @media(min-width:640px){ .about-gallery { grid-template-columns: repeat(3,1fr); } }`}</style>
      </section>

      {/* CTA */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-espresso)", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <SectionReveal>
            <h2
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-ivory)",
                marginBottom: "1.5rem",
              }}
            >
              Come meet us in Kochi.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-ghost-ivory">
                <MessageCircle size={15} strokeWidth={1.5} />
                Book on WhatsApp
              </a>
              <Link href="/locations" className="btn-ghost-ivory">
                View Locations
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
