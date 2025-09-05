'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from '@/lib/animations';
import { Project, categories } from '@/lib/portfolio-data';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const category = categories.find(c => c.slug === project.category);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 py-20">
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={slideInLeft}>
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Link href="/portfolio" className="hover:text-brand-primary">Portfolio</Link>
                  <span>→</span>
                  <Link href={`/portfolio?category=${project.category}`} className="hover:text-brand-primary">
                    {category?.name}
                  </Link>
                  <span>→</span>
                  <span className="text-brand-primary">{project.title}</span>
                </div>
              </nav>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-brand-primary text-white text-sm font-medium rounded-full">
                  {category?.name}
                </span>
                <span className="text-gray-600">{project.year}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{project.duration}</span>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Role</h3>
                  <p className="text-gray-600">{project.role.join(', ')}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#video" size="lg">
                  Watch Video
                </Button>
                <Button href="/contacts" variant="outline" size="lg">
                  Start Your Project
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={slideInRight}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.video.poster}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-brand-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Video Section */}
      <Container className="bg-white" id="video">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            variants={scaleIn}
          >
            <video
              controls
              poster={project.video.poster}
              className="w-full h-full"
            >
              <source src={project.video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Details */}
      <Container className="bg-gray-50">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Challenge */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-display font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600">{project.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-display font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600">{project.solution}</p>
          </motion.div>

          {/* Results */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-display font-bold mb-4">The Results</h2>
            <p className="text-gray-600">{project.results}</p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Gallery */}
      <Container className="bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Behind the Scenes
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                variants={scaleIn}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Technical Details */}
      <Container className="bg-gray-50">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Equipment */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-display font-bold mb-6">Equipment Used</h3>
            <div className="space-y-3">
              {project.equipment.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-primary rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-display font-bold mb-6">Team Members</h3>
            <div className="space-y-3">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-primary rounded-full" />
                  <span className="text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Testimonial */}
      {project.testimonial && (
        <Container className="bg-white">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-display font-bold mb-8">Client Testimonial</h3>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div className="text-brand-primary font-semibold">
                {project.testimonial.author}
              </div>
              <div className="text-gray-600">
                {project.testimonial.role}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      )}

      {/* Tags */}
      <Container className="bg-gray-50">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-display font-semibold mb-6"
            variants={fadeInUp}
          >
            Project Tags
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={fadeInUp}
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* CTA */}
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
            Ready to Create Your Next Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Let's discuss how we can bring your vision to life with the same level 
            of creativity and professionalism showcased in this project.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button href="/contacts" variant="secondary" size="lg">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View More Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}