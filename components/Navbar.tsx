import { BookOpenCheck } from "lucide-react";
import { headers } from "next/headers";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 z-50 bg-white w-full backdrop-blur py-3 ">

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
             <div className="flex gap-8 text-[#8B8B8B]">
                <Link href="/about">About Us</Link>
                <Link href="#">Service</Link>
                <Link href="#">Project</Link>
                <Link href="#">Commitment</Link>
                <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
