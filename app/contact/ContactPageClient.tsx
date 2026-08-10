"use client";

import { useState } from "react";
import { MessageCircle, Phone, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { WA_HREF, TEL_HREF, PHONE_DISPLAY, LOCATIONS } from "@/content/site";
import { SERVICE_CATEGORIES } from "@/content/services";
import SectionReveal from "@/components/ui/SectionReveal";

type FormState = "idle" | "submitting" | "success" | "error";

// Web3Forms public access key — replace with real key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Booking Enquiry — ${formData.service || "General"} (${formData.location || "Any location"})`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        setFormData({ name: "", phone: "", location: "", service: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem 1.125rem",
    backgroundColor: "var(--color-ivory)",
    border: "1px solid rgba(35,31,28,0.15)",
    color: "var(--color-espresso)",
    fontFamily: "var(--font-switzer, system-ui, sans-serif)",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
    appearance: "none" as const,
    boxSizing: "border-box" as const,
    minHeight: "52px", // thumb-tap friendly
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-switzer, system-ui, sans-serif)",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--color-espresso)",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(4.5rem + clamp(3rem, 6vw, 5rem))",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "var(--section-pad-x)",
          backgroundColor: "var(--color-espresso)",
          color: "var(--color-ivory)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow" style={{ color: "var(--color-gold-light)" }}>
              Get in Touch
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
                maxWidth: "22ch",
                marginBottom: "1rem",
              }}
            >
              Book an appointment or ask us anything.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "rgba(247,243,236,0.7)",
                maxWidth: "44ch",
              }}
            >
              The quickest way to reach us is WhatsApp. You can also call, or send us a message below.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Quick CTAs */}
      <section style={{ backgroundColor: "var(--color-ivory-dark)", paddingBlock: "2rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} strokeWidth={1.5} />
              Book on WhatsApp (fastest)
            </a>
            <a href={TEL_HREF} className="btn-ghost">
              <Phone size={15} strokeWidth={1.5} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

            {/* Form */}
            <SectionReveal>
              <h2 style={{ fontFamily: "var(--font-fraunces, Georgia, serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "var(--color-espresso)", marginBottom: "2rem" }}>
                Send us a message
              </h2>

              {formState === "success" ? (
                <div style={{ padding: "2rem", border: "1px solid var(--color-gold)", backgroundColor: "var(--color-gold-pale)", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: "var(--color-gold-dark)", flexShrink: 0, marginTop: "0.1rem" }} />
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-espresso)", marginBottom: "0.4rem" }}>Message received — thank you!</div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)", margin: 0 }}>
                      We'll get back to you shortly. For the fastest response, reach us on{" "}
                      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold-dark)", fontWeight: 500 }}>WhatsApp</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gap: "1rem 1.25rem" }} className="form-grid">
                    <div className="form-full">
                      <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                      <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" style={labelStyle}>Phone Number *</label>
                      <input id="contact-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} autoComplete="tel" />
                    </div>
                    <div>
                      <label htmlFor="contact-location" style={labelStyle}>Preferred Location</label>
                      <div style={{ position: "relative" }}>
                        <select id="contact-location" name="location" value={formData.location} onChange={handleChange} style={{ ...inputStyle, paddingRight: "2.5rem" }}>
                          <option value="">Any location</option>
                          {LOCATIONS.map((loc) => (
                            <option key={loc.id} value={loc.shortName}>{loc.shortName}</option>
                          ))}
                        </select>
                        <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-gold-dark)" }}>↓</span>
                      </div>
                    </div>
                    <div className="form-full">
                      <label htmlFor="contact-service" style={labelStyle}>Service Interest</label>
                      <div style={{ position: "relative" }}>
                        <select id="contact-service" name="service" value={formData.service} onChange={handleChange} style={{ ...inputStyle, paddingRight: "2.5rem" }}>
                          <option value="">Select a service category</option>
                          {SERVICE_CATEGORIES.map((cat) => (
                            <optgroup key={cat.id} label={cat.name}>
                              {cat.services.map((svc) => (
                                <option key={svc.id} value={svc.name}>{svc.name}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-gold-dark)" }}>↓</span>
                      </div>
                    </div>
                    <div className="form-full">
                      <label htmlFor="contact-message" style={labelStyle}>Message</label>
                      <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your skin concerns, hair goals, or any questions…" rows={5} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} />
                    </div>
                  </div>

                  {formState === "error" && (
                    <div style={{ marginTop: "1rem", padding: "0.875rem 1rem", border: "1px solid var(--color-terracotta)", backgroundColor: "rgba(181,98,59,0.05)", display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-terracotta)" }}>
                      <AlertCircle size={16} strokeWidth={1.5} />
                      Something went wrong. Please try <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>WhatsApp</a> or call us directly.
                    </div>
                  )}

                  <button type="submit" disabled={formState === "submitting"} className="btn-primary" style={{ marginTop: "1.5rem", opacity: formState === "submitting" ? 0.6 : 1, cursor: formState === "submitting" ? "not-allowed" : "pointer" }}>
                    {formState === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </SectionReveal>

            {/* Sidebar */}
            <SectionReveal delay={0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {LOCATIONS.map((loc, i) => (
                  <div key={loc.id}>
                    <h3 style={{ fontFamily: "var(--font-fraunces, Georgia, serif)", fontSize: "1.15rem", fontWeight: 400, color: "var(--color-espresso)", marginBottom: "0.875rem" }}>
                      {loc.name}
                    </h3>
                    <address style={{ fontStyle: "normal", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-espresso-soft)", marginBottom: "0.5rem" }}>
                      {loc.addressFormatted}
                    </address>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-gold-dark)", margin: 0 }}>Open {loc.hours}</p>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "0.5rem", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold-dark)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "0.1rem" }}>
                      <ExternalLink size={11} strokeWidth={1.5} />
                      Get Directions
                    </a>
                    {i < LOCATIONS.length - 1 && <hr style={{ marginTop: "1.75rem", borderColor: "rgba(35,31,28,0.08)" }} />}
                  </div>
                ))}

                <div style={{ padding: "1.5rem", backgroundColor: "var(--color-gold-pale)", border: "1px solid var(--color-gold)" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)", marginBottom: "0.5rem" }}>
                    Fastest Response
                  </div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-espresso-soft)", margin: "0 0 1rem" }}>
                    Most clients hear back within minutes via WhatsApp.
                  </p>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.75rem", display: "inline-flex" }}>
                    <MessageCircle size={14} strokeWidth={1.5} />
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        <style>{`
          .contact-grid { grid-template-columns: 1fr; }
          @media (min-width: 768px) { .contact-grid { grid-template-columns: 3fr 2fr; } }
          .form-grid { grid-template-columns: 1fr; }
          .form-full { grid-column: 1 / -1; }
          @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
          input:focus, select:focus, textarea:focus { border-color: var(--color-gold) !important; }
        `}</style>
      </section>
    </>
  );
}
