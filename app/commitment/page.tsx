"use client";

import CommitmentSection from '@/components/commitment/CommitmentSection'
import React from 'react'
import { motion } from 'framer-motion'

const CommitmentPage = () => {
  return (
    <div className="overflow-hidden">
      <section className="pt-20 pb-10 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#282a53] mb-6"
          >
            Health, Safety, and Environmental Commitment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            At our company, we make sure our commitment to health, safety, and environmental (HSE) excellence is fundamental to our operations and integral to our corporate values.
          </motion.p>
        </div>
      </section>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CommitmentSection/>
      </motion.div>
    </div>
  )
}

export default CommitmentPage;