"use client"

import Image from "next/image"
import React, { useState } from "react"
import { X } from "lucide-react" 
import { motion, AnimatePresence } from "framer-motion"

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {triggerButton}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#282a53]/40 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-white outline-none"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 z-30 transition-all outline-none"
              >
                <X size={18} />
              </button>

              <div className="relative w-full h-55 overflow-hidden">
                  <Image
                      src={serviceImage}
                      alt={serviceTitle}
                      layout="fill"
                      objectFit="cover" 
                  />
              </div>

              <div className="p-8 pt-8 text-center">
                  <h3 className="text-2xl font-extrabold text-[#282a53] mb-4 mt-2">{serviceTitle}</h3>
                  <p className="text-base text-gray-600 leading-relaxed text-center">{serviceDetail}</p>
              </div>
              
              <div className={`absolute top-[210px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#282a53] flex items-center justify-center rounded-full shadow-xl z-20`}>
                  <Icon className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ServiceModal