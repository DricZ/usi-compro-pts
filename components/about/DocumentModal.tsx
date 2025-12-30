"use client"

import Image from "next/image"
import React, { useState } from "react"
import { X } from "lucide-react" 
import { motion, AnimatePresence } from "framer-motion"

interface DocumentModalProps {
    triggerButton: React.ReactNode; 
    docTitle: string;
    docImage: string; 
}

const DocumentModal: React.FC<DocumentModalProps> = ({ triggerButton, docTitle, docImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {triggerButton}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
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
              className="relative w-full max-w-4xl h-[85vh] md:h-[90vh] z-10 outline-none flex items-center justify-center"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 md:top-5 md:-right-8 p-3 bg-white rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 z-50 transition-all shadow-xl outline-none"
              >
                <X size={24} />
              </button>

              <div className="relative w-full h-full">
                  <Image
                      src={docImage}
                      alt={docTitle}
                      fill
                      className="object-contain rounded-2xl"
                      priority
                  />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DocumentModal