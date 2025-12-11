import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode; 
  isVision: boolean; 
}

const VisionMissionCard: React.FC<CardProps> = ({ title, children, isVision }) => {
  return (
    <div className="relative flex flex-col items-center bg-[#F8F8F8] pt-24 pb-8 px-8 rounded-xl shadow-md min-h-[350px]">
        <h3 className="text-3xl font-bold text-[#282a53] mb-4">
            {title}
        </h3>
        <div className="w-full h-0.5 bg-gray-300 mb-6"></div>
        <div className={`text-gray-700 leading-relaxed w-full ${isVision ? 'text-center' : 'text-left'}`}>
            {children}
        </div>
    </div>
  );
};

export default VisionMissionCard;