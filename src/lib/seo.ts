import { Metadata } from 'next';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
    nocache?: boolean;
  };
}

const defaultSEO = {
  siteName: 'MediaStudio',
  defaultTitle: 'MediaStudio - Professional Video Production Services',
  defaultDescription: 'Professional video production studio creating stunning visual content for brands, events, and creative projects. Get a free consultation today.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mediastudio.com',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
  keywords: [
    'video production',
    'professional videography',
    'commercial video',
    'corporate video',
    'event coverage',
    'video marketing',
    'content creation',
    'film production'
  ],
  social: {
    twitter: '@mediastudio',
    instagram: '@mediastudio',
    youtube: '@mediastudio',
    linkedin: 'company/mediastudio'
  }
};

export function generateSEOMetadata(config: SEOConfig = {}): Metadata {
  const {
    title,
    description = defaultSEO.defaultDescription,
    keywords = defaultSEO.keywords,
    canonical,
    openGraph,
    twitter,
    robots = { index: true, follow: true }
  } = config;

  const fullTitle = title 
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle;

  const canonicalUrl = canonical 
    ? `${defaultSEO.baseUrl}${canonical}`
    : undefined;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: defaultSEO.siteName }],
    creator: defaultSEO.siteName,
    publisher: defaultSEO.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultSEO.baseUrl),
    alternates: canonical ? {
      canonical: canonicalUrl,
    } : undefined,
    openGraph: {
      type: openGraph?.type || 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: defaultSEO.siteName,
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || description,
      images: openGraph?.images?.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: openGraph?.title || fullTitle,
      })) || [{
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: fullTitle,
      }],
      publishedTime: openGraph?.publishedTime,
      modifiedTime: openGraph?.modifiedTime,
      authors: openGraph?.authors,
      tags: openGraph?.tags,
    },
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.social.twitter,
      creator: defaultSEO.social.twitter,
      title: twitter?.title || fullTitle,
      description: twitter?.description || description,
      images: twitter?.images || ['/images/og-default.jpg'],
    },
    robots: {
      index: robots.index,
      follow: robots.follow,
      nocache: robots.nocache,
      googleBot: {
        index: robots.index,
        follow: robots.follow,
        noimageindex: robots.noimageindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      bing: process.env.BING_VERIFICATION,
    },
    category: 'business',
  };
}

export function generateStructuredData(type: string, data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
}

// Organization structured data
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: defaultSEO.siteName,
  description: defaultSEO.defaultDescription,
  url: defaultSEO.baseUrl,
  logo: `${defaultSEO.baseUrl}${defaultSEO.logo}`,
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Creative Avenue',
    addressLocality: 'Studio City',
    addressRegion: 'CA',
    postalCode: '91604',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'hello@mediastudio.com',
    availableLanguage: 'English',
    areaServed: 'US',
  },
  sameAs: [
    `https://instagram.com/${defaultSEO.social.instagram.replace('@', '')}`,
    `https://youtube.com/${defaultSEO.social.youtube.replace('@', '')}`,
    `https://twitter.com/${defaultSEO.social.twitter.replace('@', '')}`,
    `https://linkedin.com/${defaultSEO.social.linkedin}`,
  ],
  serviceArea: {
    '@type': 'State',
    name: 'California',
  },
  priceRange: '$$$',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  currenciesAccepted: 'USD',
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 10:00-16:00',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

// Website structured data
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: defaultSEO.siteName,
  url: defaultSEO.baseUrl,
  description: defaultSEO.defaultDescription,
  publisher: {
    '@type': 'Organization',
    name: defaultSEO.siteName,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${defaultSEO.baseUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export { defaultSEO };