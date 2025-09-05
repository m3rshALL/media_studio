'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-showreel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-white container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          variants={fadeInUp}
        >
          Bringing Your
          <span className="block text-gradient">Vision to Life</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Professional video production studio creating stunning visual content 
          for brands, events, and creative projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeInUp}
        >
          <Button href="/portfolio" size="lg">
            View Our Work
          </Button>
          <Button href="/contacts" variant="outline" size="lg">
            Get a Quote
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={fadeInUp}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">100+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}