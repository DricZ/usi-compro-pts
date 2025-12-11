// components/ServiceSection.tsx

import React from 'react';

const paragraphColor = "text-[#8B8B8B]"; 

export default function ServiceSection() {
  return (
    <section className="py-10 px-5 sm:px-8 bg-indigo-900 bg-linear-to-b from-[#1F1F77] to-indigo-950 font-body"> 
      <div className=" mx-auto bg-white p-25 rounded-3xl shadow-2xl">
        <div className="flex flex-col md:flex-row md:gap-12">
          
          {/* Title */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight text-indigo-900">
              What Solutions 
              <br />
              We Offer?
            </h2>
          </div>
          
          {/* Descrription */}
          <div className="md:w-1/2">
            <p className={`text-xl sm:text-l mb-6 ${paragraphColor}`}>
              We provide tailored made liquid bulk shipping services. 
              With liquid cargo specialists, we handle diverse range of liquid products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}