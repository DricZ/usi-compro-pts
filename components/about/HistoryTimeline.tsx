"use client";

import React, { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HistoryTimeline = () => {
  const historyData = useMemo(() => [
    {
        year: 2019,
        title: "84,490,000 Liters",
        description: "Baseline Performance Year: The starting point of the data used for internal performance before major capacity expansion.",
        imageSrc: "/history2019.png"
    },
    {
        year: 2020,
        title: "116,025,000 Liters",
        description: "Initial Growth Leap: Volume surpassed the 100 Million Liters mark, indicating significant expansion in logistics capacity.",
        imageSrc: "/history2020.png"
    },
    {
        year: 2021,
        title: "176,825,000 Liters",
        description: "All-Time High Volume: Recorded the highest volume in this period marking a peak in demand or operational capacity.",
        imageSrc: "/history2021.png"
    },
    {
        year: 2022,
        title: "95,860,000 Liters",
        description: "Performance Correction: Volume experienced a sharp decline potentially due to market fluctuations.",
        imageSrc:"/history2022.png"
    },
    {
        year: 2023,
        title: "70,550,000 Liters",
        description: "Lowest Performance Point: Reached the lowest volume in the seven-year period, representing a challenging year.",
        imageSrc: "/history2023.png"
    },
    {
        year: 2024,
        title: "106,290,000 Liters",
        description: "Recovery Phase: Volume successfully rebounded past the 100 Million Liters baseline, indicating successful adaptation.",
        imageSrc: "/history2019.png"
    },
    {
        year: 2025,
        title: "170,000,000 Liters",
        description: "Major Projection: Volume is projected to near the 2021 high, reflecting aggressive growth targets. (Data ON PROGRESS)",
        imageSrc: "/history2019.png"
    },
  ], []);

  const handleItemClick = useCallback((year: number) => {
    console.log(`User exploring history for ${year}`);
  }, []);

  return (
    <section className="pb-20 bg-white overflow-hidden" aria-labelledby="timeline-title">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <p className="text-l text-gray-600 leading-relaxed">
            Our seven-year operational history demonstrates significant market adaptability and robust performance.
            Following a major growth leap in 2020 and achieving an All-Time High volume of 176.8 Million Liters in 2021,
            the company successfully navigated a sharp market correction in the following two years. With a strong recovery
            effort evident in 2024, our projected 2025 volume of 170 Million Liters underscores our aggressive expansion targets
            and commitment to market resilience.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform md:-translate-x-1/2 origin-top" 
          />

          <div className="space-y-24">
            {historyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`relative flex flex-col md:flex-row items-center justify-center md:gap-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-[25%] flex ${isEven ? 'justify-start md:justify-end' : 'justify-start md:justify-start'} pl-16 md:pl-0`}
                  >
                    <time className="text-6xl md:text-8xl font-black text-gray-300 group-hover:text-blue-900 transition-colors duration-300">
                      {item.year}
                    </time>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-900 border-4 border-white shadow-md z-10" 
                  />

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`w-full md:w-[25%] pl-16 md:pl-0 mt-4 md:mt-0 ${isEven ? 'text-left' : 'md:text-right'}`}
                  >
                    <div className="group cursor-pointer" onClick={() => handleItemClick(item.year)}>
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-6">
                        <Image 
                          src={item.imageSrc} 
                          alt={`History ${item.year} - ${item.title}`} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-[#282a53] group-hover:text-red-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;