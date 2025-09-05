export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  client: string;
  category: string;
  tags: string[];
  year: number;
  duration: string;
  role: string[];
  challenge: string;
  solution: string;
  results: string;
  video: {
    url: string;
    poster: string;
    duration: string;
  };
  gallery: string[];
  equipment: string[];
  team: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'commercial',
    name: 'Commercial',
    slug: 'commercial',
    description: 'Brand commercials and advertising content'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    slug: 'corporate', 
    description: 'Corporate videos and business content'
  },
  {
    id: 'event',
    name: 'Event',
    slug: 'event',
    description: 'Event coverage and documentation'
  },
  {
    id: 'documentary',
    name: 'Documentary',
    slug: 'documentary',
    description: 'Documentary films and storytelling'
  },
  {
    id: 'music',
    name: 'Music Video',
    slug: 'music',
    description: 'Music videos and artistic content'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'tech-startup-demo',
    title: 'TechFlow Product Demo',
    description: 'A compelling product demonstration video showcasing an innovative SaaS platform for project management, highlighting key features and user benefits.',
    client: 'TechFlow Inc.',
    category: 'commercial',
    tags: ['Product Demo', 'SaaS', 'Animation', 'Corporate'],
    year: 2024,
    duration: '3:30',
    role: ['Creative Direction', 'Cinematography', 'Post-Production'],
    challenge: 'The client needed to explain a complex software platform in a simple, engaging way that would resonate with busy executives and decision-makers.',
    solution: 'We created a narrative-driven demo that follows a day in the life of a project manager, showing real-world scenarios where the software solves common pain points. Combined live-action with screen recordings and motion graphics.',
    results: 'The video generated a 40% increase in demo requests and helped close $2M in new business within 3 months of launch.',
    video: {
      url: '/videos/projects/techflow-demo.mp4',
      poster: '/images/projects/techflow-poster.jpg',
      duration: '3:30'
    },
    gallery: [
      '/images/projects/techflow-1.jpg',
      '/images/projects/techflow-2.jpg',
      '/images/projects/techflow-3.jpg',
      '/images/projects/techflow-4.jpg'
    ],
    equipment: ['RED Komodo 6K', 'Sony FX9', 'ARRI SkyPanel', 'DJI Ronin'],
    team: ['Alex Rodriguez', 'Marcus Johnson', 'Emily Zhang'],
    testimonial: {
      text: 'MediaStudio completely understood our vision and delivered a video that perfectly showcases our platform. The quality and attention to detail exceeded our expectations.',
      author: 'Sarah Mitchell',
      role: 'Head of Marketing, TechFlow Inc.'
    },
    seo: {
      title: 'TechFlow Product Demo Video | MediaStudio Portfolio',
      description: 'Professional product demonstration video for TechFlow SaaS platform. See how we helped increase demo requests by 40%.',
      keywords: ['product demo video', 'SaaS marketing', 'software demo', 'corporate video']
    }
  },
  {
    id: '2',
    slug: 'luxury-wedding-film',
    title: 'Luxury Wedding at Villa Cypress',
    description: 'An elegant wedding film capturing the romance and grandeur of a luxury destination wedding in Tuscany, featuring cinematic storytelling and breathtaking visuals.',
    client: 'Private Client',
    category: 'event',
    tags: ['Wedding', 'Luxury', 'Destination', 'Cinematic'],
    year: 2024,
    duration: '8:15',
    role: ['Creative Direction', 'Cinematography', 'Drone Operation'],
    challenge: 'Create a cinematic wedding film that captures both intimate moments and the grandeur of the location while working in challenging lighting conditions.',
    solution: 'We used a multi-camera approach with cinematic lenses, incorporated aerial footage of the Tuscan landscape, and employed advanced color grading to create a warm, romantic atmosphere.',
    results: 'The couple was thrilled with the emotional impact of the film, and it has been featured in luxury wedding publications, generating significant referrals.',
    video: {
      url: '/videos/projects/villa-cypress-wedding.mp4',
      poster: '/images/projects/wedding-poster.jpg',
      duration: '8:15'
    },
    gallery: [
      '/images/projects/wedding-1.jpg',
      '/images/projects/wedding-2.jpg',
      '/images/projects/wedding-3.jpg',
      '/images/projects/wedding-4.jpg',
      '/images/projects/wedding-5.jpg'
    ],
    equipment: ['Sony FX9', 'Canon RF Lenses', 'DJI Air 2S', 'Gimbal Stabilizer'],
    team: ['Alex Rodriguez', 'Marcus Johnson', 'David Kumar'],
    testimonial: {
      text: 'Our wedding film is absolutely magical. MediaStudio captured every emotion and created something we will treasure forever. The cinematic quality is beyond anything we imagined.',
      author: 'Isabella & Marco',
      role: 'Wedding Couple'
    },
    seo: {
      title: 'Luxury Wedding Film - Villa Cypress Tuscany | MediaStudio',
      description: 'Cinematic luxury wedding videography in Tuscany. Professional wedding films that capture your special day with artistic excellence.',
      keywords: ['luxury wedding video', 'destination wedding film', 'Tuscany wedding', 'cinematic wedding']
    }
  },
  {
    id: '3',
    slug: 'corporate-conference-coverage',
    title: 'Global Tech Summit 2024',
    description: 'Comprehensive multi-day conference coverage including keynote presentations, panel discussions, and networking events for a major technology summit.',
    client: 'Global Tech Alliance',
    category: 'corporate',
    tags: ['Conference', 'Live Streaming', 'Multi-Camera', 'Corporate'],
    year: 2024,
    duration: '12 hours total',
    role: ['Event Coverage', 'Live Streaming', 'Multi-Camera Direction'],
    challenge: 'Provide live streaming and recording for multiple simultaneous sessions across a large venue while maintaining broadcast quality throughout the 3-day event.',
    solution: 'Deployed a 6-camera setup with dedicated operators, implemented a professional streaming infrastructure, and created real-time highlights for social media distribution.',
    results: 'Successfully streamed to over 10,000 remote attendees with 99.9% uptime, delivered same-day highlight reels, and provided comprehensive documentation for future reference.',
    video: {
      url: '/videos/projects/tech-summit-highlights.mp4',
      poster: '/images/projects/conference-poster.jpg',
      duration: '5:45'
    },
    gallery: [
      '/images/projects/conference-1.jpg',
      '/images/projects/conference-2.jpg',
      '/images/projects/conference-3.jpg',
      '/images/projects/conference-4.jpg'
    ],
    equipment: ['Multiple Sony FX9', 'Live Streaming Rig', 'Wireless Audio', 'LED Panels'],
    team: ['Sarah Chen', 'Marcus Johnson', 'Emily Zhang', 'David Kumar'],
    testimonial: {
      text: 'MediaStudio handled our complex multi-day event flawlessly. Their professionalism and technical expertise ensured our global audience had an excellent viewing experience.',
      author: 'Dr. James Park',
      role: 'Event Director, Global Tech Alliance'
    },
    seo: {
      title: 'Corporate Conference Video Coverage | Global Tech Summit',
      description: 'Professional conference videography and live streaming services. Multi-camera coverage for corporate events and conferences.',
      keywords: ['conference video', 'live streaming', 'corporate events', 'multi-camera coverage']
    }
  },
  {
    id: '4',
    slug: 'fashion-brand-story',
    title: 'Sustainable Fashion Brand Story',
    description: 'A brand documentary highlighting the sustainable practices and craftsmanship behind an eco-friendly fashion label, featuring behind-the-scenes footage and interviews.',
    client: 'EcoStyle Fashion',
    category: 'documentary',
    tags: ['Brand Story', 'Sustainability', 'Fashion', 'Documentary'],
    year: 2023,
    duration: '6:20',
    role: ['Documentary Direction', 'Interview Coordination', 'Post-Production'],
    challenge: 'Tell a compelling brand story that authentically communicates the company\'s sustainability mission while showcasing the quality and beauty of their products.',
    solution: 'Created an intimate documentary following the journey from sustainable material sourcing to final product, featuring authentic interviews with artisans and behind-the-scenes production footage.',
    results: 'The brand story video increased website engagement by 65% and helped establish the brand as a thought leader in sustainable fashion, leading to partnerships with major retailers.',
    video: {
      url: '/videos/projects/ecostyle-brand-story.mp4',
      poster: '/images/projects/fashion-poster.jpg',
      duration: '6:20'
    },
    gallery: [
      '/images/projects/fashion-1.jpg',
      '/images/projects/fashion-2.jpg',
      '/images/projects/fashion-3.jpg',
      '/images/projects/fashion-4.jpg'
    ],
    equipment: ['Sony FX9', 'Prime Lenses', 'LED Light Kit', 'Audio Recording Kit'],
    team: ['Alex Rodriguez', 'Emily Zhang', 'Marcus Johnson'],
    testimonial: {
      text: 'MediaStudio captured the heart of our brand perfectly. The documentary beautifully tells our sustainability story and has become a cornerstone of our marketing efforts.',
      author: 'Maria Santos',
      role: 'Founder, EcoStyle Fashion'
    },
    seo: {
      title: 'Sustainable Fashion Brand Documentary | EcoStyle Story',
      description: 'Professional brand documentary for sustainable fashion company. See how compelling storytelling can elevate your brand message.',
      keywords: ['brand documentary', 'fashion video', 'sustainability story', 'corporate storytelling']
    }
  },
  {
    id: '5',
    slug: 'indie-music-video',
    title: 'Electric Dreams Music Video',
    description: 'A visually stunning music video for an indie electronic artist featuring creative lighting, dynamic camera movements, and innovative visual effects.',
    client: 'Luna Echo (Artist)',
    category: 'music',
    tags: ['Music Video', 'Creative', 'Visual Effects', 'Indie'],
    year: 2024,
    duration: '4:05',
    role: ['Creative Direction', 'Cinematography', 'Visual Effects'],
    challenge: 'Create a captivating music video on a limited budget that would stand out in the competitive indie music scene and complement the electronic soundscape.',
    solution: 'Utilized creative practical effects, innovative lighting techniques, and cost-effective visual effects to create a dreamlike aesthetic that perfectly matches the song\'s electronic atmosphere.',
    results: 'The music video garnered over 500K views on YouTube within the first month and helped the artist secure a record label deal.',
    video: {
      url: '/videos/projects/electric-dreams-mv.mp4',
      poster: '/images/projects/music-poster.jpg',
      duration: '4:05'
    },
    gallery: [
      '/images/projects/music-1.jpg',
      '/images/projects/music-2.jpg',
      '/images/projects/music-3.jpg',
      '/images/projects/music-4.jpg'
    ],
    equipment: ['RED Komodo', 'Anamorphic Lenses', 'RGB LED Panels', 'Gimbal Stabilizer'],
    team: ['Alex Rodriguez', 'Lisa Park', 'Marcus Johnson'],
    seo: {
      title: 'Electric Dreams Music Video | Indie Electronic Artist',
      description: 'Creative music video production for indie electronic music. Innovative visual effects and cinematography for emerging artists.',
      keywords: ['music video production', 'indie music video', 'electronic music', 'creative videography']
    }
  },
  {
    id: '6',
    slug: 'healthcare-commercial',
    title: 'Advanced Medical Center Commercial',
    description: 'A compassionate commercial for a healthcare facility, emphasizing patient care and cutting-edge medical technology while maintaining a warm, human touch.',
    client: 'Advanced Medical Center',
    category: 'commercial',
    tags: ['Healthcare', 'Commercial', 'Patient Stories', 'Medical'],
    year: 2024,
    duration: '2:45',
    role: ['Creative Direction', 'Patient Interview Coordination', 'Post-Production'],
    challenge: 'Balance the technical expertise of the medical center with the human, caring aspect of healthcare, while being sensitive to patient privacy and emotions.',
    solution: 'Created a narrative that follows patient journeys from consultation to recovery, featuring real testimonials and showcasing state-of-the-art facilities with a focus on compassionate care.',
    results: 'The commercial increased patient inquiries by 35% and significantly improved the medical center\'s brand perception in the community.',
    video: {
      url: '/videos/projects/medical-center-commercial.mp4',
      poster: '/images/projects/healthcare-poster.jpg',
      duration: '2:45'
    },
    gallery: [
      '/images/projects/healthcare-1.jpg',
      '/images/projects/healthcare-2.jpg',
      '/images/projects/healthcare-3.jpg'
    ],
    equipment: ['Sony FX9', 'LED Light Panels', 'Wireless Audio', 'Slider & Gimbal'],
    team: ['Sarah Chen', 'Marcus Johnson', 'Emily Zhang'],
    testimonial: {
      text: 'MediaStudio handled our sensitive healthcare content with professionalism and created a commercial that truly represents our commitment to patient care.',
      author: 'Dr. Jennifer Walsh',
      role: 'Chief Medical Officer'
    },
    seo: {
      title: 'Healthcare Commercial Video | Advanced Medical Center',
      description: 'Professional healthcare video production focusing on patient care and medical excellence. Sensitive, effective medical marketing.',
      keywords: ['healthcare video', 'medical commercial', 'hospital marketing', 'patient testimonials']
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  if (categorySlug === 'all') return projects;
  return projects.filter(project => project.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}