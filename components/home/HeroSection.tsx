"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const subtitleColor = "text-[#8B8B8B]"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function HeroSection() {
  return (
    <motion.section className="py-10 px-4 sm:px-8 text-center bg-linear-to-t from-orange-100 to-white" variants={containerVariants} initial="hidden" animate="visible"> 
      <motion.h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4" variants={itemVariants}>
        Delivering Reliable
      </motion.h1>
      
      {/* Judul 2 */}
      <motion.h2 
        className="font-heading text-4xl sm:text-5xl font-extrabold mb-8 text-indigo-900" variants={itemVariants}>
        Energy & Marine Logistics Solutions
      </motion.h2>
      
      {/* Subtitle */}
      <motion.p className={`font-body text-xl mx-auto ${subtitleColor} mb-3`} variants={itemVariants}>
        Delivering safe, efficient, and reliable marine fuel and shipping solutions across Indonesia.
      </motion.p>

      <motion.div className="mt-10" variants={itemVariants}>
        <div className="flex flex-wrap justify-center gap-4 mx-auto">
          
          {/* 1 */}
          <motion.div className="w-full sm:w-1/2 md:w-[32%]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} > 
            <Image
              src="/ship1.png"
              alt="Kapal Tanker Saat Senja"
              width={300}
               height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* 2 */}
          <motion.div className="w-full sm:w-1/2 md:w-[32%]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
            <Image
              src="/ship2.png"
              alt="Kapal di Tengah Laut"
              width={300}
              height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* 3 */}
          <motion.div className="w-full sm:w-1/2 md:w-[32%]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
            <Image
              src="/ship3.png"
              alt="Kapal dari Atas"
              width={300}
               height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
    </motion.div>
      
    </motion.section>
  );
}