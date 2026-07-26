import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: number;
}

export default function StarRating({ rating, reviewCount, size = 14 }: StarRatingProps) {
  const filled = Math.floor(rating);
  const partial = rating - filled;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: "0.15rem" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ position: "relative", display: "inline-block" }}>
            {/* Background (empty) star */}
            <Star
              size={size}
              strokeWidth={1.5}
              style={{ color: "rgba(35,31,28,0.15)" }}
              fill="transparent"
            />
            {/* Filled overlay */}
            {i < filled && (
              <Star
                size={size}
                strokeWidth={0}
                fill="var(--color-brass)"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            )}
            {/* Partial star */}
            {i === filled && partial > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  overflow: "hidden",
                  width: `${partial * 100}%`,
                  display: "inline-block",
                }}
              >
                <Star size={size} strokeWidth={0} fill="var(--color-brass)" />
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Numeric rating */}
      <span
        style={{
          fontFamily: "var(--font-switzer, system-ui, sans-serif)",
          fontSize: size - 1,
          fontWeight: 600,
          color: "var(--color-espresso)",
        }}
      >
        {rating.toFixed(1)}
      </span>

      {/* Review count */}
      {reviewCount !== undefined && (
        <span
          style={{
            fontFamily: "var(--font-switzer, system-ui, sans-serif)",
            fontSize: size - 2,
            color: "rgba(35,31,28,0.5)",
          }}
        >
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
