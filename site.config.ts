export const siteConfig = {
  business: {
    name: "Blackline Auto Detail",
    tagline: "Luxury Mobile Auto Detailing, Without Compromise.",
    eyebrow: "PREMIUM PAINT CARE & PROTECTION",
    description:
      "Blackline Auto Detail delivers high-end mobile detailing for luxury, exotic, and daily vehicles. From paint correction to ceramic coating, we provide flawless finishes with white-glove service.",
    owner: {
      name: "Marco Delaney",
      title: "Founder & Master Detailer",
      bio: "Marco Delaney built Blackline Auto Detail to raise the standard for vehicle appearance care. With years of hands-on correction and coating experience, Marco combines technical precision with a design-forward eye for finish quality. Every vehicle is evaluated under proper lighting, corrected methodically, and protected with professional products chosen for long-term performance.",
      certifications: ["IDA Certified Detailer", "System X Certified Installer", "Gtechniq Accredited"],
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200",
    },
  },
  serviceAreas: [
    "Miami",
    "Fort Lauderdale",
    "Boca Raton",
    "West Palm Beach",
    "Coral Gables",
    "Aventura",
    "Naples",
    "Orlando",
    "Tampa",
  ],
  contact: {
    phone: "(305) 555-0148",
    phoneRaw: "+13055550148",
    email: "bookings@blacklineautodetail.com",
    address: "South Florida Studio + Mobile Concierge Service",
    cta: "Call For Consultation",
  },
  services: [
    {
      name: "Maintenance Detail",
      summary:
        "A scheduled maintenance package that keeps paint, wheels, glass, and interior surfaces looking consistently fresh between major correction visits.",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600",
      duration: "2-3 Hours",
      price: "$225",
    },
    {
      name: "Paint Correction",
      summary:
        "Multi-stage machine polishing to remove swirl marks, oxidation, and haze while restoring depth, gloss, and clarity to your vehicle's finish.",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf3442d0b?w=1600",
      duration: "1-2 Days",
      price: "$750",
    },
    {
      name: "Ceramic Coating",
      summary:
        "Professional ceramic protection that enhances gloss, improves washability, and shields surfaces against UV damage, water spotting, and contaminants.",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600",
      duration: "1-2 Days",
      price: "$1,100",
    },
    {
      name: "Interior Revival",
      summary:
        "Comprehensive interior steam cleaning, leather conditioning, stain treatment, and trim restoration for a like-new cabin experience.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600",
      duration: "3-4 Hours",
      price: "$295",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
