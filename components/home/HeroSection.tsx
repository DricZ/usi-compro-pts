import React from 'react';
import Image from 'next/image';

const subtitleColor = "text-[#8B8B8B]"; 

export default function HeroSection() {
  return (
    <section className="py-10 px-4 sm:px-8 text-center bg-linear-to-t from-orange-100 to-white"> 
      <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4">
        Delivering Reliable
      </h1>
      
      <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-8 text-indigo-900">
        Energy & Marine Logistics Solutions
      </h2>
      
      <p className={`font-body text-xl mx-auto ${subtitleColor} mb-3`}>
        Delivering safe, efficient, and reliable marine fuel and shipping solutions across Indonesia.
      </p>

      <div className="mt-10">
        
        <div className="flex flex-wrap justify-center gap-4 mx-auto"> 
          
          {/* Gambar 1 */}
          <div className="w-full sm:w-1/2 md:w-[32%]"> 
            <Image
              src="/ship1.png"
              alt="Kapal Tanker Saat Senja"
              width={300}
               height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Gambar 2 */}
          <div className="w-full sm:w-1/2 md:w-[32%]">
            <Image
              src="/ship2.png"
              alt="Kapal di Tengah Laut"
              width={300}
              height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Gambar 3 */}
          <div className="w-full sm:w-1/2 md:w-[32%]">
            <Image
              src="/ship3.png"
              alt="Kapal dari Atas"
              width={300}
               height={350}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
          
        </div>
    </div>
      
    </section>
  );
}