"use client"

import React from "react"
import { X, Building2 } from "lucide-react" 
import { motion, AnimatePresence } from "framer-motion"

interface ClientListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ClientListModal: React.FC<ClientListModalProps> = ({ isOpen, onClose }) => {
  const clients = [
    "PT United Shipping Indonesia", "PT Petroprima Sejahtera", "PT AKR Corporindo",
    "PT AKR Sea Transport", "PT Dutabahari Menara Line", "PT Indomobil Prima Energi",
    "PT Interport Mandiri Utama", "PT Sinaralam Dutaperdana II", "PT Triputra Energi Megatara",
    "PT Pertamina (PERSERO)", "PT Patra Logistic", "Kuala Lumpur Kepong (KLK)",
    "PT Sinarmas Agro SMART", "PT Kutai Refinery Nusantara (KRN) Apical",
    "PT Indo Tambangraya Megah (ITMG)", "PT Kalimantan Prima Persada (Subsidiary PAMA)",
    "PT Putra Perkasa Abadi", "PT Wilmar Nabati Indonesia"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#282a53]/40 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-white outline-none flex flex-col max-h-[85vh]"
          >
            <div className="p-8 bg-gray-50 border-b flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#282a53]">Clients We Serve</h3>
                <p className="text-sm text-gray-500">Trusted by industry leaders across Indonesia</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#282a53]/5 transition-colors group">
                    <Building2 className="text-[#282a53] opacity-40 group-hover:opacity-100 transition-opacity mt-1 shrink-0" size={18} />
                    <span className="text-[#282a53] font-medium leading-tight">{client}</span>
                  </div>
                ))}
              </div>
            </div>            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ClientListModal