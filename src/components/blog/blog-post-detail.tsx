'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { BlogPost, blogCategories, getRelatedPosts } from '@/lib/blog-data';

interface BlogPostDetailProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function TableOfContents({ content }: { content: string }) {
  // Extract headings from markdown content
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
  const tocItems = headings.map((heading, index) => {
    const level = heading.match(/^#+/)?.[0].length || 1;
    const text = heading.replace(/^#+\s+/, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    return { level, text, id, index };
  });

  if (tocItems.length === 0) return null;

  return (
    <motion.div
      className="bg-gray-50 rounded-xl p-6 mb-8"
      variants={fadeInUp}
    >
      <h3 className="text-lg font-display font-semibold mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li 
              key={item.index}
              style={{ marginLeft: `${(item.level - 1) * 1}rem` }}
            >
              <a 
                href={`#${item.id}`}
                className="text-gray-600 hover:text-brand-primary transition-colors text-sm"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown to HTML conversion for demo purposes
  // In a real app, you'd use a proper markdown parser like react-markdown
  const processedContent = content
    .replace(/^# (.+)$/gm, '<h1 id="$1" class="text-3xl font-display font-bold mb-6 mt-8 first:mt-0">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 id="$1" class="text-2xl font-display font-semibold mb-4 mt-6">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 id="$1" class="text-xl font-display font-semibold mb-3 mt-5">$1</h3>')
    .replace(/^\*\*(.+?)\*\*/gm, '<strong class="font-semibold">$1</strong>')
    .replace(/^\*(.+?)\*/gm, '<em class="italic">$1</em>')
    .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
    .replace(/^(\d+\. .+)$/gm, '<li class="mb-2">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(?!<[h|l|s])/gm, '<p class="mb-4">')
    .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>');

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const category = blogCategories.find(cat => cat.slug === post.category);
  const relatedPosts = getRelatedPosts(post.id, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 py-20">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.nav className="mb-6" variants={fadeInUp}>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/blog" className="hover:text-brand-primary">Blog</Link>
                <span>→</span>
                <Link href={`/blog?category=${post.category}`} className="hover:text-brand-primary">
                  {category?.name}
                </Link>
                <span>→</span>
                <span className="text-brand-primary">{post.title}</span>
              </div>
            </motion.nav>

            {/* Category Badge */}
            <motion.div className="mb-6" variants={fadeInUp}>
              <span className={`px-4 py-2 ${category?.color || 'bg-brand-primary'} text-white font-medium rounded-full`}>
                {category?.name}
              </span>
              {post.featured && (
                <span className="ml-3 px-4 py-2 bg-yellow-500 text-white font-medium rounded-full">
                  Featured
                </span>
              )}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              variants={fadeInUp}
            >
              {post.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              variants={fadeInUp}
            >
              {post.excerpt}
            </motion.p>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-gray-600"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm">{post.author.bio}</div>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300" />
              
              <div className="space-y-1">
                <div className="text-sm">Published: {formatDate(post.publishedAt)}</div>
                <div className="text-sm">{post.readTime} minute read</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <Container className="bg-white">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Content */}
          <motion.article 
            className="lg:col-span-3"
            variants={slideInLeft}
          >
            {/* Featured Image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Table of Contents */}
            <TableOfContents content={post.content} />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <MarkdownContent content={post.content} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.author.bio}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-brand-primary hover:underline">
                      View Profile
                    </a>
                    <a href="#" className="text-brand-primary hover:underline">
                      More Articles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside 
            className="lg:col-span-1"
            variants={slideInRight}
          >
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl p-6 text-white">
                <h3 className="text-xl font-display font-bold mb-3">
                  Stay Updated
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Get the latest video production tips and industry insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none"
                  />
                  <button className="w-full bg-white text-brand-primary py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Share Article */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Share Article</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <span>📘</span>
                    Share on LinkedIn
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <span>🐦</span>
                    Share on Twitter
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <span>📘</span>
                    Share on Facebook
                  </button>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Need Video Production?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ready to bring your project to life? Get a free consultation with our team.
                </p>
                <Button href="/contacts" className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </Container>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Container className="bg-gray-50">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-display font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Related Articles
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = blogCategories.find(cat => cat.slug === relatedPost.category);
                return (
                  <motion.article
                    key={relatedPost.id}
                    className="group"
                    variants={fadeInUp}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-6">
                          <span className={`px-3 py-1 ${relatedCategory?.color || 'bg-brand-primary'} text-white text-sm font-medium rounded-full`}>
                            {relatedCategory?.name}
                          </span>
                          <h3 className="text-lg font-display font-semibold mt-3 mb-2 group-hover:text-brand-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {relatedPost.excerpt.substring(0, 100)}...
                          </p>
                          <div className="text-brand-primary font-medium text-sm group-hover:underline">
                            Read More →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </Container>
      )}

      {/* CTA Section */}
      <Container className="bg-gradient-to-r from-brand-primary to-brand-accent text-white">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            variants={fadeInUp}
          >
            Ready to Start Your Video Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Let's discuss how we can help bring your vision to life with professional 
            video production services.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button href="/contacts" variant="secondary" size="lg">
              Get Free Consultation
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}