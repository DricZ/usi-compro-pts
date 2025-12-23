// components/about/TimelineItem.tsx

import React from "react";
import Image from "next/image";

interface TimelineItemProps {
  year: number;
  title: string;
  description: string;
  imageSrc: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex relative items-start">
      <div className="flex flex-col items-center mr-6">
        <div className="z-10 w-20 h-20 rounded-full font-bold bg-[#282a53] flex items-center justify-center text-white text-sm shadow-md shrink-0">
          <h1>{year}</h1>
        </div>
      </div>

      {/* konten */}
      <div className="pb-16 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={`Volume Milestone ${year}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <p className="text-xl font-extrabold text-[#282a53] mb-1">
            {title} Liters
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
