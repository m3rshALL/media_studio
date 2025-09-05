'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations';
import { services } from '@/lib/services-data';

export function ServicesHero() {
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
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Comprehensive video production services to bring your vision to life, 
            from concept to final delivery.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <Container className="bg-white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group"
            variants={fadeInUp}
          >
            <Link href={`/services/${service.slug}`}>
              <motion.div
                className="bg-gray-50 rounded-2xl overflow-hidden cursor-pointer"
                {...hoverLift}
              >
                {/* Service Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={service.gallery[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Preview */}
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Starting from</span>
                        <div className="text-xl font-bold text-brand-primary">
                          {service.packages[0].price}
                        </div>
                      </div>
                      <Button variant="outline">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-12 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-display font-bold mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Every project is unique. Let's discuss your specific needs and create 
          a tailored solution that exceeds your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contacts" variant="secondary" size="lg">
            Get Custom Quote
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}