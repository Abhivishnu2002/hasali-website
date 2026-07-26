import { CREDENTIALS, LOCATIONS } from "@/content/site";
import StarRating from "@/components/ui/StarRating";

/*
 * Mobile (<640px): horizontal scroll-snap strip — badges stay full-size,
 * no wrapping, right-edge fade hints overflow.
 * Desktop (≥640px): inline horizontal row (current layout).
 */

interface BadgeItem {
  id: string;
  content: React.ReactNode;
}

export default function TrustStrip() {
  const badges: BadgeItem[] = [
    ...CREDENTIALS.map((c) => ({
      id: c.id,
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <span
            style={{
              width: "0.375rem",
              height: "0.375rem",
              borderRadius: "50%",
              backgroundColor: "var(--color-brass-light)",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-brass-light)",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              {c.label}
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                color: "rgba(247,243,236,0.55)",
                letterSpacing: "0.04em",
                lineHeight: 1.4,
                whiteSpace: "nowrap",
              }}
            >
              {c.description}
            </div>
          </div>
        </div>
      ),
    })),
    ...LOCATIONS.map((loc) => ({
      id: `loc-${loc.id}`,
      content: (
        <div>
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(247,243,236,0.5)",
              marginBottom: "0.2rem",
              whiteSpace: "nowrap",
            }}
          >
            {loc.shortName}
          </div>
          <StarRating rating={loc.rating} reviewCount={loc.reviewCount} size={12} />
        </div>
      ),
    })),
    {
      id: "locations-pill",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: "0.375rem",
              height: "0.375rem",
              borderRadius: "50%",
              backgroundColor: "var(--color-sage-light)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-sage-light)",
              whiteSpace: "nowrap",
            }}
          >
            2 Locations in Kochi
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      aria-label="Trust and credentials"
      style={{
        backgroundColor: "var(--color-espresso)",
        color: "var(--color-ivory)",
        paddingBlock: "1.25rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Mobile: scroll-snap strip */}
      <div className="trust-mobile">
        <div
          className="snap-x-scroll"
          style={{
            paddingInline: "var(--section-pad-x)",
            gap: "2rem",
          }}
        >
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="snap-item"
              style={{ paddingBlock: "0.25rem" }}
            >
              {badge.content}
            </div>
          ))}
          {/* Spacer so last item isn't flush against the fade */}
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
        </div>
        {/* Right-edge fade hint */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "3.5rem",
            background: "linear-gradient(to left, var(--color-espresso) 20%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Desktop: inline row */}
      <div
        className="trust-desktop"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "0 2.5rem",
          paddingInline: "var(--section-pad-x)",
        }}
      >
        {badges.map((badge, i) => (
          <div
            key={badge.id}
            style={{
              paddingBlock: "0.5rem",
              borderRight:
                i < badges.length - 1
                  ? "1px solid rgba(247,243,236,0.12)"
                  : "none",
              paddingRight: i < badges.length - 1 ? "2.5rem" : 0,
            }}
          >
            {badge.content}
          </div>
        ))}
      </div>

      <style>{`
        .trust-mobile  { display: block; }
        .trust-desktop { display: none; }
        @media (min-width: 640px) {
          .trust-mobile  { display: none; }
          .trust-desktop { display: flex; }
        }
      `}</style>
    </section>
  );
}
