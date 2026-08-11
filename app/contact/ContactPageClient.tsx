"use client";

import { useState } from "react";
import { MessageCircle, Phone, CheckCircle, AlertCircle, ExternalLink, MapPin } from "lucide-react";
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
    backgroundColor: "#ffffff",
    border: "1px solid rgba(197, 160, 89, 0.35)",
    color: "var(--color-espresso)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9375rem",
    outline: "none",
    borderRadius: "8px",
    appearance: "none" as const,
    boxSizing: "border-box" as const,
    minHeight: "52px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-sans)",
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
          backgroundColor: "#fdfbf7",
          color: "var(--color-espresso)",
          borderBottom: "1px solid rgba(197, 160, 89, 0.25)",
        }}
      >
        <div className="container">
          <SectionReveal>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>
              Get in Touch
            </span>
            <div className="rule-gold" />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--color-espresso)",
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
                color: "var(--color-espresso-soft)",
                maxWidth: "44ch",
              }}
            >
              The quickest way to reach us is WhatsApp. You can also call, or send us a message below.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Quick CTAs */}
      <section style={{ backgroundColor: "#faf5ea", paddingBlock: "2rem", borderBottom: "1px solid rgba(197, 160, 89, 0.2)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-gold">
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
      <section className="section-pad" style={{ backgroundColor: "#fdfbf7" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

            {/* Form */}
            <SectionReveal>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "var(--color-espresso)", marginBottom: "2rem" }}>
                Send us a message
              </h2>

              {formState === "success" ? (
                <div style={{ padding: "2rem", border: "1px solid var(--color-gold-dark)", backgroundColor: "#fdfaf2", borderRadius: "12px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: "var(--color-gold-dark)", flexShrink: 0, marginTop: "0.1rem" }} />
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-espresso)", marginBottom: "0.4rem" }}>Message received — thank you!</div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-espresso-soft)", margin: 0 }}>
                      We'll get back to you shortly. For the fastest response, reach us on{" "}
                      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold-dark)", fontWeight: 600 }}>WhatsApp</a>.
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
                      <label htmlFor="contact-message" style={labelStyle}>Message / Treatment Details</label>
                      <textarea id="contact-message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your goals, preferred dates, or specific questions..." style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} />
                    </div>
                  </div>

                  {formState === "error" && (
                    <div style={{ marginTop: "1rem", padding: "0.875rem 1rem", backgroundColor: "#fff5f5", border: "1px solid #feb2b2", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#c53030" }}>
                      <AlertCircle size={16} /> Something went wrong. Please try again or book directly on WhatsApp.
                    </div>
                  )}

                  <button type="submit" disabled={formState === "submitting"} className="btn-gold" style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}>
                    {formState === "submitting" ? "Sending Enquiry..." : "Send Message"}
                  </button>
                </form>
              )}
            </SectionReveal>

            {/* Location details grid */}
            <SectionReveal delay={0.2}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "var(--color-espresso)", marginBottom: "2rem" }}>
                Our Locations in Kochi
              </h2>

              <div style={{ display: "grid", gap: "2rem" }}>
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} style={{ backgroundColor: "#ffffff", padding: "1.75rem", borderRadius: "16px", border: "1px solid rgba(197, 160, 89, 0.3)", boxShadow: "0 8px 24px rgba(197, 160, 89, 0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <MapPin size={20} style={{ color: "#9a7b38", flexShrink: 0 }} />
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-espresso)", margin: 0 }}>
                        {loc.name}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-espresso-soft)", marginBottom: "1rem" }}>
                      {loc.addressFormatted}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                        <ExternalLink size={14} /> Get Directions
                      </a>
                      <a href={TEL_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                        <Phone size={14} /> Call {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .form-full {
            grid-column: span 2;
          }
        }
      `}</style>
    </>
  );
}
