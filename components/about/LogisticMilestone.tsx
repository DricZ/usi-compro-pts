"use client";

import { ArrowUpRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Data
const chartData = [
  { year: 2019, volume: 84.49 },
  { year: 2020, volume: 116.025 },
  { year: 2021, volume: 176.825 },
  { year: 2022, volume: 95.86 },
  { year: 2023, volume: 70.55 },
  { year: 2024, volume: 106.29 },
  { year: 2025, volume: 170.0 },
];

const chartConfig = {
  volume: {
    label: "Total",
    color: "#F98614",
  },
} satisfies ChartConfig;

const VolumeBarChart = () => (
  <Card className="shadow-none border-none">
    <CardContent className="p-0">
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            className="text-sm fill-gray-600"
          >
            <text
              x={300}
              y={0}
              dy={-10}
              textAnchor="middle"
              className="text-base font-bold"
            >
              Years
            </text>
          </XAxis>

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            domain={[0, 200]}
            tickFormatter={(value) => `${value}`}
            className="text-sm fill-gray-600"
          >
            <text
              x={0}
              y={150}
              dx={-10}
              dy={-5}
              textAnchor="middle"
              transform="rotate(-90)"
              className="text-base font-bold"
            >
              Liter
            </text>
          </YAxis>

          <ChartTooltip
            content={
              <ChartTooltipContent
                nameKey="volume"
                formatter={(value) => `${value} Million Liters`}
                className="font-bold"
              />
            }
          />

          <Bar
            dataKey="volume"
            fill="#F98614"
            radius={[8, 8, 0, 0]}
            opacity={0.8}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

const StatCard = ({
  title,
  value,
  description,
  color,
  index,
}: {
  title: string;
  value: string;
  description: string;
  color: string;
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="p-6 rounded-xl bg-gray-50 border border-gray-100 mb-6"
  >
    <p className={`text-4xl font-extrabold ${color} mb-2`}>{value}</p>
    <p className="text-lg font-semibold text-[#282a53] mb-2">{title}</p>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const LogisticMilestones = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center mb-8">
            <div className="bg-orange-500 p-1 rounded-sm">
              <ArrowUpRight className="text-white w-5 h-5" />
            </div>
            <h2 className="text-3xl px-2 font-bold text-[#282a53]">
              Logistic Volume Milestones
            </h2>
          </div>

          <VolumeBarChart />
        </motion.div>
        
        <div className="lg:col-span-5">
          <StatCard
            index={0}
            title="Highest Annual Volume Growth"
            value="+52.4%"
            description="The most significant volume increase occurred from 2020 (115,000,000 Liters) to 2021 (176,625,000 Liters), showing a growth of more than half in that period."
            color="text-[#282a53]"
          />

          <StatCard
            index={1}
            title="Steepest Annual Volume Decline"
            value="-45.8%"
            description="The volume saw its sharpest correction from 2021 (176,625,000 Liters) to 2022 (95,860,000 Liters), losing almost half of the peak volume recorded."
            color="text-[#d73f38]"
          />

          <StatCard
            index={2}
            title="Total Accumulated Volume (2019-2025)"
            value="820 Million Liters"
            description="This is the total volume recorded over seven years, including the 2025 projected volume (170 Million Liters). This figure is approaching 1 Billion Liters cumulatively."
            color="text-[#282a53]"
          />
        </div>
      </div>
    </section>
  );
};

export default LogisticMilestones;