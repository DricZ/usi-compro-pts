"use client";

import React, { useMemo, useCallback } from "react";
import { ShieldCheck, Leaf, GraduationCap, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface CommitmentItem {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const CommitmentSection: React.FC = () => {
  const commitments = useMemo<CommitmentItem[]>(
    () => [
      {
        id: 1,
        title: "Safe & Responsible Operations",
        description:
          "We maintain strict safety protocols to ensure every activity is executed responsibly and in compliance with industry standards.",
        Icon: ShieldCheck,
      },
      {
        id: 2,
        title: "Environmental Protection",
        description:
          "We reduce operational impact through efficient resource use, emissions awareness, and adherence to environmental regulations.",
        Icon: Leaf,
      },
      {
        id: 3,
        title: "Employee Training & Awareness",
        description:
          "We empower our workforce with continuous HSE training to strengthen safety culture and emergency readiness.",
        Icon: GraduationCap,
      },
      {
        id: 4,
        title: "Continuous Monitoring & Risk Prevention",
        description:
          "We proactively identify potential hazards, monitor performance, and implement preventive measures to ensure operational reliability.",
        Icon: Activity,
      },
    ],
    []
  );

  const handleCardClick = useCallback((title: string) => {
    console.log(`User tertarik dengan komitmen: ${title}`);
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen bg-white overflow-hidden"
      aria-labelledby="commitment-title"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-2/5 bg-linear-to-br from-[#1e2a78] via-[#1F1F77] to-[#2B2BA9] p-8 md:p-16 flex flex-col justify-center text-white"
      >
        <h2
          id="commitment-title"
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          How do we commitment?
        </h2>
        <p className="text-lg text-blue-100/80 leading-relaxed max-w-md">
          We prioritize the well-being of our employees, communities, and the
          environment through rigorous standards and proactive measures.
          Here&apos;s how we uphold our HSE commitment:
        </p>
      </motion.div>

      <div className="lg:w-3/5 p-8 md:p-16 bg-white flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {commitments.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item.title)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                <item.Icon className="w-6 h-6 text-gray-400 group-hover:text-[#282a53]" />
              </div>

              <h3 className="text-xl font-bold text-[#282a53] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
