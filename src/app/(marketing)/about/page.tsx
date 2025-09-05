import { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { StorySection } from '@/components/about/story-section';
import { TeamSection } from '@/components/about/team-section';
import { EquipmentSection } from '@/components/about/equipment-section';

export const metadata: Metadata = {
  title: 'About Us - Professional Video Production Team',
  description: 'Learn about MediaStudio\'s passionate team, our story, and the professional equipment we use to create stunning video content for our clients.',
  openGraph: {
    title: 'About MediaStudio - Professional Video Production Team',
    description: 'Meet our talented team and learn about our journey in creating exceptional video content with industry-leading equipment.',
    images: ['/images/og-about.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MediaStudio',
  description: 'Professional video production studio creating stunning visual content for brands, events, and creative projects.',
  url: 'https://mediastudio.com',
  logo: 'https://mediastudio.com/images/logo.png',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Creative Ave',
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
  },
  sameAs: [
    'https://instagram.com/mediastudio',
    'https://youtube.com/mediastudio',
    'https://vimeo.com/mediastudio',
    'https://linkedin.com/company/mediastudio',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <AboutHero />
      <StorySection />
      <TeamSection />
      <EquipmentSection />
    </>
  );
}