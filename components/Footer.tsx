"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    const services = [
        "Petroleum & Petrochemicals",
        "Palm Products",
        "Sheet Management",
        "Custom Contract Arrangement",
        "Real Time Cargo Monitoring",
        "VHS Handling",
    ];

    const hseCommitment = [
        "Safe & Responsible Operations",
        "Environmental Protection",
        "Employee Training & Awareness",
        "Continuous Monitoring & Risk Prevention",
    ];

    const SocialIcon = ({ iconPath, href, label }: { iconPath: string, href: string, label: string }) => (
        <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={href} 
            aria-label={label} 
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#282A53] hover:bg-[#d73f38] transition-colors overflow-hidden shadow-sm"
        >
            <Image 
                src={iconPath}
                alt={label}
                width={20}
                height={20}
                className="object-contain" 
            />
        </motion.a>
    );

    return (
        <footer className="bg-[#F3F3F3] text-gray-800 pt-16 pb-8 px-6 sm:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row justify-between border-b border-gray-300 pb-12 gap-12"
                >
                    
                    {/* Brand Section */}
                    <div className="w-full lg:w-1/4">
                        <div className="mb-6">
                            <Image
                                src="/LOGO.png"
                                alt="USI Petrotrans Samudera Logo"
                                width={180}
                                height={60}
                                className="h-auto w-auto"
                            />
                        </div>
                        
                        <h4 className="font-bold text-base mb-3 text-[#282a53]">What we do?</h4>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                            We provide tailored made liquid bulk shipping services. With liquid cargo specialists, we handle diverse range of liquid products.
                        </p>
                    </div>

                    <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                        
                        {/* Services */}
                        <div>
                            <h4 className="font-bold text-base mb-5 text-[#282a53]">Services</h4>
                            <ul className="space-y-3">
                                {services.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-600 hover:text-[#d73f38] transition-colors cursor-pointer w-fit">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* HSE Commitment */}
                        <div>
                            <h4 className="font-bold text-base mb-5 text-[#282a53]">HSE Commitment</h4>
                            <ul className="space-y-3">
                                {hseCommitment.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-600 hover:text-[#d73f38] transition-colors cursor-pointer w-fit">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us*/}
                        <div className="sm:col-span-1">
                            <h4 className="font-bold text-base mb-5 text-[#282a53]">Contact us</h4>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-800">Surabaya:</p>
                                    <p className="text-gray-600">Hotline. 08155-110-111</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Samarinda:</p>
                                    <p className="text-gray-600">Hotline. 0813-4743-6101</p>
                                </div>
                            </div>
                        </div>

                        {/* Follow us */}
                        <div>
                            <h4 className="font-bold text-base mb-5 text-[#282a53]">Follow Us</h4>
                            <div className="flex flex-wrap gap-4">
                                <SocialIcon iconPath="/instagram.png" href="#" label="Instagram" />
                                <SocialIcon iconPath="/facebook.png" href="#" label="Facebook" />
                                <SocialIcon iconPath="/email.png" href="#" label="Email" />
                            </div>
                        </div>
                        
                    </div>
                </motion.div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 USI Petrotrans Samudera. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#d73f38]">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#d73f38]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;