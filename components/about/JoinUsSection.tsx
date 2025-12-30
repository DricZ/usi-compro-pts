"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCheck, Zap, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Access to Exclusive Network",
    description:
      "Connect with industry leaders, experienced mentors, and diverse colleagues ready to support your career or business journey.",
    Icon: CheckCheck,
  },
  {
    title: "Real and Significant Impact",
    description:
      "Contribute your ideas and expertise to critical projects that have a direct influence on the industry's progression and the wider community.",
    Icon: Zap,
  },
  {
    title: "Limitless Professional Development",
    description:
      "Gain access to cutting-edge training, workshops, and resources designed to elevate your skills and knowledge in relevant fields.",
    Icon: TrendingUp,
  },
  {
    title: "An Inclusive Work Culture",
    description:
      "Experience a culture that values diversity, promotes collaboration, and ensures every member has an equal opportunity to thrive and excel.",
    Icon: Users,
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-xl bg-white shadow-lg border border-gray-100 flex flex-col justify-center h-full hover:shadow-xl transition-shadow"
  >
    <div className="flex items-start mb-3">
      <div className="w-10 h-10 rounded-full bg-[#282a53] flex items-center justify-center mr-3 shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
    </div>
    <h3 className="text-xl pb-3 text-left font-bold text-[#282a53] leading-tight mt-1">
      {title}
    </h3>
    <p className="text-m text-left text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const JoinUsSection = () => {
  return (
    <section
      id="join-usi"
      className="py-20 md:py-30 px-4 sm:px-8 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#282a53] mb-3">
            The Future is Now. Join USI.
          </h2>
          <p className="text-base text-gray-600 mb-10 md:mb-16 max-w-3xl mx-auto">
            Discover the connections, opportunities, and resources you need to
            maximize your impact. Together with USI, we build a better tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div className="col-span-1 order-1">
            <FeatureCard {...features[0]} index={0} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex col-span-1 md:row-span-2 flex-col items-center justify-center order-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl min-h-[400px]">
              <Image
                src="/joinus.png"
                alt="USI Crew"
                fill
                className="object-cover"
              />
            </div>
            <Button
              asChild
              className="w-full py-6 mt-4 bg-[#d73f38] text-white text-lg font-bold rounded-xl transition-all hover:bg-[#a9322c] shadow-lg cursor-pointer"
              size="lg"
            >
              <Link href="https://ptusi.co.id/en/home/career">Join Us Now</Link>
            </Button>
          </motion.div>

          <div className="col-span-1 order-2 md:order-3">
            <FeatureCard {...features[1]} index={1} />
          </div>

          <div className="col-span-1 order-3 md:order-4">
            <FeatureCard {...features[2]} index={2} />
          </div>

          <div className="col-span-1 order-4 md:order-5">
            <FeatureCard {...features[3]} index={3} />
          </div>

          <div className="order-5 md:hidden w-full pt-4 relative z-99 pointer-events-auto">
            <Button
              asChild
              className="w-full py-7 bg-[#d73f38] text-white text-lg font-bold rounded-xl transition-all hover:bg-[#a9322c] shadow-lg active:scale-95 touch-auto"
              size="lg"
            >
              <Link href="https://ptusi.co.id/en/home/career">
                Join Us Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;