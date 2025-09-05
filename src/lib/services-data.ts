export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  packages: Package[];
  gallery: string[];
  faq: FAQ[];
  relatedCases: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Package {
  name: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'video-production',
    title: 'Video Production',
    shortDescription: 'Full-service video production from concept to final cut, including scripting, filming, and post-production.',
    description: 'Our comprehensive video production service covers every aspect of creating professional video content. From initial concept development and scriptwriting to filming with professional equipment and complete post-production, we handle it all. Whether you need a corporate video, product demonstration, or brand story, our experienced team ensures your vision comes to life with exceptional quality and attention to detail.',
    features: [
      'Professional scriptwriting and storyboarding',
      '4K/8K recording with cinema cameras',
      'Professional lighting and audio equipment',
      'Experienced crew and talent coordination',
      'Complete post-production workflow',
      'Multiple format delivery options',
      'Unlimited revisions on final cut',
      'Fast turnaround times'
    ],
    packages: [
      {
        name: 'Starter',
        description: 'Perfect for small businesses and startups',
        price: '$2,500',
        duration: '2-3 weeks',
        includes: [
          'Up to 3 hours filming',
          'Single camera setup',
          'Basic lighting package',
          'Professional audio recording',
          '2-3 minute final video',
          '2 rounds of revisions',
          'HD delivery'
        ]
      },
      {
        name: 'Professional',
        description: 'Ideal for established businesses',
        price: '$5,000',
        duration: '3-4 weeks',
        includes: [
          'Full day filming (8 hours)',
          'Multi-camera setup',
          'Professional lighting package',
          'Wireless audio systems',
          '5-10 minute final video',
          'Motion graphics and titles',
          'Unlimited revisions',
          '4K delivery + multiple formats'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        description: 'For large-scale productions',
        price: 'Custom',
        duration: '4-6 weeks',
        includes: [
          'Multi-day production',
          'Full crew and equipment',
          'Custom set design',
          'Professional talent casting',
          'Multiple deliverables',
          'Advanced post-production',
          'Dedicated project manager',
          'Ongoing support and updates'
        ]
      }
    ],
    gallery: [
      '/images/services/video-production-1.jpg',
      '/images/services/video-production-2.jpg',
      '/images/services/video-production-3.jpg'
    ],
    faq: [
      {
        question: 'How long does the video production process take?',
        answer: 'Depending on the complexity of your project, production typically takes 2-6 weeks from initial consultation to final delivery. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Can you help with script writing?',
        answer: 'Absolutely! Our team includes experienced scriptwriters who can help develop your concept into a compelling narrative that resonates with your target audience.'
      },
      {
        question: 'What equipment do you use?',
        answer: 'We use professional cinema cameras including RED Komodo 6K and Sony FX9, along with high-end lighting and audio equipment to ensure broadcast-quality results.'
      }
    ],
    relatedCases: ['tech-startup-demo', 'fashion-brand-story'],
    seo: {
      title: 'Professional Video Production Services | MediaStudio',
      description: 'Complete video production services from concept to delivery. Professional filming, scripting, and post-production for businesses and brands.',
      keywords: ['video production', 'corporate video', 'professional filming', 'video marketing']
    }
  },
  {
    id: '2',
    slug: 'event-coverage',
    title: 'Event Coverage',
    shortDescription: 'Comprehensive event documentation with multiple camera angles and live streaming capabilities.',
    description: 'Capture every important moment of your event with our professional event coverage service. We provide comprehensive documentation using multiple camera angles, professional audio recording, and can even offer live streaming for remote audiences. From corporate conferences and product launches to weddings and cultural events, we ensure no special moment goes unrecorded.',
    features: [
      'Multi-camera setup for comprehensive coverage',
      'Professional audio recording and mixing',
      'Live streaming capabilities',
      'Same-day highlight reels',
      'Drone coverage for aerial perspectives',
      'Professional photography integration',
      'Real-time editing and delivery',
      'Multiple format outputs'
    ],
    packages: [
      {
        name: 'Essential',
        description: 'Basic event documentation',
        price: '$1,500',
        duration: 'Same day delivery',
        includes: [
          'Single camera operator',
          'Up to 4 hours coverage',
          'Basic audio recording',
          'Highlight reel (2-3 minutes)',
          'Raw footage delivery',
          'HD quality'
        ]
      },
      {
        name: 'Premium',
        description: 'Professional multi-camera coverage',
        price: '$3,500',
        duration: '1-2 weeks delivery',
        includes: [
          '2-3 camera operators',
          'Full day coverage',
          'Professional audio mixing',
          'Extended highlight reel (5-10 minutes)',
          'Live streaming option',
          'Same-day preview',
          '4K delivery'
        ],
        popular: true
      },
      {
        name: 'Ultimate',
        description: 'Complete event production',
        price: '$6,500',
        duration: '2-3 weeks delivery',
        includes: [
          'Full production crew',
          'Multi-day coverage',
          'Drone cinematography',
          'Professional photography',
          'Complete event documentary',
          'Live streaming with graphics',
          'Multiple camera angles',
          'Custom editing and motion graphics'
        ]
      }
    ],
    gallery: [
      '/images/services/event-coverage-1.jpg',
      '/images/services/event-coverage-2.jpg',
      '/images/services/event-coverage-3.jpg'
    ],
    faq: [
      {
        question: 'Do you offer live streaming services?',
        answer: 'Yes! We provide professional live streaming with multiple camera feeds, graphics overlay, and can stream to multiple platforms simultaneously.'
      },
      {
        question: 'How quickly can we get highlights from our event?',
        answer: 'We can provide same-day highlight reels for urgent needs, with full edited versions typically delivered within 1-2 weeks depending on the package.'
      },
      {
        question: 'Can you handle outdoor events?',
        answer: 'Absolutely. We have weather-resistant equipment and extensive experience with outdoor events, including drone coverage where permitted.'
      }
    ],
    relatedCases: ['corporate-conference', 'luxury-wedding'],
    seo: {
      title: 'Professional Event Coverage & Live Streaming | MediaStudio',
      description: 'Expert event videography and live streaming services. Multi-camera coverage, same-day highlights, and professional documentation.',
      keywords: ['event coverage', 'live streaming', 'event videography', 'conference recording']
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}