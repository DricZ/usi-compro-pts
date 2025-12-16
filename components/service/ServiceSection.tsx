"use client"

import { servicesData } from './servicesData';
import ServiceCard from './ServiceCard';



const ServicesSection = () => {
  return (
    <section className="px-4 sm:px-8 bg-white max-w-7xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
    </section>
  );
};

export default ServicesSection;