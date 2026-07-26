import Image from "next/image";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/content/site";
import SectionReveal from "@/components/ui/SectionReveal";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Using real interior photos as a gallery teaser
const galleryImages = [
  { src: "/images/pic3.jpg", alt: "Hasali hair styling section — gold-frame mirrors and pendant lights" },
  { src: "/images/pic5.jpg", alt: "Hasali warm salon interior with tree installation and arched mirrors" },
  { src: "/images/pic7.jpg", alt: "Hasali waiting lounge — teal chairs, floral wallpaper, Look Good Feel Good" },
  { src: "/images/pic4.jpg", alt: "Hasali main salon floor — marble, chandeliers, and arched mirrors" },
];

export default function InstagramTeaser() {
  return (
    <section
      aria-labelledby="instagram-heading"
      style={{ backgroundColor: "var(--color-espresso)", overflow: "hidden" }}
    >
      {/* Photo grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
        className="ig-grid"
      >
        {galleryImages.map((img, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View on Instagram — ${img.alt}`}
            style={{
              display: "block",
              position: "relative",
              aspectRatio: "1",
              overflow: "hidden",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.6s ease, filter 0.4s ease",
                filter: "brightness(0.8)",
              }}
              className="ig-img"
            />
            {/* Hover overlay */}
            <div
              className="ig-overlay"
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(35,31,28,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <InstagramIcon size={24} />
            </div>
          </a>
        ))}
      </div>

      {/* CTA band */}
      <SectionReveal>
        <div
          className="section-pad"
          style={{
            textAlign: "center",
            paddingBlock: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--color-sage-light)" }}>
            Follow Along
          </span>
          <div className="rule-sage" style={{ margin: "1rem auto" }} />
          <h2
            id="instagram-heading"
            style={{
              fontFamily: "var(--font-fraunces, Georgia, serif)",
              fontWeight: 400,
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-ivory)",
              margin: "0 auto 1.5rem",
              maxWidth: "26ch",
            }}
          >
            See our work on Instagram
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-ivory"
            style={{ display: "inline-flex" }}
          >
            <InstagramIcon size={15} />
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </SectionReveal>

      <style>{`
        .ig-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 640px) {
          .ig-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .ig-img { transition: transform 0.6s ease, filter 0.4s ease !important; }
        a:hover .ig-img { transform: scale(1.05) !important; filter: brightness(0.65) !important; }
        a:hover .ig-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
