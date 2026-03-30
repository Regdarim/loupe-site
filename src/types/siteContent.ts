export type SanityImageSource =
  | {
      _type?: 'image';
      asset?: {
        _ref?: string;
        _id?: string;
        url?: string;
      };
    }
  | string
  | null
  | undefined;

export interface MenuItem {
  label: string;
  href: string;
}

export interface RealizacjaItem {
  title: string;
  description: string;
  category: string;
}

export interface SiteContent {
  heroHeadline: string;
  heroSubtext: string;
  introHeading: string;
  introText: string;
  realizacjeItems: RealizacjaItem[];
  approachSection1Title: string;
  approachSection1Text: string;
  approachSection2Title: string;
  approachSection2Text: string;
  ctaText: string;
  menuItems: MenuItem[];
  images: {
    hero?: SanityImageSource;
    grid1?: SanityImageSource;
    grid2?: SanityImageSource;
    grid3?: SanityImageSource;
    split1?: SanityImageSource;
    split2?: SanityImageSource;
  };
}
