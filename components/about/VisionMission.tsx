"use client";

import React from "react";
import Image from "next/image";
import VisionMissionCard from "./VisionMissionCard";
import { motion } from "framer-motion";

const AbsoluteIcon = ({ iconPath, delay }: { iconPath: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
    whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    className="absolute top-0 left-1/2 z-10 
               w-24 h-24 md:w-28 md:h-28 bg-[#282a53] rounded-full flex items-center justify-center shadow-xl"
  >
    <Image src={iconPath} alt="Icon" width={50} height={50} className="md:w-[55px] md:h-[55px]" />
  </motion.div>
);

const VisionMission = () => {
  const missions = [
    "Provide timely shipping services",
    "Build lasting relationships",
    "Promote sustainable and environmental friendly maritime operations",
    "Prioritize safety work culture",
  ];

  return (
    <section className="pb-16 pt-16 md:pt-20 px-4 sm:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
          
          {/* Visi */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <AbsoluteIcon iconPath="/vision.svg" delay={0.2} />
            <VisionMissionCard title="Vision" isVision={true}>
              <p className="text-lg">
                To be the preferred shipping partner in maritime logistics.
              </p>
            </VisionMissionCard>
          </motion.div>

          {/* Misi */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-20 md:mt-0" 
          >
            <AbsoluteIcon iconPath="/mission.svg" delay={0.6} />
            <VisionMissionCard title="Mission" isVision={false}>
              <ul className="list-disc text-left space-y-3 px-6 text-base md:text-lg">
                {missions.map((mission, index) => (
                  <li key={index} className="text-gray-700">
                    {mission}
                  </li>
                ))}
              </ul>
            </VisionMissionCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;