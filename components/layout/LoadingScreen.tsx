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
            backgroundColor: "#0a0a0a",
            color: "#ffffff",
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
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197,160,89,0.18) 0%, rgba(10,10,10,0) 70%)",
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
            <div style={{ position: "relative", width: 140, height: 48 }}>
              <Image
                src="/images/logo-light.png"
                alt="Hasali Cosmetology & Salon"
                fill
                sizes="140px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Subtitle / Tagline */}
            <div
              style={{
                fontFamily: "var(--font-switzer), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c5a059",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Cosmetology & Salon
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
                  height: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Inner Fill */}
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #bf953f, #fcf6ba, #b38728, #fbf5b7)",
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
                  fontFamily: "var(--font-switzer), monospace",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <span>LOADING</span>
                <span style={{ color: "#c5a059", fontWeight: 600 }}>{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
