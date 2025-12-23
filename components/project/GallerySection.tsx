"use client";

import React, { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

const GallerySection: React.FC = () => {
  
  const galleryImages = useMemo<GalleryImage[]>(() => [
    {
      id: 1,
      src: "/Gallery_1.png",
      alt: "Vessel transporting industrial equipment at sea",
      className: "col-span-12 md:col-span-3 h-[300px] md:h-[400px]",
    },
    {
      id: 2,
      src: "/Gallery_2.png",
      alt: "Aerial top-down view of a cargo ship navigating ocean waves",
      className: "col-span-12 md:col-span-6 h-[300px] md:h-[400px]",
    },
    {
      id: 3,
      src: "/Gallery_3.png",
      alt: "Logistics worker in orange safety vest performing inspection",
      className: "col-span-12 md:col-span-3 h-[300px] md:h-[400px]",
    },
    {
      id: 4,
      src: "/Gallery_4.png",
      alt: "Large white industrial storage tanks for petroleum products",
      className: "col-span-12 md:col-span-8 h-[250px] md:h-[350px]",
    },
    {
      id: 5,
      src: "/Gallery_5.png",
      alt: "Captain in the cockpit monitoring cargo ship navigation systems",
      className: "col-span-12 md:col-span-4 h-[250px] md:h-[350px]",
    },
  ], []);

  const handleImageClick = useCallback((id: number) => {
    console.log(`Image ${id} clicked - Ready for lightbox integration`);
  }, []);

  return (
    <section 
      className="py-10 px-4 sm:px-8 bg-white" 
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="gallery-title" className="sr-only">Our Logistics Operations Gallery</h2>

        <div className="grid grid-cols-12 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              onClick={() => handleImageClick(image.id)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className={`relative overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:scale-[1.01] cursor-pointer ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={image.id <= 3}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;