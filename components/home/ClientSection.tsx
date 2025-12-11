// ClientSection.tsx (atau .jsx)

import React from 'react'
import ClientLogos from './ClientLogos'

const ClientSection = () => {
  return (
    <section className="w-full h-140">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center">
          <ClientLogos />
        </div>

        <div className="max-w-md text-left md:ml-16 w-full">
            <h2 className="text-4xl font-extrabold mb-4">
              More than 10+ <br />
              Partner and Client
            </h2>
            <p className="mb-6 text-gray-600">
              Driving success together with integrity and commitment.
            </p>
            <button className="py-3 px-8 bg-[#d73f38] text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
              See more...
            </button>
        </div>

      </div>
    </section>
  )
}

export default ClientSection