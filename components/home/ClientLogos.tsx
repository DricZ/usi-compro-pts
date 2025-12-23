"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, src: "/pps.png", alt: "PPS Logistics", size: 90 },
  { id: 2, src: "/pertamina.png", alt: "Pertamina", size: 90 },
  { id: 3, src: "/akr.png", alt: "AKR Corporindo", size: 90 },
  { id: 4, src: "/usi.png", alt: "USI Petrotrans", size: 90 },
  { id: 5, src: "/dutabahari.png", alt: "Duta Bahari", size: 90 },
  { id: 6, src: "/sinarmas.png", alt: "Sinarmas Group", size: 90 }, 
];

const ClientLogos = () => {
    const [radius, setRadius] = useState({ x: 220, y: 180 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setRadius({ x: 130, y: 120 });
            } else {
                setRadius({ x: 220, y: 180 });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const centerLogo = partners.find(p => p.id === 3); 
    const surroundingLogos = partners.filter(p => p.id !== 3); 

  return (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
          
      {centerLogo && (
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-10 flex items-center justify-center bg-white rounded-full shadow-lg p-4 border border-gray-50"
          style={{ width: '140px', height: '140px' }}
        >
          <Image
            src={centerLogo.src}
            alt={centerLogo.alt}
            width={centerLogo.size}
            height={centerLogo.size}
            className="object-contain"
          />
        </motion.div>
      )}

      {surroundingLogos.map((partner, index) => {
        const angle = (index / surroundingLogos.length) * (2 * Math.PI) - (0.5 * Math.PI);
        const x = Math.cos(angle) * radius.x;
        const y = Math.sin(angle) * radius.y;

        return (
          <motion.div 
            key={partner.id} 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
                x: x,
                y: [y, y - (index % 2 === 0 ? 12 : -12), y],
            }}
            transition={{ 
                y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 }
            }}
            className="absolute flex items-center justify-center bg-white rounded-full shadow-lg p-3 border border-gray-100"
            style={{ 
              width: '140px', 
              height: '140px', 
              left: '50%', 
              top: '50%', 
              marginLeft: '-50px', 
              marginTop: '-50px' 
            }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.size}
              height={partner.size}
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ClientLogos;