import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const services = [
        "Petroleum & Petrochemicals",
        "Palm Products",
        "Chemichal Type II & III",
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
        <a href={href} aria-label={label} className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#282A53] hover:bg-[#d73f38] transition-colors overflow-hidden">
            <Image 
                src={iconPath}
                alt={label}
                layout="fill"
                objectFit="contain" 
                className="p-2" 
            />
        </a>
    );

    return (
        <footer className="bg-[#F3F3F3] text-gray-800 pt-16 pb-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-10 gap-12">
                    
                    <div className="w-full md:w-1/4">
                        <div className="mb-4">
                            <Image
                                src="/LOGO.png"
                                alt="USI Petrotrans Samudera"
                                width={180}
                                height={60}
                            />
                        </div>
                        
                        <h4 className="font-bold text-base mb-3">What we do?</h4>
                        <p className="text-sm text-gray-600">
                            We provide tailored made liquid bulk shipping services. With liquid cargo specialists, we handle diverse range of liquid products.
                        </p>
                    </div>

                    <div className="w-full md:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Services */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-gray-800">Services</h4>
                            <ul className="space-y-2">
                                {services.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-600 hover:text-[#d73f38] transition-colors cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* HSE Commitment */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-gray-800">HSE Commitment</h4>
                            <ul className="space-y-2">
                                {hseCommitment.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-600 hover:text-[#d73f38] transition-colors cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="col-span-2 lg:col-span-1">
                            <h4 className="font-bold text-base mb-4 text-gray-800">Contact us</h4>
                            <div className="space-y-1 mb-6 text-sm">
                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800 pr-1">Surabaya:</span>
                                    Hotline. 08155-110-111
                                </p>
                                <p className="text-gray-600 pt-2">
                                    <span className="font-semibold text-gray-800 pr-1">Surabaya:</span>
                                    Hotline. 08155-110-111
                                </p>
                            </div>
                        </div>

                        {/* Follow us */}
                        <div className="col-span-2 lg:col-span-1">
                            <h4 className="font-bold text-base mb-4 text-gray-800">Follow Us</h4>
                            <div className="flex space-x-3">
                                <SocialIcon iconPath="/instagram.png" href="#" label="Instagram" />
                                <SocialIcon iconPath="/facebook.png" href="#" label="Facebook" />
                                <SocialIcon iconPath="/email.png" href="#" label="Email" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="pt-4 text-center md:text-left text-sm text-gray-600">
                    © 2025 USI Petrotrans Samudera. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;