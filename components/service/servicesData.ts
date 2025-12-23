import {
  Settings,
  Palmtree,
  FlaskConical,
  FileText,
  Monitor,
  Warehouse,
  Anchor,
} from "lucide-react";
import React from "react";

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
    description:
      "Integrated solutions for the energy supply chain and petrochemical derivative products.",
    Icon: Settings,
    imageUrl: "/petroleum.png",
    modalDetail:
      "We offer comprehensive logistical support, handling everything from crude oil transportation to specialized petrochemical derivatives, ensuring safe and timely delivery through regulated maritime routes.",
  },
  {
    id: 2,
    title: "Palm Oil Logistics",
    description: "Specialized maritime transportation and supply chain solutions for crude and refined palm oil commodities.",
    Icon: Palmtree,
    imageUrl: "/palm.png",
    modalDetail: "We provide end-to-end maritime logistics for palm oil products, specializing in the bulk shipment of CPO (Crude Palm Oil) and its derivatives. Our operations focus on strategic vessel deployment, rigorous cargo heating management (to maintain specifications), and optimized port-to-port turnaround times. We ensure high-volume palm commodities are integrated seamlessly into the global supply chain with maximum efficiency and safety compliance.",
  },
  {
    id: 3,
    title: "Ship Management",
    description:
      "Full-scale technical and operational management to ensure vessel seaworthiness and efficiency.",
    Icon: Anchor,
    imageUrl: "/shipmanagement.png",
    modalDetail:
      "We provide end-to-end ship management services, focusing on technical maintenance, crew management, and operational excellence. Our team ensures every vessel meets international maritime safety standards and environmental regulations (MARPOL). From routine dry-docking coordination to daily vessel performance monitoring, we optimize ship availability and minimize downtime, ensuring reliable transportation for every cargo we carry.",
},
  {
    id: 4,
    title: "Custom Contract Arrangement",
    description:
      "Tailored and flexible contract arrangement schemes customized to your business needs.",
    Icon: FileText,
    imageUrl: "/contract.png",
    modalDetail:
      "We offer tailored and flexible contract arrangements, including Time Charter, Voyage Charter, and Bareboat Charter, customized to fit your specific operational and financial requirements.",
  },
  {
    id: 5,
    title: "Real Time Cargo Monitoring",
    description:
      "Full visibility and real-time end-to-end cargo tracking and surveillance.",
    Icon: Monitor,
    imageUrl: "/monitor.png",
    modalDetail:
      "Utilizing advanced satellite and sensor technology, we provide clients with 24/7 real-time monitoring of cargo location, temperature, and condition, ensuring security and compliance throughout the entire supply chain.",
  },
  {
    id: 6,
    title: "Vendor Held Stock (VHS) Handling",
    description:
      "Vendor-managed inventory within our facilities to optimize costs and lead time.",
    Icon: Warehouse,
    imageUrl: "/vhs.png",
    modalDetail:
      "We provide Vendor Held Stock (VHS) services, allowing vendors to manage their inventory within our secure, strategically located facilities. This minimizes lead times, optimizes logistics costs, and ensures immediate availability of critical supplies.",
  },
];
