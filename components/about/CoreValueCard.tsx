import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  iconPath: string;
}

const CoreValueCard: React.FC<CardProps> = ({ title, description, iconPath }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md h-full">
        <div className="relative w-24 h-24 mb-6 bg-[#282a53] rounded-full flex items-center justify-center shadow-lg">
            <Image
                src={iconPath} 
                alt={`${title} Icon`}
                width={50} 
                height={50}
            />
        </div>
        
        {/* Judul */}
        <h3 className="text-xl font-extrabold text-[#282a53] mb-3"> 
            {title}
        </h3>
        
        {/* Deskripsi */}
        <p className="text-sm text-gray-600 text-center leading-relaxed">
            {description}
        </p>
    </div>
  );
};

export default CoreValueCard;