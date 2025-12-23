"use client";

import { motion } from 'framer-motion';
const paragraphColor = "text-[#8B8B8B]"; 
export default function ServiceSection() {
  return (
    <section className="py-10 px-4 sm:px-1 bg-linear-to-b from-[#1F1F77] to-indigo-950 font-body overflow-hidden"> 
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white p-10 md:p-25 rounded-3xl shadow-2xl" 
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-indigo-900"
            >
              What Solutions 
              <br />
              We Offer?
            </motion.h2>
          </div>
                    
          <div className="md:w-1/2">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-lg sm:text-xl leading-relaxed ${paragraphColor}`}
            >
              We provide tailored made liquid bulk shipping services. 
              With liquid cargo specialists, we handle diverse range of liquid products.
            </motion.p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}