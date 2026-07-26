import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hasali Cosmetology Clinic & Salon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#F7F3EC",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(124,139,111,0.06) 40px, rgba(124,139,111,0.06) 41px)",
          }}
        />

        {/* Sage accent block top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 320,
            height: 320,
            backgroundColor: "#7C8B6F",
            opacity: 0.12,
            borderRadius: "0 0 0 320px",
          }}
        />

        {/* Terracotta accent bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 200,
            height: 200,
            backgroundColor: "#B5623B",
            opacity: 0.15,
            borderRadius: "200px 0 0 0",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              backgroundColor: "#7C8B6F",
            }}
          />
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7C8B6F",
            }}
          >
            Kochi · Kerala
          </span>
        </div>

        {/* Main wordmark */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 400,
            color: "#231F1C",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Hasali
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: "#3A3430",
            letterSpacing: "0.01em",
            marginBottom: 40,
          }}
        >
          Cosmetology Clinic & Salon
        </div>

        {/* Bottom rule + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              backgroundColor: "#B5623B",
            }}
          />
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 15,
              color: "#7C8B6F",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ISO 9001:2015 · Business Excellence Award 2023
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
