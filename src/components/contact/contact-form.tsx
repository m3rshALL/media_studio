'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container, Button } from '@/components/ui/container';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  contactFormSchema, 
  ContactFormData, 
  serviceTypes, 
  budgetRanges, 
  timelines 
} from '@/lib/contact-form-schema';

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    newsletter: false,
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', validatedData);
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const zodErrors: Record<string, string> = {};
        (error as any).issues.forEach((issue: any) => {
          zodErrors[issue.path[0]] = issue.message;
        });
        setErrors(zodErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Container className="bg-white">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            variants={fadeInUp}
          >
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <motion.h2
            className="text-3xl font-display font-bold mb-4"
            variants={fadeInUp}
          >
            Thank You!
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            We've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to explore our portfolio or learn more about our services.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button href="/portfolio">View Our Work</Button>
            <Button href="/services" variant="outline">Our Services</Button>
          </motion.div>
        </motion.div>
      </Container>
    );
  }

  return (
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
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Tell us about your project and we'll 
            provide a custom quote within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          variants={fadeInUp}
        >
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType || ''}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                  errors.serviceType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a service</option>
                {serviceTypes.map(service => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && <p className="mt-1 text-sm text-red-500">{errors.serviceType}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget || ''}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                  errors.budget ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(budget => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline || ''}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                  errors.timeline ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select timeline</option>
                {timelines.map(timeline => (
                  <option key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </option>
                ))}
              </select>
              {errors.timeline && <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message || ''}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-vertical ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project, goals, specific requirements, and any questions you have..."
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              <p className="text-sm text-gray-500 ml-auto">
                {formData.message?.length || 0}/1000 characters
              </p>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter || false}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
              />
              <span className="text-sm text-gray-700">
                Subscribe to our newsletter for video production tips, industry insights, and updates on our latest work.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy || false}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
              />
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="/privacy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                and consent to the processing of my personal data. *
              </span>
            </label>
            {errors.privacy && <p className="text-sm text-red-500 ml-7">{errors.privacy}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="min-w-48"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </Container>
  );
}