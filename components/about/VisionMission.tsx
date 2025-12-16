import React from 'react';
import Image from 'next/image';
import VisionMissionCard from './VisionMissionCard';

const AbsoluteIcon = ({ iconPath }: { iconPath: string }) => (
    <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
                   w-28 h-28 bg-[#282a53] rounded-full flex items-center justify-center shadow-xl">
        <Image
            src={iconPath} 
            alt="Icon"
            width={55} 
            height={55}
        />
    </div>
);


const VisionMission = () => {
    const missions = [
        "Provide timely shipping services",
        "Build lasting relationships",
        "Promote sustainable and environmental friendly maritime operations",
        "Prioritize safety work culture",
    ];

  return (
    <section className="pb-10 px-4 sm:px-8 bg-white">
      <div className=" mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20"> 
          {/* visi */}
          <div className="relative">
             <AbsoluteIcon iconPath="/vision.svg" />
             <VisionMissionCard 
                title="Vision" 
                isVision={true} 
             >
                <p className="text-lg">
                    To be the preferred shipping partner in maritime logistics.
                </p>
             </VisionMissionCard>
          </div>
          
          {/* misi */}
          <div className="relative">
             <AbsoluteIcon iconPath="/mission.svg" /> 
             <VisionMissionCard 
                title="Mission" 
                isVision={false} 
             >
                <ul className="list-disc text-left space-y-3 px-6 text-l">
                    {missions.map((mission, index) => (
                        <li key={index} className="text-gray-700">
                            {mission}
                        </li>
                    ))}
                </ul>
             </VisionMissionCard>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default VisionMission;