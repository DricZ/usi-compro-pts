import ContactSection from '@/components/service/ContactSection'
import Contact from '@/components/service/ContactSection'
import ServicesSection from '@/components/service/ServiceSection'
import React from 'react'

const service = () => {
  return (
    <div>
      <section className="pt-15 pb-5 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#282a53] mb-6">
          Our Services
        </h1>
        <p className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
          We provide tailored made liquid bulk shipping services. With liquid cargo specialists, we handle diverse range of liquid products.
        </p>
      </div>
    </section>
    <ServicesSection/>
    <ContactSection />
    </div>
  )
}

export default service
