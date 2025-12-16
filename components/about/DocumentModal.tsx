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

interface DocumentModalProps {
    triggerButton: React.ReactNode; 
    docTitle: string;
    docImage: string; 
}

const DocumentModal: React.FC<DocumentModalProps> = ({ triggerButton, docTitle, docImage }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl p-0 border-none bg-transparent shadow-none">
        <DialogTitle className="sr-only">{docTitle} Preview</DialogTitle>
        <DialogDescription className="sr-only">Document preview opened successfully.</DialogDescription>

        {/* konten */}
        <div className="relative w-full h-[85vh] md:h-[90vh]">
            <Image
                src={docImage}
                alt={docTitle}
                layout="fill"
                objectFit="contain" 
                priority
                className="rounded-2xl"
            />

            {/* close btn */}
            <DialogClose 
                className="absolute top-1 right-1 md:top-5 md:-right-5 z-50 
                           w-12 h-12 md:w-12 md:h-12 rounded-full 
                           bg-[#d73f38] text-white 
                           flex items-center justify-center 
                           shadow-2xl opacity-100 transition-opacity hover:opacity-90
                           data-[state=open]:bg-[#d73f38] data-[state=open]:text-white"
            >
                <X className="h-8 w-8 stroke-2" />
            </DialogClose>
        </div>
        
      </DialogContent>
    </Dialog>
  )
}

export default DocumentModal