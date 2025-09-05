'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { blogPosts, blogCategories, getBlogPostsByCategory, BlogPost } from '@/lib/blog-data';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 py-20">
      <Container>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            variants={fadeInUp}
          >
            Our <span className="text-gradient">Blog</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Insights, tips, and behind-the-scenes stories from the world of 
            professional video production.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            variants={fadeInUp}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">{blogPosts.length}+</div>
              <div className="text-gray-600">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">{blogCategories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">10K+</div>
              <div className="text-gray-600">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">Weekly</div>
              <div className="text-gray-600">Updates</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  const category = blogCategories.find(cat => cat.slug === post.category);
  
  return (
    <motion.article
      className={`group cursor-pointer ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      variants={scaleIn}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Featured Image */}
          <div className={`relative overflow-hidden ${
            featured ? 'aspect-[16/9]' : 'aspect-video'
          }`}>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 ${category?.color || 'bg-brand-primary'} text-white text-sm font-medium rounded-full`}>
                {category?.name}
              </span>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
            )}

            {/* Read Time */}
            <div className="absolute bottom-4 right-4">
              <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">
                {post.readTime} min read
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <h2 className={`font-display font-bold mb-3 group-hover:text-brand-primary transition-colors ${
              featured ? 'text-2xl lg:text-3xl' : 'text-xl'
            }`}>
              {post.title}
            </h2>
            
            <p className={`text-gray-600 mb-4 ${
              featured ? 'text-lg' : 'text-base'
            }`}>
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Read More */}
            <div className="text-brand-primary font-medium group-hover:underline">
              Read Article →
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setFilteredPosts(getBlogPostsByCategory(categorySlug));
  };

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Container className="bg-white">
      {/* Category Filter */}
      <motion.div
        className="mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={fadeInUp}
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-brand-primary text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Posts ({blogPosts.length})
          </button>
          {blogCategories.map((category) => {
            const categoryPosts = getBlogPostsByCategory(category.slug);
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'bg-brand-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({categoryPosts.length})
              </button>
            );
          })}
        </motion.div>

        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {selectedCategory === 'all' 
            ? 'Explore our complete collection of articles covering all aspects of video production.'
            : `Discover insights about ${blogCategories.find(c => c.slug === selectedCategory)?.description || ''}.`
          }
        </motion.p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <motion.h2
                className="text-2xl font-display font-bold mb-8"
                variants={fadeInUp}
              >
                Featured Articles
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <div>
              {featuredPosts.length > 0 && (
                <motion.h2
                  className="text-2xl font-display font-bold mb-8"
                  variants={fadeInUp}
                >
                  Latest Articles
                </motion.h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              variants={fadeInUp}
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">
                We're working on articles for this category. Check back soon!
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Newsletter CTA */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-12 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-display font-bold mb-4">
          Stay Updated with Our Latest Insights
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Subscribe to our newsletter for weekly tips, industry insights, and 
          behind-the-scenes content from our video production experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <motion.button
            className="px-8 py-3 bg-white text-brand-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </Container>
  );
}