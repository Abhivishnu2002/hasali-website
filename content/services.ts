// ─────────────────────────────────────────────────────────────────────────────
// content/services.ts
// Typed service data — edit descriptions here without touching component code.
// No prices are listed. All service CTAs point to WhatsApp booking.
// ─────────────────────────────────────────────────────────────────────────────

export type ServiceCategory = {
  id: string;
  slug: string;
  name: string;
  label: string; // short label for nav/tabs
  description: string;
  services: Service[];
};

export type Service = {
  id: string;
  name: string;
  description: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "skin",
    slug: "skin-cosmetology",
    name: "Skin & Cosmetology",
    label: "Skin",
    description:
      "Medical-grade skin treatments delivered by trained cosmetology professionals. From deep cleansing facials to targeted corrective programmes, every protocol is tailored to your skin's specific needs.",
    services: [
      {
        id: "facials",
        name: "Facials",
        description:
          "Customised facial treatments addressing hydration, brightness, anti-ageing, and purification — chosen to match your skin type and concern.",
      },
      {
        id: "anti-acne",
        name: "Anti-Acne Treatment",
        description:
          "A targeted clinical approach to active acne and post-acne marks, combining deep cleansing, corrective serums, and professional-grade actives.",
      },
      {
        id: "chemical-peel",
        name: "Chemical Peel Treatment",
        description:
          "Professionally administered acid peels for uneven skin tone, texture irregularities, and dullness — calibrated to your skin's tolerance.",
      },
      {
        id: "skin-care-programs",
        name: "Skin Care Programs",
        description:
          "Multi-session skin health programmes designed around long-term goals — hyperpigmentation, fine lines, pore refinement, and radiance.",
      },
    ],
  },
  {
    id: "hair",
    slug: "hair",
    name: "Hair",
    label: "Hair",
    description:
      "From everyday styling to transformative treatments, our hair services blend technical expertise with premium products to give you hair that looks and feels exceptional.",
    services: [
      {
        id: "hair-styling",
        name: "Hair Styling",
        description:
          "Cuts, blow-outs, and finishing services for all hair types — straight, wavy, curly, and coily. Unisex.",
      },
      {
        id: "hair-care",
        name: "Hair Care",
        description:
          "Deep conditioning, scalp treatments, and repair therapies to restore strength, shine, and health to damaged or stressed hair.",
      },
      {
        id: "hair-extensions",
        name: "Hair Extensions",
        description:
          "Professional-grade extensions for added length and volume, applied and blended seamlessly for a natural finish.",
      },
      {
        id: "keratin-treatment",
        name: "Keratin Treatment",
        description:
          "A smoothing and frizz-reduction treatment that leaves hair sleek, manageable, and glossy for months.",
      },
      {
        id: "nanoplastia",
        name: "Nanoplastia Treatment",
        description:
          "An advanced formaldehyde-free hair smoothing system that repairs, reconstructs, and straightens — with longer-lasting results than traditional keratin.",
      },
    ],
  },
  {
    id: "bridal",
    slug: "bridal-makeup",
    name: "Bridal & Makeup",
    label: "Bridal",
    description:
      "Flawless, photograph-ready looks for your most important moments. Our bridal and occasion makeup artists work with your features to create a look that's entirely yours.",
    services: [
      {
        id: "bridal-makeup",
        name: "Bridal Makeup",
        description:
          "Full bridal looks — from traditional to contemporary — crafted to last through ceremonies, portraits, and celebrations.",
      },
      {
        id: "party-makeup",
        name: "Party & Event Makeup",
        description:
          "Polished, camera-ready makeup for receptions, sangeets, corporate events, and special occasions.",
      },
    ],
  },
  {
    id: "nails",
    slug: "nails",
    name: "Nails",
    label: "Nails",
    description:
      "Precision nail art and professional extensions that combine technique with creativity — from understated elegance to bold statements.",
    services: [
      {
        id: "nail-art",
        name: "Nail Art",
        description:
          "Freehand and stamped nail art in any style — minimal, floral, geometric, or intricate festival designs.",
      },
      {
        id: "acrylic-extensions",
        name: "Acrylic & Permanent Nail Extensions",
        description:
          "Long-lasting nail extensions applied and shaped for a durable, natural-looking finish that complements your lifestyle.",
      },
    ],
  },
];
