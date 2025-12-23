"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0"
          >
            <div className="relative hidden md:block w-full max-w-xl h-100">
              <Image
                src="/contact.png"
                alt="Orange retro telephone"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-12 text-center md:text-left"
          >
            <h2 className="text-4xl font-extrabold text-[#282a53] mb-4 leading-snug">
              Any Question? <span className="text-[#282a53]">Contact us</span>
            </h2>

            <p className="text-lg text-gray-600 mb-5 max-w-md md:max-w-none mx-auto md:mx-0">
              Our expert team is ready to discuss your cargo needs and provide a
              tailored logistics solution. Call or email us today to start.
            </p>
            <Link href="/contact">
              <Button className="w-1xl bg-[#d73f38] cursor-pointer text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
                Contact Now
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;