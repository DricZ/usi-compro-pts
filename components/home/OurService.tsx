"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

const servicesData = [
  { 
    title: "Petroleum & Petrochemicals", 
    image: "/petroleum.png",
    alt: "Petroleum & Petrochemicals Logistics Services",
  },
  { 
    title: "Palm Products", 
    image: "/palm.png",
    alt: "Palm Products Shipping Solutions",
  },
  { 
    title: "Real Time Cargo Monitoring", 
    image: "/monitor.png",
    alt: "Real Time Cargo Monitoring and Security",
  },
  { 
    title: "Sheet Management", 
    image: "/sheetmanagement.png",
    alt: "Sheet Management Handling",
  },
  { 
    title: "Custom Contract Arrangement", 
    image: "/contract.png",
    alt: "Custom Logistics Contract Arrangement",
  },
  { 
    title: "Vendor Held Stock (VHS) Handling", 
    image: "/vhs.png",
    alt: "Vendor Held Stock VHS Handling Management",
  },
];

const OurService = () => {
  return (
    <section className="py-20 px-4 sm:px-8 text-center bg-white overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl sm:text-4xl font-extrabold mb-3 text-gray-800"
      >
        Our Service
      </motion.h3>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center w-full"
      >
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="relative w-full max-w-6xl px-4 md:px-0"
        >
          <CarouselContent className="-ml-4 py-10">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="mx-2 h-full border-none hover:shadow-xl rounded-xl transition-shadow duration-300 bg-white group">
                  <div className="w-full h-48 relative rounded-t-xl overflow-hidden"> 
                    <Image
                      src={service.image} 
                      alt={service.alt} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="py-2 px-4">
                    <h4 className="text-xl font-semibold text-gray-800 min-h-14 flex items-center justify-center">
                      {service.title}
                    </h4>
                    <Link href="/service">
                      <Button className="w-full mb-3 bg-[#d73f38] cursor-pointer text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
                          Detail
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-sm" />
          <CarouselNext className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-sm" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default OurService;