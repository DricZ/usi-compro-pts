"use client";

import ClientsSection from "@/components/project/ClientsSection";
import FleetSection from "@/components/project/FleetSection";
import GallerySection from "@/components/project/GallerySection";
import React from "react";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <div className="overflow-hidden">
      <section className="pt-15 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-[#282a53] mb-6"
          >
            Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            A showcase of our high-stakes commitment to moving critical
            commodities and energy resources across the globe.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <GallerySection />
        <FleetSection />
        <ClientsSection />
      </motion.div>
    </div>
  );
};

export default ProjectPage;
