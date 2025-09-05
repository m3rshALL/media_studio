'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

interface Equipment {
  id: string;
  name: string;
  category: string;
  specs: string[];
  image: string;
  description: string;
}

const equipment: Equipment[] = [
  {
    id: '1',
    name: 'RED Komodo 6K',
    category: 'camera',
    specs: ['6K Resolution', 'Global Shutter', '40fps at 6K', 'Raw Recording'],
    image: '/images/equipment/red-komodo.jpg',
    description: 'Professional cinema camera for high-end productions',
  },
  {
    id: '2',
    name: 'Sony FX9',
    category: 'camera',
    specs: ['Full Frame', '4K/120p', 'Dual Base ISO', 'E-Mount'],
    image: '/images/equipment/sony-fx9.jpg',
    description: 'Versatile cinema camera perfect for documentaries and commercials',
  },
  {
    id: '3',
    name: 'ARRI SkyPanel S60-C',
    category: 'lighting',
    specs: ['LED Panel', 'Color Tunable', 'Wireless Control', '850W'],
    image: '/images/equipment/arri-skypanel.jpg',
    description: 'Professional LED lighting for studio and location work',
  },
  {
    id: '4',
    name: 'Aputure 600D',
    category: 'lighting',
    specs: ['600W LED', 'Daylight Balanced', 'Bowens Mount', 'Wireless DMX'],
    image: '/images/equipment/aputure-600d.jpg',
    description: 'Powerful LED light for outdoor and large space illumination',
  },
  {
    id: '5',
    name: 'DJI Ronin 4D',
    category: 'stabilization',
    specs: ['4-Axis Gimbal', 'Built-in Camera', 'LiDAR Focus', 'Wireless Video'],
    image: '/images/equipment/dji-ronin-4d.jpg',
    description: 'All-in-one cinema camera with advanced stabilization',
  },
  {
    id: '6',
    name: 'Steadicam Volt',
    category: 'stabilization',
    specs: ['Electronic Gimbal', '8lb Payload', 'Quick Setup', 'Portable'],
    image: '/images/equipment/steadicam-volt.jpg',
    description: 'Professional stabilizer for smooth camera movements',
  },
  {
    id: '7',
    name: 'Sennheiser MKH 416',
    category: 'audio',
    specs: ['Shotgun Mic', 'Phantom Powered', 'Weather Resistant', 'Broadcast Quality'],
    image: '/images/equipment/sennheiser-mkh416.jpg',
    description: 'Industry standard shotgun microphone for location recording',
  },
  {
    id: '8',
    name: 'Sound Devices MixPre-10T',
    category: 'audio',
    specs: ['10-Input Mixer', '32-bit Float', 'Timecode Sync', 'USB-C Recording'],
    image: '/images/equipment/sound-devices-mixpre.jpg',
    description: 'Professional audio recorder and mixer for multi-track recording',
  },
];

const categories = [
  { id: 'all', label: 'All Equipment', icon: '🎬' },
  { id: 'camera', label: 'Cameras', icon: '📹' },
  { id: 'lighting', label: 'Lighting', icon: '💡' },
  { id: 'stabilization', label: 'Stabilization', icon: '🎯' },
  { id: 'audio', label: 'Audio', icon: '🎧' },
];

export function EquipmentSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  return (
    <Container className="bg-white">
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
          Professional Equipment
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          variants={fadeInUp}
        >
          We use industry-leading equipment to ensure the highest quality output 
          for every project, from intimate shoots to large productions.
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        key={selectedCategory}
      >
        {filteredEquipment.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            variants={scaleIn}
          >
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              
              <div className="space-y-1">
                {item.specs.map((spec, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 text-center bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-8 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-2xl font-display font-bold mb-4">
          Ready to Work with Professional Equipment?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Get access to our full range of professional equipment for your next project.
        </p>
        <motion.a
          href="/contacts"
          className="inline-flex items-center px-8 py-3 bg-white text-brand-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project
        </motion.a>
      </motion.div>
    </Container>
  );
}