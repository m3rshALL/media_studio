import { getServerSideSitemap } from 'next-sitemap';
import { blogPosts } from '@/lib/blog-data';
import { projects } from '@/lib/portfolio-data';
import { services } from '@/lib/services-data';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://mediastudio.com';

  // Blog posts
  const blogFields = blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.updatedAt).toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));

  // Portfolio projects
  const portfolioFields = projects.map((project) => ({
    loc: `${baseUrl}/portfolio/${project.slug}`,
    lastmod: new Date(`${project.year}-01-01`).toISOString(),
    changefreq: 'monthly' as const,
    priority: 0.9,
  }));

  // Services
  const serviceFields = services.map((service) => ({
    loc: `${baseUrl}/services/${service.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: 0.9,
  }));

  const allFields = [...blogFields, ...portfolioFields, ...serviceFields];

  return getServerSideSitemap(allFields);
}