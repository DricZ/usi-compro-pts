"use client"

import { motion, Variants } from 'framer-motion';

const paragraphColor = "text-[#8B8B8B]"; 

const cardVariant: Variants = { 
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0, 0, 0.2, 1] 
    }
  },
};

export default function ServiceSection() {
  return (
    <section className="py-10 px-5 sm:px-8 bg-indigo-900 bg-linear-to-b from-[#1F1F77] to-indigo-950 font-body"> 
      <motion.div className=" mx-auto bg-white p-25 rounded-3xl shadow-2xl" variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} >
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0" >
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight text-indigo-900">
              What Solutions 
              <br />
              We Offer?
            </h2>
          </div>
                    
          <div className="md:w-1/2">
            <p className={`text-xl sm:text-l mb-6 ${paragraphColor}`}>
              We provide tailored made liquid bulk shipping services. 
              With liquid cargo specialists, we handle diverse range of liquid products.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}