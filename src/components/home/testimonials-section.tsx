'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    content: 'MediaStudio delivered exceptional quality on our corporate video. The team was professional, creative, and exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    rating: 5,
  },
  {
    content: 'Amazing work on our wedding video! They captured every special moment beautifully. We could not be happier with the result.',
    author: 'Michael & Emma',
    role: 'Happy Couple',
    company: 'Wedding Clients',
    rating: 5,
  },
  {
    content: 'The event coverage was outstanding. Multiple camera angles, great editing, and delivered on time. Highly recommended!',
    author: 'David Chen',
    role: 'Event Coordinator',
    company: 'EventPro',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Container className="bg-white">
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
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Don't just take our word for it. Here's what our satisfied clients have to say about our work.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl p-6 relative"
            variants={fadeInUp}
          >
            {/* Quote icon */}
            <div className="absolute -top-4 left-6 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white text-lg">"</span>
            </div>
            
            {/* Stars */}
            <div className="flex mb-4 pt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
            
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-brand-primary text-sm">{testimonial.role}</div>
              <div className="text-gray-500 text-sm">{testimonial.company}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}