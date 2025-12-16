import { Settings, Palmtree, FlaskConical, FileText, Monitor, Warehouse } from 'lucide-react';
import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
    Icon: React.ElementType;
    imageUrl: string;
    modalDetail: string;
}

export const servicesData: Service[] = [
    {
        id: 1,
        title: "Petroleum & Petrochemicals",
        description: "Integrated solutions for the energy supply chain and petrochemical derivative products.",
        Icon: Settings,
        imageUrl: "/petroleum.png",
        modalDetail: "We offer comprehensive logistical support, handling everything from crude oil transportation to specialized petrochemical derivatives, ensuring safe and timely delivery through regulated maritime routes.",
    },
    {
        id: 2,
        title: "Palm Products",
        description: "Efficient logistics and distribution for both crude and refined palm oil products.",
        Icon: Palmtree,
        imageUrl: "/palm.png",
        modalDetail: "We manage the dedicated sea transportation and logistics of palm oil products, including CPO (Crude Palm Oil) and its derivatives, from loading port to destination. Our procedures are designed to maintain cargo integrity and quality throughout transit, ensuring high-volume commodities are delivered efficiently to meet global demand.",
    },
    {
        id: 3,
        title: "Chemichal Type II & III",
        description: "Safe transportation and handling services for specialized industrial chemicals.",
        Icon: FlaskConical,
        imageUrl: "/chemical.png",
        modalDetail: "Specialized in sea freight for industrial chemicals classified as Type II and III. We adhere to strict international safety standards (IMO) with dedicated vessels and trained crew to mitigate risks during handling and voyage.",
    },
    {
        id: 4,
        title: "Custom Contract Arrangement",
        description: "Tailored and flexible contract arrangement schemes customized to your business needs.",
        Icon: FileText,
        imageUrl: "/contract.png",
        modalDetail: "We offer tailored and flexible contract arrangements, including Time Charter, Voyage Charter, and Bareboat Charter, customized to fit your specific operational and financial requirements.",
    },
    {
        id: 5,
        title: "Real Time Cargo Monitoring",
        description: "Full visibility and real-time end-to-end cargo tracking and surveillance.",
        Icon: Monitor,
        imageUrl: "/monitor.png",
        modalDetail: "Utilizing advanced satellite and sensor technology, we provide clients with 24/7 real-time monitoring of cargo location, temperature, and condition, ensuring security and compliance throughout the entire supply chain.",
    },
    {
        id: 6,
        title: "Vendor Held Stock (VHS) Handling",
        description: "Vendor-managed inventory within our facilities to optimize costs and lead time.",
        Icon: Warehouse,
        imageUrl: "/vhs.png",
        modalDetail: "We provide Vendor Held Stock (VHS) services, allowing vendors to manage their inventory within our secure, strategically located facilities. This minimizes lead times, optimizes logistics costs, and ensures immediate availability of critical supplies.",
    },
];