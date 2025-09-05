import { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export const metadata: Metadata = {
  title: 'Professional Video Production Studio',
  description: 'Award-winning video production studio creating stunning visual content for brands, events, and creative projects. Contact us for your next video project.',
  openGraph: {
    title: 'Professional Video Production Studio | MediaStudio',
    description: 'Award-winning video production studio creating stunning visual content for brands, events, and creative projects.',
    images: ['/images/og-home.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}