// ─────────────────────────────────────────────────────────────────────────────
// content/site.ts
// Single source of truth for all Hasali brand facts.
// Edit this file to update contact info, locations, credentials, and links.
// ─────────────────────────────────────────────────────────────────────────────

export const PHONE_RAW = "919995366858"; // E.164 without +
export const PHONE_DISPLAY = "+91 99953 66858";
export const TEL_HREF = `tel:+${PHONE_RAW}`;
export const WA_HREF = `https://wa.me/${PHONE_RAW}`;

export const INSTAGRAM_HANDLE = "hasali_cosmetology_clinic";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const SITE_URL = "https://hasaliclinic.com"; // TODO: replace with live domain when confirmed

export const BRAND = {
  name: "Hasali",
  fullName: "Hasali Cosmetology Clinic & Salon",
  tagline: "Where clinical skin science meets artisan beauty",
  positioning:
    "Kochi's only unisex cosmetology clinic and beauty salon — medical-grade skin treatments and premium salon services under one roof.",
  established: 2023,
} as const;

export const CREDENTIALS = [
  {
    id: "iso",
    label: "ISO 9001:2015",
    description: "Quality Management Certified",
  },
  {
    id: "award",
    label: "Business Excellence Award 2023",
    description: "Best Innovative Cosmetology Clinic in Kerala",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Locations
// ASSUMPTION: Operating hours are 10 AM – 8 PM, 7 days a week for both
// branches. Please confirm with the client whether either branch is closed
// on any particular day, and update the `hours` field and the
// `openingHoursSpecification` in the JSON-LD blocks in app/layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────
export const LOCATIONS = [
  {
    id: "kadavanthara",
    name: "Kadavanthara — Flagship",
    shortName: "Kadavanthara",
    address: {
      street: "Salim Rajan Road, Gandhi Nagar",
      area: "Kadavanthara",
      city: "Kochi",
      state: "Kerala",
      pincode: "682020",
    },
    addressFormatted:
      "Salim Rajan Road, Gandhi Nagar, Kadavanthara, Kochi, Kerala 682020",
    rating: 4.4,
    reviewCount: 375,
    // ASSUMPTION: 10 AM – 8 PM daily — confirm with client
    hours: "10:00 AM – 8:00 PM, daily",
    // Google Maps embed URL (iframe src)
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0285!2d76.2999!3d9.9660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087b4a4e4e4e4e%3A0x0!2sGandhi+Nagar%2C+Kadavanthara%2C+Kochi%2C+Kerala+682020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    // Google Maps search link for "Get Directions"
    mapsUrl:
      "https://maps.google.com/?q=Hasali+Cosmetology+Clinic+Gandhi+Nagar+Kadavanthara+Kochi+Kerala+682020",
    coordinates: { lat: 9.966, lng: 76.2999 },
    // JSON-LD openingHoursSpecification
    // ASSUMPTION: open all 7 days — confirm with client
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
  },
  {
    id: "kalamassery",
    name: "Kalamassery — Branch",
    shortName: "Kalamassery",
    address: {
      street: "Near Sree Ganapathi Temple, Eloor Road",
      area: "Kalamassery",
      city: "Ernakulam",
      state: "Kerala",
      pincode: "683104",
    },
    addressFormatted:
      "Near Sree Ganapathi Temple, Eloor Road, Kalamassery, Ernakulam, Kerala 683104",
    rating: 4.3,
    reviewCount: 122,
    // ASSUMPTION: 10 AM – 8 PM daily — confirm with client
    hours: "10:00 AM – 8:00 PM, daily",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.0!2d76.3430!3d10.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0808888888888%3A0x0!2sEloor+Road%2C+Kalamassery%2C+Ernakulam%2C+Kerala+683104!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
    mapsUrl:
      "https://maps.google.com/?q=Hasali+Cosmetology+Clinic+Kalamassery+Ernakulam+Kerala+683104",
    coordinates: { lat: 10.0543, lng: 76.343 },
    // ASSUMPTION: open all 7 days — confirm with client
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
  },
] as const;

export type Location = (typeof LOCATIONS)[number];

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
] as const;
