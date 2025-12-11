// components/home/ClientLogos.tsx

import React from 'react';
import Image from 'next/image';

const partners = [
  { id: 1, src: "/pps.png", alt: "PPS", size: 100, animation: 'float' },
  { id: 2, src: "/pertamina.png", alt: "Pertamina", size: 100, animation: 'float-reverse' },
  { id: 3, src: "/akr.png", alt: "AKR", size: 100, animation: 'float-center' },
  { id: 4, src: "/usi.png", alt: "USI", size: 100, animation: 'float-reverse' },
  { id: 5, src: "/dutabahari.png", alt: "Databahari", size: 100, animation: 'float' },
  { id: 6, src: "/sinarmas.png", alt: "Sinarmas", size: 100, animation: 'float-reverse' }, 
];

const getAnimationClass = (anim: string) => {
    const duration = `${Math.random() * 4 + 5}s`;
    const delay = `${Math.random() * 2}s`;
    const timing = "ease-in-out infinite alternate";
    return {
        animation: `${anim.includes('float') ? anim.replace('-center', '') : anim} ${duration} ${delay} ${timing}`,
    };
};

const getLogoPosition = (index: number, total: number) => {
    const RADIUS_X = 200; 
    const RADIUS_Y = 170; 
    const angle = (index / total) * (2 * Math.PI) - (0.5 * Math.PI); 
    const x = Math.cos(angle) * RADIUS_X;
    const y = Math.sin(angle) * RADIUS_Y;

    return { 
        top: `calc(50% + ${y}px)`, 
        left: `calc(50% + ${x}px)`,
        transform: `translate(-50%, -50%)`,
    };
};

const ClientLogos = () => {
    const centerLogo = partners.find(p => p.id === 3); 
    const surroundingLogos = partners.filter(p => p.id !== 3); 

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          
      {centerLogo && (
        <div 
          key={centerLogo.id} 
          className={`absolute flex items-center justify-center bg-white rounded-full shadow-lg p-3 z-10`}
          style={{
            width: `${centerLogo.size * 1.5}px`, 
            height: `${centerLogo.size * 1.5}px`,
            top: '50%', 
            left: '50%',
            transform: `translate(-50%, -50%)`,
            ...getAnimationClass(centerLogo.animation)
          }}
        >
          <Image
            src={centerLogo.src}
            alt={centerLogo.alt}
            width={centerLogo.size}
            height={centerLogo.size}
            objectFit="contain"
          />
        </div>
      )}

      {surroundingLogos.map((partner, index) => (
        <div 
          key={partner.id} 
          className={`absolute flex items-center justify-center bg-white rounded-full shadow-lg p-3`}
          style={{
            width: `${partner.size * 1.5}px`, 
            height: `${partner.size * 1.5}px`,
            ...getLogoPosition(index, surroundingLogos.length),
            ...getAnimationClass(partner.animation)
          }}
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={partner.size}
            height={partner.size}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;