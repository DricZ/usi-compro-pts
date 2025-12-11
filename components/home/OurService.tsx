import React from "react";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card } from "../ui/card";

// Data
const servicesData = [
  { 
    title: "Petroleum & Petrochemicals", 
    image: "/petroleum.png",
    alt: "Petroleum & Petrochemicals",
  },
  { 
    title: "Palm Products", 
    image: "/palm.png",
    alt: "Palm Products",
  },
  { 
    title: "Real Time Cargo Monitoring", 
    image: "/monitor.png",
    alt: "Real Time Cargo Monitoring",
  },
  { 
    title: "Chemichal Type II & III", 
    image: "/chemical.png",
    alt: "Chemichal Type II & III",
  },
  { 
    title: "Custom Contract Arrangement", 
    image: "/contract.png",
    alt: "Custom Contract Arrangement",
  },
  { 
    title: "Vendor Held Stock (VHS) Handling", 
    image: "/vhs.png",
    alt: "Vendor Held Stock (VHS) Handling",
  },
];

const OurService = () => {
  return (
    <section className="py-10 px-4 sm:px-8 text-center bg-white">
      <h3 className="font-heading text-3xl sm:text-4xl font-extrabold mb-3 text-gray-800">
        Our Service
      </h3>
      
      <div className="flex justify-center w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent className="ml-4 h-fit py-10">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="px-3 border-none hover:shadow-xl rounded-xl transition-shadow duration-300">

                  {/* Content */}
                  <div className="w-full h-45 relative rounded-t-2xl"> 
                    <Image
                      src={service.image} 
                      alt={service.alt} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-md"
                    />
                  </div>
                  
                  <div className="py-4">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">
                      {service.title}
                    </h4>
                    <button className="w-full py-2 bg-[#d73f38] text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
                      Detail
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 hidden md:flex" />
          <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default OurService;