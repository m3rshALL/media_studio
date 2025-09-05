'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Our Studio',
    details: [
      '123 Creative Avenue',
      'Studio City, CA 91604',
      'United States'
    ],
    action: 'Get Directions',
    link: 'https://maps.google.com/?q=123+Creative+Avenue,+Studio+City,+CA+91604'
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: [
      '+1 (555) 123-4567',
      'Mon-Fri: 9AM-6PM PST',
      'Weekend: By appointment'
    ],
    action: 'Call Now',
    link: 'tel:+15551234567'
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: [
      'hello@mediastudio.com',
      'projects@mediastudio.com',
      'careers@mediastudio.com'
    ],
    action: 'Send Email',
    link: 'mailto:hello@mediastudio.com'
  },
  {
    icon: '💬',
    title: 'Social Media',
    details: [
      '@mediastudio',
      'Follow our latest work',
      'Behind-the-scenes content'
    ],
    action: 'Follow Us',
    link: 'https://instagram.com/mediastudio'
  }
];

export function ContactHero() {
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
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Ready to start your next video project? We'd love to hear from you. 
            Let's discuss how we can bring your vision to life.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={fadeInUp}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="text-3xl mb-4">{info.icon}</div>
                <h3 className="font-display font-semibold mb-3 group-hover:text-brand-primary transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>{detail}</div>
                  ))}
                </div>
                <div className="text-brand-primary font-medium text-sm group-hover:underline">
                  {info.action} →
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export function LocationSection() {
  return (
    <Container className="bg-gray-50">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={slideInLeft}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Visit Our Studio
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Location & Access</h3>
              <p className="text-gray-600">
                Our state-of-the-art studio is located in the heart of Studio City, 
                easily accessible from major highways and with convenient parking. 
                The facility features professional soundstages, editing suites, and 
                client meeting areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Studio Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By appointment only</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  Professional consultation and project planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  Studio tour and equipment demonstration
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  Portfolio review and creative discussion
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  Custom quote and timeline planning
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideInRight}>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Interactive map would be embedded here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  123 Creative Avenue, Studio City, CA 91604
                </p>
              </div>
            </div>
          </div>
          
          {/* Directions and nearby info */}
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold mb-3">Getting Here</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🚗</span>
                <span>Free parking available on-site</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚇</span>
                <span>Red Line Metro: Universal City/Studio City Station (10 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✈️</span>
                <span>LAX Airport: 45 minutes by car</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🍕</span>
                <span>Restaurants and cafes within walking distance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}