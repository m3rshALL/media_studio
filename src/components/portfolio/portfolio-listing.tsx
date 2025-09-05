'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { projects, categories, getProjectsByCategory } from '@/lib/portfolio-data';

export function PortfolioHero() {
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
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Explore our latest work and see how we bring stories to life through 
            the power of professional video production.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            variants={fadeInUp}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">{projects.length}+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">{categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
              <div className="text-gray-600">Hours of Content</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setFilteredProjects(getProjectsByCategory(categorySlug));
  };

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
            All Projects ({projects.length})
          </button>
          {categories.map((category) => {
            const categoryProjects = getProjectsByCategory(category.slug);
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
                {category.name} ({categoryProjects.length})
              </button>
            );
          })}
        </motion.div>

        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {selectedCategory === 'all' 
            ? 'Browse our complete portfolio of video production work across all categories.'
            : `Explore our ${categories.find(c => c.slug === selectedCategory)?.description || ''}.`
          }
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              className="group"
              layout
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  {/* Project Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.video.poster}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-brand-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-primary text-white text-sm font-medium rounded-full">
                        {categories.find(c => c.slug === project.category)?.name}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-brand-primary font-medium text-sm mb-2">
                      {project.client}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-12 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-display font-bold mb-4">
          Ready to Create Your Own Success Story?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join our portfolio of successful projects. Let's discuss how we can help 
          bring your vision to life with professional video production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contacts"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
          <motion.a
            href="/services"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </motion.a>
        </div>
      </motion.div>
    </Container>
  );
}