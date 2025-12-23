"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const subtitleColor = "text-[#8B8B8B]"; 

export default function HeroSection() {
  return (
    <section className="py-10 px-4 sm:px-8 text-center bg-linear-to-t from-orange-100 to-white overflow-hidden">       
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl sm:text-5xl font-extrabold mb-4"
      >
        Delivering Reliable
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-heading text-4xl sm:text-5xl font-extrabold mb-8 text-indigo-900"
      >
        Energy & Marine Logistics Solutions
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`font-body text-xl mx-auto ${subtitleColor} mb-3`}
      >
        Delivering safe, efficient, and reliable marine fuel and shipping solutions across Indonesia.
      </motion.p>

      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-4 mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full sm:w-1/2 md:w-[32%]"
          > 
            <Image
              src="/ship1.png"
              alt="Kapal Tanker USI Logistics"
              width={300}
              height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden sm:block w-full sm:w-1/2 md:w-[32%]"
          >
            <Image
              src="/ship2.png"
              alt="Marine Fuel Indonesia"
              width={300}
              height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="hidden sm:block  w-full sm:w-1/2 md:w-[32%]"
          >
            <Image
              src="/ship3.png"
              alt="Logistik Laut USI"
              width={300}
              height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}