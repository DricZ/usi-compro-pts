// components/about/ClientsSection.tsx

"use client";

import React, { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface ClientLogo {
  id: number;
  src: string;
  alt: string;
}

const ClientsSection: React.FC = () => {
  const allLogos = useMemo<ClientLogo[]>(() => [
    { id: 1, src: "/akr.png", alt: "Mobil Indomobil Logo" },
    { id: 2, src: "/pertamina.png", alt: "Interport Logo" },
    { id: 3, src: "/usi.png", alt: "USI Logo" },
    { id: 4, src: "/pps.png", alt: "PPS Logo" },
    { id: 5, src: "/sinarmas.png", alt: "AKR Logo" },
    { id: 6, src: "/sadp.png", alt: "SADP II Logo" },
    { id: 7, src: "/triputra.png", alt: "Triputra Energi Logo" },
    { id: 8, src: "/pertamina.png", alt: "Pertamina Logo" },
  ], []);

  const logInteraction = useCallback((name: string) => {
    console.log(`Partner view: ${name}`);
  }, []);

  return (
    <section id="clients-list" className="py-24  bg-gray-50 overflow-hidden" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 id="clients-heading" className="text-4xl font-extrabold text-[#282a53] mb-4">
          Clients & Partners
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We collaborate with companies from various industries, providing dependable liquid cargo transportation.
        </p>
      </div>

      <div className="group relative flex overflow-x-hidden py-5">
        <div className="flex animate-marquee-fast-left whitespace-nowrap">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div 
              key={`top-${logo.id}-${index}`} 
              className="mx-4 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 w-[220px] h-[120px] p-6"
              onMouseEnter={() => logInteraction(logo.alt)}
            >
              <div className="relative w-full h-full">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="group relative flex overflow-x-hidden py-5">
        <div className="flex animate-marquee-fast-right whitespace-nowrap">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div 
              key={`bottom-${logo.id}-${index}`} 
              className="mx-4 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 w-[220px] h-[120px] p-6"
            >
              <div className="relative w-full h-full">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        @keyframes marqueeFastLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeFastRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-fast-left {
          animation: marqueeFastLeft 25s linear infinite;
        }
        .animate-marquee-fast-right {
          animation: marqueeFastRight 25s linear infinite; /* Kecepatan sama biar sinkron */
        }

        .group:hover .animate-marquee-fast-left,
        .group:hover .animate-marquee-fast-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;