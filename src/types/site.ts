// src/types/site.ts

export type NavItem = {
  label: string;
  href: string;
};

export type SiteLogo = {
  src: string;
  alt: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type FeatureItem = {
  title: string;
  text: string;
};

export type FeatureSection = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
};

export type SimplePage = {
  eyebrow: string;
  title: string;
  body: string;
};

export type RentalRate = {
  label: string;
  price: string;
};

export type RentalItem = {
  name: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export type FullRentalItem = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  rates: RentalRate[];
  details: string[];
  notes?: string[];
};

export type ActivityItem = {
  id: string;
  name: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  category?: string;
};

export type Review = {
  name: string;
  date: string;
  text: string;
};

export type QuoteFormField = {
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
};

export type Newsletter = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type SiteData = {
  businessName: string;
  shortName: string;
  category: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  facebookName: string;
  facebookBio: string;
  announcement: string;
  logo: SiteLogo;

  nav: NavItem[];

  hero: {
    kicker: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    slides: HeroSlide[];
  };

  trust: FeatureItem[];

  about: {
    eyebrow: string;
    title: string;
    body: string[];
  };

  features: FeatureSection[];

  greenBean: FeatureSection;

  newsletter?: Newsletter;

  termsPage: SimplePage;

  rentals: {
    eyebrow: string;
    title: string;
    intro: string;
    ctaLabel: string;
    href: string;
    items: RentalItem[];
  };

  rentalsPage: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: string;
      secondaryCta: string;
      image: string;
      imageAlt: string;
    };
    intro: {
      eyebrow: string;
      title: string;
      body: string;
    };
    categories: string[];
    items: FullRentalItem[];
    reservationTerms: string[];
    activities: {
      eyebrow: string;
      title: string;
      intro: string;
      items: ActivityItem[];
    };
    quoteForm: {
      eyebrow: string;
      title: string;
      body: string;
      fields: QuoteFormField[];
    };
  };

  gallery: {
    eyebrow: string;
    title: string;
    ctaLabel: string;
    href: string;
    images: GalleryImage[];
  };

  galleryPage: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
    };
    images: GalleryImage[];
  };

  reviews: {
    eyebrow: string;
    title: string;
    items: Review[];
  };

  visit: {
    eyebrow: string;
    title: string;
    body: string;
    details: FeatureItem[];
  };

  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};