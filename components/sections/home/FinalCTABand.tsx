import { MessageCircle, Phone } from "lucide-react";
import { WA_HREF, TEL_HREF, PHONE_DISPLAY } from "@/content/site";
import SectionReveal from "@/components/ui/SectionReveal";

export default function FinalCTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-pad fab-clearance"
      style={{
        backgroundColor: "var(--color-ivory-dark)",
        borderTop: "1px solid rgba(35,31,28,0.08)",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        <SectionReveal>
          <span className="eyebrow">Ready to Begin?</span>
          <div className="rule-sage" style={{ margin: "1rem auto" }} />
          <h2
            id="cta-heading"
            style={{
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-espresso)",
              margin: "0 auto 1.25rem",
              maxWidth: "20ch",
            }}
          >
            Your transformation starts here.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--color-espresso-soft)",
              margin: "0 auto 2.5rem",
              maxWidth: "40ch",
            }}
          >
            Book a consultation for any skin, hair, bridal, or nail service. We'll guide you from the first conversation.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Book on WhatsApp
            </a>
            <a href={TEL_HREF} className="btn-ghost">
              <Phone size={15} strokeWidth={1.5} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
