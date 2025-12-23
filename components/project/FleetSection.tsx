
"use client";

import React, { useMemo, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Vessel {
  id: number;
  name: string;
  capacity: string;
}

const FleetSection: React.FC = () => {
  const fleetData = useMemo<Vessel[]>(() => [
    { id: 1, name: "SPOB NORLHA 2", capacity: "250.000 LITERS" },
    { id: 2, name: "SPOB NORLHA 3", capacity: "650.000 LITERS" },
    { id: 3, name: "SPOB NORLHA 6", capacity: "500.000 LITERS" },
    { id: 4, name: "SPOB PETRO OCEAN VII", capacity: "1.200.000 LITERS" },
    { id: 5, name: "TB TASHI", capacity: "2 X 1030 HP" },
    { id: 6, name: "TB TASHI 2", capacity: "2 X 600 HP" },
    { id: 7, name: "ARTNAUSA TB 01", capacity: "2 X 500 HP" },
    { id: 8, name: "TB ROYAL 7", capacity: "2 X 600 HP" },
    { id: 9, name: "OB STEENKOOL 1", capacity: "2.000.000 LITERS" },
    { id: 10, name: "OB PHUNTSOG", capacity: "2.000.000 LITERS" },
    { id: 11, name: "OB OHUNTSOG 2", capacity: "500.000 LITERS" },
    { id: 12, name: "OB ROYAL 7", capacity: "3.500.000 LITERS" },
    { id: 13, name: "OB PRIMA SAKTI 128", capacity: "4.000.000 LITERS" },
  ], []);

  const handleRowClick = useCallback((vesselName: string) => {
    console.log(`Menampilkan detail untuk: ${vesselName}`);
  }, []);

  return (
    <section className="py-16 px-6 md:px-15 bg-white" aria-labelledby="fleet-overview-title">
      <div className="w-full mx-auto">
        
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-orange-500 p-1 rounded-sm">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
          <h2 id="fleet-overview-title" className="text-2xl font-bold text-[#282a53]">
            Fleet Overview
          </h2>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="sr-only">
              <tr>
                <th>Vessel Name</th>
                <th>Capacity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fleetData.map((vessel, index) => (
                <tr 
                  key={vessel.id}
                  onClick={() => handleRowClick(vessel.name)}
                  className={`
                    group cursor-pointer transition-colors duration-200
                    ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}
                    hover:bg-blue-50
                  `}
                >
                  <td className="py-4 px-6 md:px-15 text-sm md:text-lg font-medium text-gray-500 uppercase tracking-wider">
                    {vessel.name}
                  </td>
                  <td className="py-4 px-6 text-sm md:text-lg font-bold text-[#282a53] text-center">
                    {vessel.capacity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-sm text-gray-400 italic">
          * Our fleet is maintained to the highest industry standards to ensure safe transport.
        </p>
      </div>
    </section>
  );
};

export default FleetSection;