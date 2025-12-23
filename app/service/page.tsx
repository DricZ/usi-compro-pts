"use client";

import ContactSection from '@/components/service/ContactSection'
import ServicesSection from '@/components/service/ServiceSection'
import React from 'react'
import { motion } from 'framer-motion'

const service = () => {
  return (
    <div>
      <section className="pt-15 pb-5 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-[#282a53] mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            We provide tailored made liquid bulk shipping services. With liquid cargo specialists, we handle diverse range of liquid products.
          </motion.p>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ServicesSection/>
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default service