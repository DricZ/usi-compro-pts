"use client";

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { LayoutGrid } from 'lucide-react';
import ClientListModal from './ClientListModal';

interface ClientLogo {
  id: number;
  src: string;
  alt: string;
}

const ClientsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <section id="clients-list" className="py-16 md:py-24 bg-gray-50 overflow-hidden" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16 text-center">
        <h2 id="clients-heading" className="text-3xl md:text-4xl font-extrabold text-[#282a53] mb-4">
          Clients & Partners
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4">
          We collaborate with companies from various industries, providing dependable liquid cargo transportation.
        </p>
      </div>

      <div className="group relative flex overflow-x-hidden py-3 md:py-5">
        <div className="flex animate-marquee-fast-left whitespace-nowrap">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div 
              key={`top-${logo.id}-${index}`} 
              className="mx-2 md:mx-4 flex items-center justify-center bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 w-40 h-20 md:w-[220px] md:h-[120px] p-4 md:p-6"
            >
              <div className="relative w-full h-full">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="group relative flex overflow-x-hidden py-3 md:py-5">
        <div className="flex animate-marquee-fast-right whitespace-nowrap">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div 
              key={`bottom-${logo.id}-${index}`} 
              className="mx-2 md:mx-4 flex items-center justify-center bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 w-40 h-20 md:w-[220px] md:h-[120px] p-4 md:p-6"
            >
              <div className="relative w-full h-full">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-12 flex justify-center px-4">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto bg-[#d73f38] hover:bg-[#a9322c] text-white px-8 py-6 rounded-lg font-bold shadow-lg transition-all flex gap-3 items-center justify-center"
        >
          <LayoutGrid size={20} />
          View All Clients
        </Button>
      </div>

      <ClientListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        @keyframes marqueeFastLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeFastRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Animasi lebih lambat di mobile agar tidak pusing */
        .animate-marquee-fast-left {
          animation: marqueeFastLeft 20s linear infinite;
        }
        .animate-marquee-fast-right {
          animation: marqueeFastRight 20s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee-fast-left, .animate-marquee-fast-right {
            animation-duration: 30s;
          }
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