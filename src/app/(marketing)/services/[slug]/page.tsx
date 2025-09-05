import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetail } from '@/components/services/service-detail';
import { getServiceBySlug, services } from '@/lib/services-data';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [service.gallery[0]],
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Structured Data for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'MediaStudio',
      url: 'https://mediastudio.com',
    },
    areaServed: 'United States',
    serviceType: service.title,
    offers: service.packages.map(pkg => ({
      '@type': 'Offer',
      name: `${service.title} - ${pkg.name}`,
      description: pkg.description,
      price: pkg.price !== 'Custom' ? pkg.price.replace('$', '').replace(',', '') : undefined,
      priceCurrency: 'USD',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServiceDetail service={service} />
    </>
  );
}