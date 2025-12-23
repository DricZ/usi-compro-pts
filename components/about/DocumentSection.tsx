"use client";

import { FileText, Award } from 'lucide-react';
import DocumentCard from './DocumentCard';
import { motion } from 'framer-motion';

const documentData = [
    {
        title: "Policies",
        IconComponent: FileText, 
        modalImage: "/Certificate.png", 
    },
    {
        title: "Certifications",
        IconComponent: Award, 
        modalImage: "/Certificate.png", 
    },
];

const DocumentSection = () => {
    return (
        <section className="py-20 px-4 sm:px-8 bg-[#f5f6f8] overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {documentData.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2,
                                ease: "easeOut" 
                            }}
                        >
                            <DocumentCard 
                                title={doc.title}
                                IconComponent={doc.IconComponent} 
                                modalImagePath={doc.modalImage}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocumentSection;