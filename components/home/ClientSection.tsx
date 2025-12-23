"use client";

import { motion } from "framer-motion";
import ClientLogos from "./ClientLogos";
import { Button } from "../ui/button";
import Link from "next/link";

const ClientSection = () => {
  return (
    <section className="w-full py-12 md:h-[600px] flex items-center px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <ClientLogos />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md text-center md:text-left md:ml-16 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#282a53]">
            More than 10+ <br />
            Partner and Client
          </h2>
          <p className="mb-6 text-gray-600 text-lg">
            Driving success together with integrity and commitment.
          </p>
          <Link href="/project#clients-list" scroll={true}>
            <Button className="py-6 px-10 bg-[#d73f38] text-white font-bold rounded-md transition-all hover:bg-[#a9322c] hover:scale-105 active:scale-95">
              See more...
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
