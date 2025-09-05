'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
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
            About <span className="text-gradient">MediaStudio</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            We are passionate storytellers dedicated to bringing your vision to life 
            through the power of video production.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={fadeInUp}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">2019</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">150+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}