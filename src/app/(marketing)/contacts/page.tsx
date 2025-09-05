import { Metadata } from 'next';
import { ContactHero, LocationSection } from '@/components/contact/contact-info';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Video Project Started',
  description: 'Ready to start your video project? Contact MediaStudio for a free consultation and custom quote. Professional video production services.',
  openGraph: {
    title: 'Contact MediaStudio - Professional Video Production Services',
    description: 'Get in touch with our video production team. Free consultation, custom quotes, and professional service for all your video needs.',
    images: ['/images/og-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for Local Business
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MediaStudio',
  description: 'Professional video production studio creating stunning visual content for brands, events, and creative projects.',
  url: 'https://mediastudio.com',
  telephone: '+1-555-123-4567',
  email: 'hello@mediastudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Creative Avenue',
    addressLocality: 'Studio City',
    addressRegion: 'CA',
    postalCode: '91604',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.1368,
    longitude: -118.3686,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$$',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  currenciesAccepted: 'USD',
  serviceArea: {
    '@type': 'State',
    name: 'California',
  },
  sameAs: [
    'https://instagram.com/mediastudio',
    'https://youtube.com/mediastudio',
    'https://vimeo.com/mediastudio',
    'https://linkedin.com/company/mediastudio',
  ],
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <ContactHero />
      <ContactForm />
      <LocationSection />
    </>
  );
}