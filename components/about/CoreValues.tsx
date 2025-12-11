import React from 'react';
import CoreValueCard from './CoreValueCard';

// Data
const coreValuesData = [
    { title: "Integrity", description: "We conduct our business with highest ethical standards", iconPath: "/integrity.svg" },
    { title: "Effeciency", description: "We strive to optimize our supply chain process", iconPath: "/effeciency.svg" },
    { title: "Safety", description: "We uphold strict protocols for our crew, cargo, and surroundings", iconPath: "/safety.svg" },
    { title: "Customer Focused", description: "We prioritize customer satisfaction", iconPath: "/customer.svg" },
];


const CoreValues = () => {
    return (
        <section className="py-20 px-4 sm:px-8 bg-[#f5f6f8]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#282a53] mb-16">
                    Core Values
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValuesData.map((value, index) => (
                        <CoreValueCard 
                            key={index}
                            title={value.title}
                            description={value.description}
                            iconPath={value.iconPath}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoreValues;