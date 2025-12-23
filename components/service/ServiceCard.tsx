"use client"

import React from 'react';
import Image from 'next/image';
import ServiceModal from './ServiceModal';
import { servicesData } from './servicesData';


interface ServiceCardProps {
    service: typeof servicesData[0];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const cardContent = (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-visible group relative">

            <div className="relative w-full h-70 overflow-hidden rounded-t-xl">
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                />
                
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>

            <div className="pt-12 pb-6 px-4 text-center flex flex-col grow">
                <h3 className="text-xl font-bold text-[#282a53] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 grow mb-4">{service.description}</p>
                
                <span className="text-sm font-semibold text-[#282a53] hover:text-[#a9322c] transition-colors duration-200">
                    View Service
                </span>
            </div>
            
            <div className={`absolute top-60 -y-1/2 left-1/2 -translate-x-1/2 w-18 h-18 bg-[#282a53] flex items-center justify-center rounded-full z-10`}>
                 <service.Icon className="h-10 w-10 text-white" />
            </div>
            
        </div>
    );

    return (
        <ServiceModal
            triggerButton={cardContent}
            serviceTitle={service.title}
            serviceDetail={service.modalDetail}
            serviceImage={service.imageUrl}
            Icon={service.Icon} 
        />
    );
};

export default ServiceCard;