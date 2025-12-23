"use client"

import { servicesData } from './servicesData';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="px-4 sm:px-8 py-12 bg-white max-w-7xl mx-auto text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;