import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const JoinUsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative min-h-[500px]">
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-1 text-left md:pr-12 mb-10 md:mb-0">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#282a53] mb-6 leading-tight">
                    Be the part of USI, <br />
                    Let's Join us!
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    Discover the connections, opportunities, and resources you need to maximize your impact. Together with USI, we build a better tomorrow.
                </p>
                <Link href="/about#join-usi" passHref>
                <Button className="py-3 px-8 bg-[#d73f38] cursor-pointer text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
                    Join Us
                </Button>
                </Link>
            </div>
            <div className="hidden lg:block lg:col-span-1">
            </div>
            
        </div>
      </div>
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 
                   w-full md:w-[70%] lg:w-[60%] h-full max-h-[600px] z-0 pointer-events-none"
      >
          <Image
            src="/kapal.png" 
            alt="Kapal Kargo Besar"
            layout="fill"
            objectFit="contain" 
            objectPosition="right"
            priority
          />
      </div>
      
    </section>
  );
};

export default JoinUsSection;