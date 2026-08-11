"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, MapPin, Hash, FileText, CheckCircle2 } from "lucide-react";
import { PHONE_RAW } from "@/content/site";
import { SERVICE_CATEGORIES } from "@/content/services";

interface BookingModalContextType {
  isOpen: boolean;
  selectedService: string;
  openBookingModal: (serviceName?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  selectedService: "",
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export const useBookingModal = () => useContext(BookingModalContext);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBookingModal = useCallback((serviceName?: string) => {
    setSelectedService(serviceName || "");
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBookingModal]);

  return (
    <BookingModalContext.Provider
      value={{ isOpen, selectedService, openBookingModal, closeBookingModal }}
    >
      {children}
      <BookingModalDialog
        isOpen={isOpen}
        initialService={selectedService}
        onClose={closeBookingModal}
      />
    </BookingModalContext.Provider>
  );
}

function BookingModalDialog({
  isOpen,
  initialService,
  onClose,
}: {
  isOpen: boolean;
  initialService: string;
  onClose: () => void;
}) {
  const todayISO = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    service: initialService || "",
    fullName: "",
    age: "",
    place: "",
    appointmentDate: "",
    notes: "",
  });

  const [validated, setValidated] = useState(false);

  // Sync initialService whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        service: initialService || "Medical Grade Dermatology & Cosmetology Consultation",
        fullName: "",
        age: "",
        place: "",
        appointmentDate: "",
        notes: "",
      });
      setValidated(false);
    }
  }, [isOpen, initialService]);

  const isBrazilianBotox =
    formData.service.toLowerCase().includes("brazilian botox") ||
    formData.service.toLowerCase().includes("brazilian-botox");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    // Format Appointment Date for readability (e.g., "15 Aug 2026")
    let formattedDate = formData.appointmentDate;
    if (formData.appointmentDate) {
      const d = new Date(formData.appointmentDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      }
    }

    // Construct WhatsApp message
    let messageLines = [
      `*Appointment Request — Hasali Cosmetology Clinic*`,
      ``,
      `*Service:* ${formData.service}`,
      `*Full Name:* ${formData.fullName.trim()}`,
      `*Age:* ${formData.age}`,
      `*Place / Location:* ${formData.place.trim()}`,
      `*Preferred Date:* ${formattedDate}`,
    ];

    if (isBrazilianBotox && formData.notes.trim()) {
      messageLines.push(`*Brazilian Botox Details / Notes:* ${formData.notes.trim()}`);
    } else if (formData.notes.trim()) {
      messageLines.push(`*Notes:* ${formData.notes.trim()}`);
    }

    const messageText = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${PHONE_RAW}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  // Flatten all services for dropdown selection
  const allServices = SERVICE_CATEGORIES.flatMap((cat) => cat.services);

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-espresso)",
    marginBottom: "0.4rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(197, 160, 89, 0.4)",
    color: "var(--color-espresso)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9375rem",
    outline: "none",
    borderRadius: "8px",
    appearance: "none",
    boxSizing: "border-box",
    minHeight: "48px",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          aria-modal="true"
          role="dialog"
          aria-labelledby="booking-modal-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(24, 20, 16, 0.65)",
              backdropFilter: "blur(6px)",
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "540px",
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "#fdfbf7",
              borderRadius: "16px",
              boxShadow: "0 24px 48px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(197, 160, 89, 0.3)",
              padding: "clamp(1.5rem, 4vw, 2.25rem)",
              zIndex: 10000,
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(197, 160, 89, 0.12)",
                border: "none",
                color: "var(--color-espresso)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(197, 160, 89, 0.25)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(197, 160, 89, 0.12)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <X size={18} strokeWidth={2} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-dark)",
                  display: "block",
                  marginBottom: "0.35rem",
                }}
              >
                ✦ Book Consultation
              </span>
              <h2
                id="booking-modal-title"
                style={{
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  color: "var(--color-espresso)",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Book Your Appointment
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--color-espresso-soft)",
                  marginTop: "0.4rem",
                  marginBottom: 0,
                  lineHeight: 1.5,
                }}
              >
                Fill in your details to generate your pre-formatted WhatsApp booking request.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className={validated ? "was-validated" : ""}>
              <div style={{ display: "grid", gap: "1rem" }}>
                {/* Service Selection */}
                <div>
                  <label htmlFor="modal-service" style={labelStyle}>
                    Selected Treatment / Service *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, paddingRight: "2.5rem" }}
                      required
                    >
                      {SERVICE_CATEGORIES.map((cat) => (
                        <optgroup key={cat.id} label={cat.name}>
                          {cat.services.map((svc) => (
                            <option key={svc.id} value={svc.name}>
                              {svc.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <span
                      style={{
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "var(--color-gold-dark)",
                        fontSize: "0.8rem",
                      }}
                    >
                      ▼
                    </span>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="modal-fullname" style={labelStyle}>
                    Full Name *
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="modal-fullname"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      style={inputStyle}
                      autoComplete="name"
                    />
                  </div>
                </div>

                {/* Grid for Age & Place */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {/* Age */}
                  <div>
                    <label htmlFor="modal-age" style={labelStyle}>
                      Age *
                    </label>
                    <input
                      id="modal-age"
                      name="age"
                      type="number"
                      required
                      min={10}
                      max={120}
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 28"
                      style={inputStyle}
                    />
                  </div>

                  {/* Place / Location */}
                  <div>
                    <label htmlFor="modal-place" style={labelStyle}>
                      Place / Location *
                    </label>
                    <input
                      id="modal-place"
                      name="place"
                      type="text"
                      required
                      value={formData.place}
                      onChange={handleChange}
                      placeholder="e.g. Kadavanthara"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Appointment Date */}
                <div>
                  <label htmlFor="modal-date" style={labelStyle}>
                    Preferred Appointment Date *
                  </label>
                  <input
                    id="modal-date"
                    name="appointmentDate"
                    type="date"
                    required
                    min={todayISO}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: "light" }}
                  />
                </div>

                {/* Brazilian Botox Extra Field / General Notes */}
                {isBrazilianBotox ? (
                  <div
                    style={{
                      backgroundColor: "rgba(197, 160, 89, 0.08)",
                      border: "1px solid rgba(197, 160, 89, 0.35)",
                      borderRadius: "10px",
                      padding: "1rem",
                    }}
                  >
                    <label
                      htmlFor="modal-notes"
                      style={{
                        ...labelStyle,
                        color: "var(--color-gold-dark)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      ✦ Brazilian Botox Notes / Qualifying Info
                    </label>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-espresso-soft)",
                        lineHeight: 1.45,
                        margin: "0 0 0.5rem",
                      }}
                    >
                      Please describe your hair history, current condition (e.g. coloured, chemically treated), or specific concerns.
                    </p>
                    <textarea
                      id="modal-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Chemically treated 6 months ago, dry frizzy ends..."
                      style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="modal-notes" style={labelStyle}>
                      Additional Details / Notes (Optional)
                    </label>
                    <textarea
                      id="modal-notes"
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific questions or preferences..."
                      style={{ ...inputStyle, minHeight: "64px", resize: "vertical" }}
                    />
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "0.9rem 1.5rem",
                    fontSize: "0.875rem",
                    gap: "0.6rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="1.1rem"
                    height="1.1rem"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Confirm & Open WhatsApp
                </button>
              </div>

              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--color-espresso-soft)",
                  textAlign: "center",
                  marginTop: "0.75rem",
                  marginBottom: 0,
                  opacity: 0.75,
                }}
              >
                No payment or commitment required now. Opens WhatsApp to send your request.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
