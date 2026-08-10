"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    id: "f1",
    q: "What types of skin treatments do you offer at Hasali?",
    a: "We offer a comprehensive range of medical-grade skin treatments including HydraFacial, chemical peels, microdermabrasion, pigmentation therapy, acne treatment, anti-aging protocols, and personalized skin analysis. All treatments are performed by certified cosmetologists using clinical-grade equipment.",
  },
  {
    id: "f2",
    q: "Is Hasali suitable for both men and women?",
    a: "Absolutely! Hasali is Kochi's premier unisex cosmetology clinic. We welcome all genders and offer services tailored for every skin type, hair type, and beauty goal — from grooming and skincare to bridal packages and nail art.",
  },
  {
    id: "f3",
    q: "How do I book an appointment?",
    a: "The easiest way to book is via WhatsApp — just click any 'Book an Appointment' button on our site. You can also call us directly at +91 99953 66858. We recommend booking 2–3 days in advance for popular services and bridal packages.",
  },
  {
    id: "f4",
    q: "What is the duration of a typical session?",
    a: "Session duration varies by service. A basic facial typically takes 45–60 minutes, while advanced hair or skin protocols may take 90–120 minutes. Bridal packages are typically scheduled over multiple sessions. We'll give you a precise time estimate when you book.",
  },
  {
    id: "f5",
    q: "Do you offer bridal packages? What's included?",
    a: "Yes! Our bridal packages are fully customizable and typically include pre-bridal skin prep sessions, hair treatments, the wedding-day bridal makeup and hair styling, mehendi preparation, and nail art. Packages are available for brides, grooms, and bridal parties.",
  },
  {
    id: "f6",
    q: "What is the ISO 9001:2015 certification you mention?",
    a: "Hasali is Kochi's only cosmetology clinic certified to ISO 9001:2015 — a globally recognized quality management standard. This means our processes, hygiene protocols, client care standards, and staff training all meet strict international benchmarks for quality and consistency.",
  },
  {
    id: "f7",
    q: "Do you have two branches? Which is closer to me?",
    a: "Yes! We have our flagship clinic in Kadavanthara (Gandhi Nagar) and a branch in Kalamassery (Eloor Road). Both locations offer the full range of services. The Kadavanthara branch is more central, while Kalamassery serves North Ernakulam and surrounding areas.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      aria-label="Frequently Asked Questions"
      style={{ backgroundColor: "var(--color-ivory)", paddingBlock: "var(--section-pad-y)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            marginInline: "auto",
            marginBottom: "3.5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <span className="section-pill">• FAQ: Most Common Questions</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--color-espresso)",
              marginBottom: "0.875rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              color: "var(--color-espresso-soft)",
              margin: 0,
            }}
          >
            Everything you need to know before your first visit to Hasali Cosmetology Clinic.
          </p>
        </div>

        {/* FAQ list */}
        <div style={{ maxWidth: "780px", marginInline: "auto" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                className={`faq-item${isOpen ? " open" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  className="faq-trigger"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span style={{ paddingRight: "1rem" }}>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <Plus size={12} strokeWidth={2.5} />
                  </span>
                </button>

                <div
                  id={`faq-body-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`faq-body${isOpen ? " open" : " closed"}`}
                >
                  <div className="faq-body-inner">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-header {
          grid-template-columns: 1fr;
        }
      `}</style>
    </section>
  );
}
