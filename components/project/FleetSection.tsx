"use client";

import React, { useMemo, useState } from 'react';
import { ArrowUpRight, X, Anchor, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Vessel {
  id: number;
  name: string;
  capacity: string;
  image: string;
  description: string;
  type: string;
}

const FleetSection: React.FC = () => {
  const [selectedVessel, setSelectedVessel] = useState<Vessel | null>(null);

  const fleetData = useMemo<Vessel[]>(() => [
    { 
      id: 1, name: "SPOB NORLHA 2", capacity: "250.000 LITERS", type: "SPOB",
      image: "/Gallery_4.png", 
      description: "A specialized Self-Propelled Oil Barge optimized for high-precision fuel distribution in coastal and riverine environments. Its compact design allows for superior maneuverability in restricted waterways."
    },
    { 
      id: 2, name: "SPOB NORLHA 3", capacity: "650.000 LITERS", type: "SPOB",
      image: "/Gallery_4.png",
      description: "Engineered for medium-scale logistics, this vessel features reinforced cargo tanks and advanced pumping systems to ensure the integrity of refined petroleum products during transit."
    },
    { 
      id: 3, name: "SPOB NORLHA 6", capacity: "500.000 LITERS", type: "SPOB",
      image: "/Gallery_4.png",
      description: "Reliable and efficient, Norlha 6 serves as a key asset in our inter-island supply chain, maintaining strict safety protocols for liquid bulk transportation."
    },
    { 
      id: 4, name: "SPOB PETRO OCEAN VII", capacity: "1.200.000 LITERS", type: "SPOB",
      image: "/Gallery_4.png",
      description: "Our flagship high-capacity SPOB, designed for large-scale industrial fuel delivery. It integrates modern navigation and cargo monitoring for maximum operational accountability."
    },
    { 
      id: 5, name: "TB TASHI", capacity: "2 X 1030 HP", type: "Tugboat",
      image: "/Gallery_4.png",
      description: "A high-performance twin-engine tugboat delivering over 2000 HP of combined power. Built for heavy-duty towing and assisting large vessels in demanding maritime conditions."
    },
    { 
      id: 6, name: "TB TASHI 2", capacity: "2 X 600 HP", type: "Tugboat",
      image: "/Gallery_4.png",
      description: "Optimized for harbor maneuvers and coastal escort services, providing consistent stability and reliable bollard pull for barge operations."
    },
    { 
      id: 7, name: "ARTNAUSA TB 01", capacity: "2 X 500 HP", type: "Tugboat",
      image: "/Gallery_4.png",
      description: "A robust support tugboat specializing in barge handling and logistics. Its efficient engine configuration ensures reliable long-term performance for coastal hauls."
    },
    { 
      id: 8, name: "TB ROYAL 7", capacity: "2 X 600 HP", type: "Tugboat",
      image: "/Gallery_4.png",
      description: "Designed for versatility, Royal 7 provides essential towing power for our oil barge fleet, maintaining the pace of our liquid bulk supply operations."
    },
    { 
      id: 9, name: "OB STEENKOOL 1", capacity: "2.000.000 LITERS", type: "Oil Barge",
      image: "/Gallery_4.png",
      description: "A high-volume non-propelled oil barge that acts as a reliable floating storage and transport unit for massive energy resource movements."
    },
    { 
      id: 10, name: "OB PHUNTSOG", capacity: "2.000.000 LITERS", type: "Oil Barge",
      image: "/Gallery_4.png",
      description: "Built for durability and large-scale cargo intake, this barge features segmented tanks to manage bulk shipments with high efficiency and safety."
    },
    { 
      id: 11, name: "OB PHUNTSOG 2", capacity: "500.000 LITERS", type: "Oil Barge",
      image: "/Gallery_4.png",
      description: "A specialized barge for smaller-scale industrial deliveries, offering flexible logistics solutions for ports with draft or size limitations."
    },
    { 
      id: 12, name: "OB ROYAL 7", capacity: "3.500.000 LITERS", type: "Oil Barge",
      image: "/Gallery_4.png",
      description: "One of our most significant strategic assets, providing massive storage capacity for regional fuel reserves and large bulk transfers."
    },
    { 
      id: 13, name: "OB PRIMA SAKTI 128", capacity: "4.000.000 LITERS", type: "Oil Barge",
      image: "/Gallery_4.png",
      description: "The peak of our logistical scale. This 4 million liter capacity barge is essential for heavy-volume energy transport, ensuring consistent supply for major industrial clients."
    },
  ], []);

  return (
    <section className="py-16 px-6 md:px-15 bg-white relative" aria-labelledby="fleet-overview-title">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-orange-500 p-1 rounded-sm">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
          <h2 id="fleet-overview-title" className="text-2xl font-bold text-[#282a53]">
            Fleet Overview
          </h2>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-gray-100">
              {fleetData.map((vessel, index) => (
                <motion.tr 
                  key={vessel.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedVessel(vessel)}
                  className={`
                    group cursor-pointer transition-all duration-300
                    ${index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'}
                    hover:bg-blue-50/80
                  `}
                >
                  <td className="py-5 px-6 md:px-10 text-sm md:text-lg font-semibold text-gray-600 uppercase tracking-tight group-hover:text-blue-900">
                    {vessel.name}
                  </td>
                  <td className="py-5 px-6 text-sm md:text-lg font-extrabold text-[#282a53] text-right md:text-center">
                    {vessel.capacity}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-sm text-gray-400 italic">
          * Our fleet is maintained to the highest industry standards to ensure safe transport.
        </p>
      </div>

      <AnimatePresence>
        {selectedVessel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedVessel(null)}
              className="absolute inset-0 bg-[#282a53]/40 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-white"
            >
              <button 
                onClick={() => setSelectedVessel(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 z-20 transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 w-full bg-gray-200">
                <Image src={selectedVessel.image} alt={selectedVessel.name} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 p-8 bg-linear-to-t from-black/70 to-transparent w-full">
                    <h3 className="text-3xl font-bold text-white uppercase">{selectedVessel.name}</h3>
                </div>
              </div>
                
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                        <Gauge className="text-orange-500" />
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Capacity / Power</p>
                            <p className="text-sm font-bold text-[#282a53]">{selectedVessel.capacity}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                        <Anchor className="text-blue-900" />
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Status</p>
                            <p className="text-sm font-bold text-[#282a53]">Active Service</p>
                        </div>
                    </div>
                </div>
                
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Vessel Profile</h4>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {selectedVessel.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FleetSection;