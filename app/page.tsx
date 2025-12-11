
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import SoluionSection from '@/components/home/SolutionSection';
import OurService from '@/components/home/OurService';
import ClientSection from '@/components/home/ClientSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import JoinUsSection from '@/components/home/JoinUsSection';

export default function Home() {
  return (
    <main className="min-h-screen"> 
      <HeroSection />
      <SoluionSection />
      <OurService />
      <ClientSection />
      <TestimonialSection />
      <JoinUsSection />

    </main>
  );
}