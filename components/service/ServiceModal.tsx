"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog"
import Image from "next/image"
import React from "react"
import { X } from "lucide-react" 

interface ServiceModalProps {
    triggerButton: React.ReactNode; 
    serviceTitle: string;
    serviceDetail: string;
    serviceImage: string;
    Icon: React.ElementType;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ 
    triggerButton, 
    serviceTitle, 
    serviceDetail, 
    serviceImage, 
    Icon
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-xl p-0 border-none bg-white rounded-2xl shadow-2xl overflow-hidden">
        <DialogTitle className="sr-only">{serviceTitle} Details</DialogTitle>
        <DialogDescription className="sr-only">Details for {serviceTitle} service.</DialogDescription>

        <div className="relative w-full h-48 overflow-hidden">
            <Image
                src={serviceImage}
                alt={serviceTitle}
                layout="fill"
                objectFit="cover" 
            />
        </div>

        <div className="p-8 pt-10 text-center">
            <h3 className="text-2xl font-extrabold text-[#282a53] mb-4 mt-2">{serviceTitle}</h3>
            <p className="text-base text-gray-600 leading-relaxed text-center">{serviceDetail}</p>
        </div>
        
        <div className={`absolute top-[210px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#282a53] flex items-center justify-center rounded-full shadow-xl z-20`}>
            <Icon className="h-8 w-8 text-white" />
        </div>

        <DialogClose 
            className="absolute top-4 right-4 
                       w-8 h-8 rounded-full 
                       bg-[#d73f38] text-white 
                       flex items-center justify-center 
                       opacity-100 transition-opacity hover:opacity-90 z-30"
        >
            <X className="h-4 w-4 stroke-2" />
        </DialogClose>
        
      </DialogContent>
    </Dialog>
  )
}

export default ServiceModal