import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

const differentiators = [
  {
    id: "clinic",
    label: "Clinical Precision",
    body: "Our skin protocols are designed to medical-grade standards — each treatment is assessed, prescribed, and monitored by trained cosmetology professionals, not generalist beauticians.",
  },
  {
    id: "salon",
    label: "Salon Artistry",
    body: "From bridal looks to everyday cuts, our salon team brings craft and creativity — with premium products and a design-forward environment that treats your visit as an experience.",
  },
  {
    id: "unisex",
    label: "Unisex & Inclusive",
    body: "Hasali was built from day one for everyone. No gender-based service menus, no awkward questions. Just exceptional care, personalised to you.",
  },
];

/*
 * Mobile (<640px):  Clean stack — image on top (16/10 aspect, no bleed),
 *                   text below with normal padding. No overflow.
 * Desktop (≥640px): Offset bleed — image bleeds to left edge, text offset right.
 */
export default function HasaliDifference() {
  return (
    <section
      aria-labelledby="difference-heading"
      style={{ backgroundColor: "var(--color-ivory)", overflow: "hidden" }}
    >
      {/* ── MOBILE stack (<640px) ── */}
      <div className="diff-mobile">
        {/* Image: fixed aspect, full-width, no bleed */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/pic2.jpg"
            alt="Hasali consultation room — sage-green walls, warm lighting"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Text: normal block padding, no bleed effects */}
        <div
          style={{
            padding: "2.5rem var(--section-pad-x) 3rem",
          }}
        >
          <span className="eyebrow">The Hasali Difference</span>
          <div className="rule-sage" />
          <h2
            id="difference-heading"
            style={{
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 8vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              color: "var(--color-espresso)",
              marginBottom: "2rem",
            }}
          >
            Not a clinic.
            Not a salon.
            <em style={{ color: "var(--color-sage)", fontStyle: "italic" }}> Both.</em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {differentiators.map((d) => (
              <div key={d.id} style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "2px",
                    backgroundColor: "var(--color-sage)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-switzer, system-ui, sans-serif)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-espresso)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {d.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "var(--color-espresso-soft)",
                      margin: 0,
                    }}
                  >
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABLET + DESKTOP bleed layout (≥640px) ── */}
      <div
        className="diff-split"
        style={{ minHeight: "min(80vh, 700px)" }}
      >
        {/* Image — bleeds left */}
        <SectionReveal
          style={{ position: "relative", overflow: "hidden" }}
          className="diff-img-col"
        >
          <Image
            src="/images/pic2.jpg"
            alt="Hasali consultation room — sage-green walls, warm lighting, clinical-grade furniture"
            fill
            sizes="(max-width: 1023px) 45vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Establishment year badge — desktop only */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              backgroundColor: "var(--color-terracotta)",
              color: "var(--color-ivory)",
              padding: "0.875rem 1.25rem",
            }}
          >
            <div style={{ fontFamily: "var(--font-fraunces, Georgia, serif)", fontSize: "2rem", fontWeight: 400, lineHeight: 1 }}>
              2023
            </div>
            <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85, marginTop: "0.2rem" }}>
              Established
            </div>
          </div>
        </SectionReveal>

        {/* Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(3rem,6vw,6rem) var(--section-pad-x)",
            backgroundColor: "var(--color-ivory)",
          }}
        >
          <SectionReveal delay={0.1}>
            <span className="eyebrow">The Hasali Difference</span>
            <div className="rule-sage" />
            <h2
              style={{
                fontFamily: "var(--font-fraunces, Georgia, serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
                color: "var(--color-espresso)",
                marginBottom: "2.5rem",
                maxWidth: "20ch",
              }}
            >
              Not a clinic.
              Not a salon.
              <em style={{ color: "var(--color-sage)", fontStyle: "italic" }}> Both.</em>
            </h2>
          </SectionReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {differentiators.map((d, i) => (
              <SectionReveal key={d.id} delay={0.2 + i * 0.1}>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <div
                    style={{
                      width: "2px",
                      backgroundColor: "var(--color-sage)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-switzer, system-ui, sans-serif)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-espresso)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {d.label}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: "var(--color-espresso-soft)",
                        margin: 0,
                      }}
                    >
                      {d.body}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile: stack, no bleed */
        .diff-mobile { display: block; }
        .diff-split  { display: none; }

        /* Tablet + Desktop (≥640px): offset split */
        @media (min-width: 640px) {
          .diff-mobile { display: none; }
          .diff-split  {
            display: grid;
            grid-template-columns: 45fr 55fr;
          }
          .diff-img-col { min-height: unset; }
        }
      `}</style>
    </section>
  );
}
