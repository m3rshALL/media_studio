import { Metadata } from 'next';
import { BlogHero, BlogGrid } from '@/components/blog/blog-listing';

export const metadata: Metadata = {
  title: 'Video Production Blog - Tips, Insights & Industry News',
  description: 'Stay updated with the latest video production tips, industry insights, equipment reviews, and behind-the-scenes content from MediaStudio experts.',
  openGraph: {
    title: 'Video Production Blog - Expert Tips & Industry Insights | MediaStudio',
    description: 'Professional video production insights, tutorials, equipment reviews, and industry news from our expert team.',
    images: ['/images/og-blog.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for Blog
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'MediaStudio Video Production Blog',
  description: 'Professional video production insights, tips, and industry news',
  url: 'https://mediastudio.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'MediaStudio',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mediastudio.com/images/logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://mediastudio.com/blog'
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <BlogHero />
      <BlogGrid />
    </>
  );
}