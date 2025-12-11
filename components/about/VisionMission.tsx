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
    <section className="py-15 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#282a53] mb-6">
          About Us
        </h1>
        <p className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
          USI Petrotrans Samudra is a global logistic and maritime transportation company specializing in liquid bulk shipments. With rising demands of sustainable and reliable liquid bulk transportations in domestic and international waters, our company is thus created to cope with tailored shipping solutions.
        </p>
        <p className="text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
          USI Petrotrans Samudra is established in 2019 with focus to serve primarily domestic clients; and we have history of managing and performing shipments for our holding company since 2008.
        </p>

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
                <ul className="list-disc text-left space-y-3 px-6 text-lg">
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