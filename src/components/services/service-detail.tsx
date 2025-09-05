'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container, Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { Service } from '@/lib/services-data';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const [activePackage, setActivePackage] = useState(1); // Default to middle package
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#packages" size="lg">
                  View Packages
                </Button>
                <Button href="/contacts" variant="outline" size="lg">
                  Get Custom Quote
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
              variants={slideInRight}
            >
              <img
                src={service.gallery[0]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Description & Features */}
      <Container className="bg-white">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-display font-bold mb-6">What We Offer</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-display font-semibold mb-6">Key Features</h3>
            <div className="space-y-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Packages */}
      <Container className="bg-gray-50" id="packages">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            variants={fadeInUp}
          >
            Choose Your Package
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Select the package that best fits your needs and budget. All packages 
            can be customized to meet your specific requirements.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {service.packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                pkg.popular ? 'ring-2 ring-brand-primary scale-105' : ''
              }`}
              variants={fadeInUp}
              onHoverStart={() => setActivePackage(index)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-brand-primary mb-2">{pkg.price}</div>
                <div className="text-gray-500">{pkg.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                href="/contacts" 
                className="w-full"
                variant={pkg.popular ? 'primary' : 'outline'}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* FAQ */}
      <Container className="bg-white">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our {service.title.toLowerCase()} service.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            {service.faq.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Let's discuss your project and create something amazing together. 
            Contact us for a free consultation and custom quote.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button href="/contacts" variant="secondary" size="lg">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}