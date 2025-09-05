import { Metadata } from 'next';
import { PortfolioHero, PortfolioGrid } from '@/components/portfolio/portfolio-listing';

export const metadata: Metadata = {
  title: 'Portfolio - Our Video Production Work',
  description: 'Explore our portfolio of professional video production work including commercials, corporate videos, event coverage, and documentaries.',
  openGraph: {
    title: 'Portfolio - Professional Video Production Work | MediaStudio',
    description: 'Browse our latest video production projects across multiple categories. See the quality and creativity we bring to every project.',
    images: ['/images/og-portfolio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}