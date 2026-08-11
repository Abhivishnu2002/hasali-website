"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            document.body.style.overflow = "";
          }, 300);
          return 100;
        }
        // Smooth logarithmic step increments
        const diff = 100 - prev;
        const inc = Math.max(1, Math.floor(diff * 0.15 + Math.random() * 8));
        return Math.min(100, prev + inc);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "#fdfbf7",
            color: "var(--color-espresso)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            pointerEvents: "auto",
          }}
        >
          {/* Radial ambient gold background glow */}
          <div
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(253,251,247,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              zIndex: 2,
            }}
          >
            {/* Hasali Brand Logo */}
            <div style={{ position: "relative", width: 160, height: 50 }}>
              <Image
                src="/images/logo.png"
                alt="Hasali Cosmetology & Salon"
                fill
                sizes="160px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Subtitle / Tagline */}
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9a7b38",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Cosmetology Clinic & Salon
            </div>

            {/* Gold Progress Bar & Counter */}
            <div
              style={{
                width: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.625rem",
                marginTop: "1.5rem",
              }}
            >
              {/* Outer Track */}
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "rgba(197, 160, 89, 0.2)",
                  borderRadius: "3px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Inner Fill */}
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #bf953f, #d4af37, #aa771c)",
                    transition: "width 0.08s ease-out",
                    boxShadow: "0 0 10px rgba(197, 160, 89, 0.6)",
                  }}
                />
              </div>

              {/* Numerical percentage indicator */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-sans)",
                  color: "#9a7b38",
                }}
              >
                <span style={{ letterSpacing: "0.08em", fontWeight: 500 }}>HASALI</span>
                <span style={{ color: "#d4af37", fontWeight: 700 }}>{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
