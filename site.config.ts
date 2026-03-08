export const siteConfig = {
  business: {
    name: "Elite Detailing Mobile Repair",
    tagline: "Command the Elements. Land & Sea.",
    eyebrow: "FLORIDA'S HEAVY-DUTY RESTORATION EXPERTS",
    description:
      "Elite Detailing Mobile Repair delivers master-level surface restoration for exotics, marine vessels, luxury RVs, and heavy-duty fleets across Florida.",
    owner: {
      name: "Javier Morales",
      title: "Founder & Master Detailer",
      bio: "Javier Morales built Elite Detailing Mobile Repair around one idea: every vehicle deserves coach-built attention. Trained in advanced correction methodologies and trusted by discerning collectors, Javier combines paint science, lighting analysis, and tactile refinement to deliver mirror-grade finishes that hold up in Florida's climate. His process is meticulous, discreet, and engineered for owners who expect uncompromising excellence.",
      certifications: ["Ceramic Pro Certified Installer", "IDA Skills Validated"],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    },
  },
  serviceAreas: [
    "Miami",
    "Fort Lauderdale",
    "Boca Raton",
    "West Palm Beach",
    "Naples",
    "Sarasota",
    "Orlando",
    "Tampa",
  ],
  contact: {
    phone: "(386) 340-5989",
    email: "elite@elitedetailingmobile.com",
    address: "Florida Mobile Dockside + On-Site Service",
    cta: "Call (386) 340-5989",
  },
  socials: {
    instagram: "https://instagram.com/elitedetailingmobile",
    facebook: "https://facebook.com/elitedetailingmobile",
    youtube: "https://youtube.com/@elitedetailingmobile",
    tiktok: "https://tiktok.com/@elitedetailingmobile",
  },
  services: [
    {
      name: "Maintenance Detail",
      summary:
        "A disciplined upkeep plan that protects gloss, clarity, and cabin integrity between major correction cycles.",
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1800",
    },
    {
      name: "Paint Correction",
      summary:
        "Multi-stage machine correction to eliminate haze, swirls, and micro-marring while restoring depth and true color.",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1800",
    },
    {
      name: "Ceramic Coating",
      summary:
        "Professional-grade ceramic systems for unrivaled gloss, hydrophobic behavior, and long-term surface defense.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
