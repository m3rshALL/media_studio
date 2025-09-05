import { Metadata } from 'next';
import { ServicesHero, ServicesGrid } from '@/components/services/services-listing';

export const metadata: Metadata = {
  title: 'Professional Video Production Services',
  description: 'Comprehensive video production services including filming, event coverage, commercial ads, and post-production. Professional quality, fast turnaround.',
  openGraph: {
    title: 'Professional Video Production Services | MediaStudio',
    description: 'Complete range of video production services from concept to delivery. Professional equipment, experienced crew, exceptional results.',
    images: ['/images/og-services.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for Services
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Video Production Services',
  description: 'Professional video production services including filming, editing, and post-production for businesses and events.',
  provider: {
    '@type': 'Organization',
    name: 'MediaStudio',
    url: 'https://mediastudio.com',
  },
  areaServed: 'United States',
  serviceType: 'Video Production',
  offers: [
    {
      '@type': 'Offer',
      name: 'Video Production',
      description: 'Full-service video production from concept to final cut',
      priceRange: '$2,500 - $10,000+',
    },
    {
      '@type': 'Offer',
      name: 'Event Coverage',
      description: 'Professional event documentation and live streaming',
      priceRange: '$1,500 - $6,500+',
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}