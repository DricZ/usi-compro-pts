"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    const baseClass = "transition-colors duration-200 hover:text-[#282a53]"; 
    const activeClass = "text-[#282a53] font-bold";
    const defaultClass = "text-[#8B8B8B]";

    return `${baseClass} ${isActive ? activeClass : defaultClass}`;
  };

  return (
    <header className="sticky left-0 top-0 z-50 bg-white w-full backdrop-blur py-3">

      <div className="mx-auto h-[60px] max-w-7xl px-8 md:px-6 text-[16px]">
        <div className="flex items-center justify-between h-full">
            {/* Image */}
          <div>
            <Link href="/">
                <Image
                src="/LOGO.png" 
                alt="USI Petrotrans Samudra"
                width={100}
                height={50}
                />
            </Link>
          </div>
          <div>
            {/* Navigation */}
             <div className="flex gap-8">
                <Link href="/about" className={getLinkClassName('/about')}>About Us</Link>
                <Link href="/service" className={getLinkClassName('/service')}>Service</Link>
                <Link href="/project" className={getLinkClassName('/project')}>Project</Link>
                <Link href="/commitment" className={getLinkClassName('/commitment')}>Commitment</Link>
                <Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;