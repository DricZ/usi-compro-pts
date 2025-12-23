"use client";

import CoreValues from "@/components/about/CoreValues";
import DocumentSection from "@/components/about/DocumentSection";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import JoinUsSection from "@/components/about/JoinUsSection";
import LogisticMilestones from "@/components/about/LogisticMilestone";
import VisionMission from "@/components/about/VisionMission";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-hidden">
      <section className="pt-15 pb-5 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-[#282a53] mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            USI Petrotrans Samudra is a global logistic and maritime
            transportation company specializing in liquid bulk shipments. With
            rising demands of sustainable and reliable liquid bulk
            transportations in domestic and international waters, our company is
            thus created to cope with tailored shipping solutions.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
             USI Petrotrans Samudra is established in 2019 with focus to serve
            primarily domestic clients; and we have history of managing and
            performing shipments for our holding company since 2008.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <VisionMission />
        <CoreValues />
        <LogisticMilestones />
        <HistoryTimeline />
        <DocumentSection />
        <JoinUsSection />
      </motion.div>
    </div>
  );
};

export default About;