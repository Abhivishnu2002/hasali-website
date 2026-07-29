// ─────────────────────────────────────────────────────────────────────────────
// content/services.ts
// Typed service data — updated with authentic Hasali brochure treatments & packages.
// All service CTAs point to WhatsApp booking.
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
  inclusions?: string[];
  featuredTag?: string;
  image?: string;
};

export type SignaturePackage = {
  id: string;
  title: string;
  subtitle: string;
  category: "skin" | "hair";
  duration?: string;
  description: string;
  inclusions: string[];
  highlights: string[];
  image: string;
  whatsappMsg: string;
};

export const SIGNATURE_PACKAGES: SignaturePackage[] = [
  {
    id: "glass-skin-program",
    title: "Celebrity Glass Skin Program",
    subtitle: "30 Days of Luxury. A Lifetime of Glow.",
    category: "skin",
    duration: "30-Day Rejuvenation Protocol",
    description:
      "Our premier 30-day intensive clinical skin transformation designed for deep hydration, mirror-like clarity, and instant radiance.",
    inclusions: [
      "Glass Skin Facial (Instant Glow & Deep Hydration)",
      "Medical Peel (Clear, Smooth & Even-Toned Skin)",
      "Hydrafacial (Deep Cleanse, Detox & Rejuvenate)",
      "Oxygen Therapy (Boosts Radiance & Skin Health)",
      "Carbon Glow Treatment (Clear Pores & Brighten)",
      "LED Therapy (Heal, Calm & Glow)",
      "Skin Brightening Mask (Illuminate & Revive)",
      "Doctor Skin Consultation (Expert Personalized Care)",
      "Customized Home Care Plan (Daily Results Protocol)",
    ],
    highlights: ["Visible Results", "Advanced Technology", "Dermatologically Safe", "Customized Care"],
    image: "/images/glass_skin_treatment.jpg",
    whatsappMsg: "Hi Hasali, I would like to book a consultation for the Celebrity Glass Skin Program.",
  },
  {
    id: "brazilian-hair-botox",
    title: "Brazilian Botox Hair Treatment",
    subtitle: "Stronger. Smoother. Shinier. Mirror-like Shine.",
    category: "hair",
    duration: "Visible Results After Just 1 Session",
    description:
      "A revolutionary hair repair and smoothing treatment that restores damaged hair fibers, eliminates stubborn frizz, and delivers intense shine.",
    inclusions: [
      "Deep Hair Fiber Nourishment & Reconstructive Care",
      "Frizz Elimination & Mirror-Like Shine Boost",
      "Customized for Short, Medium & Long Hair",
      "Chemical-Balanced Safe Formula for All Hair Types",
    ],
    highlights: ["1 Session Transformation", "Deep Repair", "Frizz Elimination", "Long-Lasting"],
    image: "/images/brazilian_botox_hair.jpg",
    whatsappMsg: "Hi Hasali, I would like to enquire about the Brazilian Botox Hair Treatment.",
  },
  {
    id: "complete-skin-transformation",
    title: "Complete Skin Transformation Package",
    subtitle: "Full-Spectrum Clinical Radiance & Renewal",
    category: "skin",
    duration: "Multi-Session Complete Program",
    description:
      "India's most comprehensive clinical skin renewal package combining advanced IV glutathione therapy, specialized peels, hydra facials, and carbon treatments.",
    inclusions: [
      "10 Sessions Glutathione IV Treatment",
      "3 Sessions Glutathione Peeling",
      "Full Skin Brightening Program",
      "Deep Hydration & Skin Renewal",
      "3 Sessions Hydra Facial",
      "2 Sessions Carbon Facial",
      "2 Sessions Pedicure & Manicure",
      "Skin Radiance & Glow Boost",
    ],
    highlights: ["Glutathione Therapy", "Hydra & Carbon Facials", "Total Skin Brightening", "Hand & Foot Pampering"],
    image: "/images/skin_transformation_package.jpg",
    whatsappMsg: "Hi Hasali, I would like to know more about the Complete Skin Transformation Package.",
  },
  {
    id: "keratresse-smoothening",
    title: "Keratresse Advanced Hair Smoothening",
    subtitle: "Smooth. Strong. Stunning. Frizz Control.",
    category: "hair",
    duration: "Long-Lasting Frizz Control",
    description:
      "Advanced hair smoothening system providing silky smoothness, long-lasting manageable texture, and protection against humidity and heat styling.",
    inclusions: [
      "Keratresse Advanced Hair Smoothening System",
      "Smoothening & Keratin Classic Treatment",
      "Heat & Damage Styling Shield Protection",
      "Nourishing Silky Soft Finish",
    ],
    highlights: ["Silky Smoothness", "Heat Protection", "Long-Lasting Frizz Control", "Unisex Care"],
    image: "/images/keratresse_hair_treatment.jpg",
    whatsappMsg: "Hi Hasali, I would like to book the Keratresse Advanced Hair Smoothening treatment.",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "skin",
    slug: "skin-cosmetology",
    name: "Skin & Cosmetology",
    label: "Skin",
    description:
      "Medical-grade skin treatments delivered by trained cosmetology professionals. From advanced facials and glutathione therapies to targeted clinical peels, every protocol is tailored to your skin's specific needs.",
    services: [
      {
        id: "celebrity-glass-skin",
        name: "Celebrity Glass Skin Program (30 Days)",
        featuredTag: "Signature Program",
        description:
          "30-day luxury clinical transformation combining Hydrafacial, Medical Peels, Oxygen Therapy, Carbon Glow, and LED Therapy for glass-like clarity.",
      },
      {
        id: "glutathione-transformation",
        name: "Glutathione Brightening & IV Therapy",
        featuredTag: "Clinical Special",
        description:
          "Complete skin brightening program featuring Glutathione IV sessions, specialized peels, and deep hydration for luminous skin radiance.",
      },
      {
        id: "hydrafacial-carbon",
        name: "Hydra Facial & Carbon Glow Therapy",
        description:
          "Deep cleansing, pore detox, and carbon laser glow treatments that clear impurities and restore youthful skin bounce.",
      },
      {
        id: "anti-acne-peels",
        name: "Medical Peels & Anti-Acne Protocol",
        description:
          "Targeted clinical peels and corrective active serums addressing active acne, hyperpigmentation, and texture irregularities.",
      },
    ],
  },
  {
    id: "hair",
    slug: "hair",
    name: "Hair",
    label: "Hair",
    description:
      "From Brazilian Botox and Keratresse hair smoothening to precision cuts, our hair services blend technical expertise with premium restorative formulas.",
    services: [
      {
        id: "brazilian-botox",
        name: "Brazilian Botox Hair Treatment",
        featuredTag: "Most Popular",
        description:
          "Revolutionary fiber-repairing treatment delivering intense smoothness, mirror-like shine, and deep frizz elimination after just 1 session.",
      },
      {
        id: "keratresse-system",
        name: "Keratresse Advanced Hair Smoothening",
        featuredTag: "Advanced System",
        description:
          "State-of-the-art smoothening system providing long-lasting frizz control, silky touch, and thermal damage protection.",
      },
      {
        id: "keratin-classic",
        name: "Smoothening & Keratin Classic",
        description:
          "Essential keratin restorative treatment that leaves hair sleek, manageable, soft, and glossy for months.",
      },
      {
        id: "hair-styling-care",
        name: "Styling, Conditioning & Extensions",
        description:
          "Precision cuts, deep conditioners, scalp detox treatments, and seamless professional hair extensions.",
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
        name: "Bridal Makeup & Grooming",
        description:
          "Full bridal & groom packages — traditional to contemporary HD looks designed to remain radiant through long ceremonies.",
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
      "Precision nail art, manicures, pedicures, and professional extensions that combine technique with creativity — from understated elegance to bold statements.",
    services: [
      {
        id: "nail-art",
        name: "Custom Nail Art & Gel Polish",
        description:
          "Freehand and precision nail art in any style — minimal, floral, geometric, or intricate bridal designs.",
      },
      {
        id: "acrylic-extensions",
        name: "Acrylic Extensions & Luxury Pedicure",
        description:
          "Long-lasting nail extensions shaped to perfection paired with relaxing, skin-softening manicures and pedicures.",
      },
    ],
  },
];
