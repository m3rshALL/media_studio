'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';

export function StorySection() {
  return (
    <Container className="bg-white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={slideInLeft}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2019, MediaStudio began as a vision to revolutionize the way 
              stories are told through video. What started as a small team of passionate 
              filmmakers has grown into a full-service production studio.
            </p>
            <p>
              Our journey has been marked by countless memorable projects, from intimate 
              wedding videos to large-scale commercial productions. Each project has 
              taught us something new and helped us refine our craft.
            </p>
            <p>
              Today, we combine cutting-edge technology with timeless storytelling 
              techniques to create videos that not only look stunning but also connect 
              with audiences on an emotional level.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          variants={slideInRight}
        >
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/images/studio-behind-scenes.jpg" 
              alt="Behind the scenes at MediaStudio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-lg">
            <div className="text-2xl font-bold">5+ Years</div>
            <div className="text-sm">of Excellence</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="bg-gray-50 p-8 rounded-xl"
          variants={fadeInUp}
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To empower brands and individuals by creating compelling visual content 
            that tells their unique stories and drives meaningful connections with 
            their audiences.
          </p>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-8 rounded-xl"
          variants={fadeInUp}
        >
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-2xl font-display font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be the leading video production studio that sets the standard for 
            creativity, quality, and innovation in visual storytelling across all 
            industries.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}