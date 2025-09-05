'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    vimeo?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'Creative Director',
    category: 'leadership',
    bio: 'Award-winning director with 10+ years of experience in commercial and narrative filmmaking.',
    image: '/images/team/alex.jpg',
    socials: { linkedin: '#', vimeo: '#' },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Lead Producer',
    category: 'leadership',
    bio: 'Expert in project management and client relations, ensuring every production runs smoothly.',
    image: '/images/team/sarah.jpg',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'Director of Photography',
    category: 'production',
    bio: 'Master of visual storytelling with expertise in cinematography and lighting design.',
    image: '/images/team/marcus.jpg',
    socials: { vimeo: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Emily Zhang',
    role: 'Lead Editor',
    category: 'post',
    bio: 'Creative editor specializing in narrative structure and post-production workflows.',
    image: '/images/team/emily.jpg',
    socials: { vimeo: '#' },
  },
  {
    id: '5',
    name: 'David Kumar',
    role: 'Sound Designer',
    category: 'post',
    bio: 'Audio specialist creating immersive soundscapes and original music compositions.',
    image: '/images/team/david.jpg',
    socials: { linkedin: '#' },
  },
  {
    id: '6',
    name: 'Lisa Park',
    role: 'Motion Graphics Artist',
    category: 'post',
    bio: 'Visual effects artist bringing brands to life through stunning motion graphics and animation.',
    image: '/images/team/lisa.jpg',
    socials: { instagram: '#', vimeo: '#' },
  },
];

const categories = [
  { id: 'all', label: 'All Team' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'production', label: 'Production' },
  { id: 'post', label: 'Post Production' },
];

export function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMembers = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <Container className="bg-gray-50">
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
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          variants={fadeInUp}
        >
          Our talented team of creators, producers, and technical experts work together 
          to bring your vision to life.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        key={selectedCategory} // Force re-animation when category changes
      >
        {filteredMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
            {...hoverLift}
          >
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
              <p className="text-brand-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              
              <div className="flex space-x-3">
                {member.socials.linkedin && (
                  <a 
                    href={member.socials.linkedin}
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <div className="w-5 h-5 bg-current" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a 
                    href={member.socials.instagram}
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                    aria-label={`${member.name} Instagram`}
                  >
                    <div className="w-5 h-5 bg-current" />
                  </a>
                )}
                {member.socials.vimeo && (
                  <a 
                    href={member.socials.vimeo}
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                    aria-label={`${member.name} Vimeo`}
                  >
                    <div className="w-5 h-5 bg-current" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}