import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum(['video-production', 'event-coverage', 'commercial-ads', 'post-production', 'other'], {
    required_error: 'Please select a service type',
  }),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus', 'not-sure'], {
    required_error: 'Please select a budget range',
  }),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-6-months', 'flexible'], {
    required_error: 'Please select a timeline',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  newsletter: z.boolean().default(false),
  privacy: z.boolean().refine(val => val === true, {
    message: 'You must accept the privacy policy',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceTypes = [
  { value: 'video-production', label: 'Video Production' },
  { value: 'event-coverage', label: 'Event Coverage' },
  { value: 'commercial-ads', label: 'Commercial Ads' },
  { value: 'post-production', label: 'Post Production' },
  { value: 'other', label: 'Other / Custom' },
];

export const budgetRanges = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-50k', label: '$15,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '2-3-months', label: '2-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: 'flexible', label: 'Flexible timeline' },
];