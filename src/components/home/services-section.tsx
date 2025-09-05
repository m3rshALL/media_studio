'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations';

const services = [
  {
    title: 'Video Production',
    description: 'Full-service video production from concept to final cut, including scripting, filming, and post-production.',
    features: ['4K/8K Recording', 'Professional Crew', 'Equipment Included', 'Fast Turnaround'],
    icon: '🎬',
  },
  {
    title: 'Event Coverage',
    description: 'Comprehensive event documentation with multiple camera angles and live streaming capabilities.',
    features: ['Multi-Camera Setup', 'Live Streaming', 'Same-Day Highlights', 'Drone Coverage'],
    icon: '📹',
  },
  {
    title: 'Commercial Ads',
    description: 'Creative advertising content that captures attention and drives conversions for your brand.',
    features: ['Creative Concepts', 'Brand Alignment', 'Multiple Formats', 'Performance Tracking'],
    icon: '🎯',
  },
  {
    title: 'Post Production',
    description: 'Professional editing, color grading, sound design, and visual effects to polish your content.',
    features: ['Color Grading', 'Sound Design', 'Visual Effects', 'Motion Graphics'],
    icon: '✂️',
  },
];

export function ServicesSection() {
  return (
    <Container className="bg-gray-50">
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold mb-4"
          variants={fadeInUp}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          We offer comprehensive video production services to bring your vision to life,
          from initial concept to final delivery.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-xl p-6 shadow-lg"
            variants={fadeInUp}
            {...hoverLift}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              className="mt-6 text-brand-primary font-medium hover:text-brand-primary/80 transition-colors"
              whileHover={{ x: 5 }}
            >
              Learn More →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}