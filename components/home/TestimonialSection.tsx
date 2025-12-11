// components/home/TestimonialSection.tsx

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card } from "../ui/card";

// Ddata
const testimonialsData = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididun",
    name: "Erick Tohir",
    title: "CEO PT Akrab bersama",
  },
  {
    id: 2,
    quote: "Sangat puas dengan layanan yang diberikan. Prosesnya cepat, aman, dan komunikasinya sangat baik. Sangat direkomendasikan.",
    name: "Joko Susilo",
    title: "Direktur PT Jaya Abadi",
  },
  {
    id: 3,
    quote: "Layanan logistik yang andal dan tepat waktu. Kami tidak perlu khawatir lagi mengenai pengiriman kargo dalam jumlah besar. Profesional!",
    name: "Siti Nurhaliza",
    title: "Manajer Operasi Maju Terus",
  },
  {
    id: 4,
    quote: "Produk yang ditawarkan sangat berkualitas. Kerjasama yang terjalin selama ini berjalan sangat baik dan saling menguntungkan.",
    name: "Ahmad Dani",
    title: "Founder Global Solusi",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="font-heading text-4xl font-extrabold text-gray-800 mb-2">
          What Our Client Are Saying
        </h3>
        <p className="text-gray-600">
          Driving success together with integrity and commitment.
        </p>
      </div>
      
      {/* Kontainer Carousel */}
      <div className="flex justify-center w-full">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 p-4 lg:basis-1/3">
                
                {/* Card */}
                <Card className="h-full flex flex-col p-0 overflow-hidden shadow-md">
                    <div className="p-6 bg-white grow">
                        <div className="text-5xl font-serif font-extrabold text-blue-800 mb-1 leading-none">
                            “
                        </div>
                        <p className="text-gray-700 italic">
                            {testimonial.quote}
                        </p>
                    </div>

                    <div className="bg-gray-100 p-6 border-t border-gray-200">
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-10">
              <CarouselPrevious className="relative top-auto left-auto mr-4" />
              <CarouselNext className="relative top-auto right-auto ml-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;