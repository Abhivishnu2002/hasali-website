// ─────────────────────────────────────────────────────────────────────────────
// content/services.ts
// Typed service data — updated with client revision round (Aug 2026).
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
  subPoints?: string[]; // bullet sub-items shown beneath the description
  medicalGradeSpecial?: boolean; // flags "Medical Grade Special" badge on card
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
  // ── 1. Dermatology & Cosmetology Consultation ────────────────────────────
  {
    id: "dermatology-consultation",
    slug: "dermatology-cosmetology-consultation",
    name: "Dermatology & Cosmetology Consultation",
    label: "Dermatology",
    description:
      "Begin your skin journey with a medically-led consultation. Our trained dermatologists assess your skin condition, history, and goals to build a personalised clinical roadmap — from diagnosis to long-term care.",
    services: [
      {
        id: "medical-grade-consultation",
        name: "Medical Grade Dermatology & Cosmetology Consultation",
        featuredTag: "Start Here",
        description:
          "A comprehensive in-clinic evaluation by our dermatology-trained specialists covering skin type analysis, condition diagnosis, and treatment mapping.",
        subPoints: [
          "Full skin history & lifestyle assessment",
          "Advanced skin analysis & diagnosis",
          "Treatment pathway recommendation",
          "Medical-grade product guidance",
        ],
      },
      {
        id: "personalised-skin-plan",
        name: "Personalized Skin Plan",
        description:
          "A structured, evolving skin protocol created post-consultation — combining in-clinic treatments, home-care prescriptions, and follow-up milestones tailored specifically to your skin's needs.",
        subPoints: [
          "Customised in-clinic treatment schedule",
          "Prescribed home-care routine",
          "Progress tracking & plan adjustments",
        ],
      },
    ],
  },

  // ── 2. Hair & Trichology ─────────────────────────────────────────────────
  {
    id: "hair-trichology",
    slug: "hair-trichology",
    name: "Hair & Trichology",
    label: "Hair & Trichology",
    description:
      "Clinically driven hair care — from trichologist-led scalp diagnostics and targeted medical treatments to advanced keratin rituals. Every protocol is designed to restore your hair's strength, density, and vitality.",
    services: [
      {
        id: "trichologist-consultation",
        name: "Trichologist Consultation",
        featuredTag: "Clinical Diagnosis",
        description:
          "A structured scalp and hair diagnostic session with our in-house trichologist to identify the root cause of your hair concerns and prescribe a targeted treatment plan.",
        subPoints: [
          "Hair Fall — cause identification & correction plan",
          "Hair Thinning — density analysis & restoration protocol",
          "Hair Breakage — structural damage assessment & repair roadmap",
        ],
      },
      {
        id: "keratin-nanoplasty",
        name: "Keratin Nanoplasty",
        featuredTag: "Advanced Treatment",
        description:
          "A next-generation hair smoothening and reconstruction treatment using nano-sized keratin molecules that penetrate deep into the hair shaft — delivering superior results compared to traditional smoothening. Chemical-free formula safe for all hair types.",
      },
      {
        id: "keratin-botox-hair",
        name: "Keratin Botox",
        featuredTag: "Advanced Treatment",
        description:
          "An intensive hair rejuvenation treatment that fills in gaps in the hair fiber with proteins, amino acids, and vitamins — restoring elasticity, reducing frizz, and imparting deep gloss. Distinct from regular keratin smoothening; no harsh chemicals.",
      },
      {
        id: "medical-grade-hair-treatment",
        name: "Medical Grade Hair Treatment",
        description:
          "A comprehensive clinical hair restoration protocol combining trichology-guided therapy, medical-grade actives, and scalp revitalisation techniques to address advanced hair health concerns.",
        subPoints: [
          "Scalp microbiome restoration",
          "Clinical-grade hair fibre strengthening",
          "Dermatologist-supervised treatment plan",
        ],
      },
    ],
  },

  // ── 3. IV & Wellness Therapy ─────────────────────────────────────────────
  {
    id: "iv-wellness",
    slug: "iv-wellness-therapy",
    name: "IV & Wellness Therapy",
    label: "IV & Wellness",
    description:
      "Systemic wellness treatments administered intravenously for deep cellular-level results — from brightening and detoxification to holistic skin restoration. Experience the gold standard of inside-out beauty.",
    services: [
      {
        id: "glutathione-iv-therapy",
        name: "Glutathione & IV Therapy",
        featuredTag: "Clinical Special",
        description:
          "Medical-grade intravenous glutathione infusions that work at the cellular level to brighten skin, reduce oxidative stress, and deliver a luminous, even-toned complexion from the inside out.",
        subPoints: [
          "High-dose antioxidant infusion",
          "Visible brightening from Session 1",
          "Detoxification & immune support",
          "Personalised dosage protocol",
        ],
      },
      {
        id: "complete-skin-restoration",
        name: "Complete Skin Restoration Program",
        description:
          "A curated multi-modal program combining IV therapy, medical peels, hydra facials, and clinical skin boosters for a full-spectrum skin renewal experience — ideal for dull, damaged, or stressed skin.",
        subPoints: [
          "IV Glutathione & vitamin infusion",
          "Medical peels & hydrafacial sessions",
          "Carbon glow & LED therapy",
          "Customised home-care protocol",
        ],
      },
    ],
  },

  // ── 4. Advanced Skin Treatments ──────────────────────────────────────────
  {
    id: "advanced-skin",
    slug: "advanced-skin-treatments",
    name: "Advanced Skin Treatments",
    label: "Advanced Skin",
    description:
      "Cutting-edge clinical procedures for targeted skin transformation — addressing everything from regenerative therapy and pigmentation to scarring, pore refinement, and skin-smoothing injectables.",
    services: [
      {
        id: "prp-gfc-exosome",
        name: "PRP, GFC & Exosome Therapy",
        featuredTag: "Regenerative",
        description:
          "Harnessing the power of your body's own growth factors alongside exosome technology to stimulate collagen, accelerate healing, and achieve deep skin rejuvenation — for face, scalp, and body.",
        subPoints: [
          "PRP (Platelet-Rich Plasma) — collagen stimulation & glow",
          "GFC (Growth Factor Concentrate) — advanced tissue repair",
          "Exosome Therapy — cellular regeneration & anti-aging",
        ],
      },
      {
        id: "medical-peels-anti-acne",
        name: "Medical Peels & Anti-Acne Protocol",
        description:
          "Targeted clinical peels and corrective active serums addressing active acne, hyperpigmentation, and texture irregularities — customised to your skin type and concern severity.",
        subPoints: [
          "Superficial to deep chemical peels",
          "Anti-acne actives & sebum control",
          "Post-peel recovery & home care",
        ],
      },
      {
        id: "scarring-melasma-pores",
        name: "Scarring, Melasma & Open Pores Treatment",
        description:
          "A clinically-designed corrective program targeting three of the most common — and most stubborn — skin concerns. Protocols are tailored per diagnosis and skin type.",
        subPoints: [
          "Scarring — post-acne, surgical & trauma scar revision",
          "Melasma — hormonal pigmentation management protocol",
          "Open Pores — pore-tightening & texture refinement",
        ],
      },
      {
        id: "brazilian-botox-skin",
        name: "Brazilian Botox",
        description:
          "A premium skin-smoothing treatment that uses a botox-infused blend to reduce fine lines, tighten pores, and deliver a glass-like skin finish — with zero downtime and long-lasting results.",
        subPoints: [
          "Fine line & wrinkle softening",
          "Pore minimisation & skin tightening",
          "Luminous, glass-skin finish",
          "No downtime — immediate results",
        ],
      },
      {
        id: "oxygeneo",
        name: "Oxygeneo",
        medicalGradeSpecial: true,
        description:
          "A Medical Grade Special facial that uses OxyGeneo technology to simultaneously exfoliate, oxygenate, and infuse the skin with active nutrients — delivering an instant glow with zero irritation.",
      },
      {
        id: "carbon-peel",
        name: "Carbon Peel",
        medicalGradeSpecial: true,
        description:
          "A Medical Grade Special laser facial that uses a carbon lotion and Q-switched laser to deeply cleanse pores, reduce oiliness, even skin tone, and deliver a radiant, porcelain-smooth finish.",
      },
    ],
  },

  // ── 5. Skin & Cosmetology (existing — updated) ──────────────────────────
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
        id: "anti-acne-peels-skin",
        name: "Medical Peels & Anti-Acne Protocol",
        description:
          "Targeted clinical peels and corrective active serums addressing active acne, hyperpigmentation, and texture irregularities.",
      },
    ],
  },

  // ── 6. Hair (existing — updated) ─────────────────────────────────────────
  {
    id: "hair",
    slug: "hair",
    name: "Hair",
    label: "Hair",
    description:
      "From trichology-led scalp consultations and medical-grade hair treatments to Keratin Nanoplasty, Keratin Botox, and premium smoothening rituals — our hair services restore strength, shine, and vitality.",
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

  // ── 7. Nails (existing — unchanged) ──────────────────────────────────────
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
          "Freehand and precision nail art in any style — minimal, floral, geometric, or intricate occasion designs.",
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
