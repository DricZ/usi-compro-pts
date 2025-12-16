"use client"

import { ArrowUpRight } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts" 

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Data
const chartData = [
    { year: 2019, volume: 84.490 },
    { year: 2020, volume: 116.025 },
    { year: 2021, volume: 176.825 },
    { year: 2022, volume: 95.860 },
    { year: 2023, volume: 70.550 },
    { year: 2024, volume: 106.290 },
    { year: 2025, volume: 170.000 },
]

const chartConfig = {
  volume: {
    label: "Total",
    color: "#F98614",
  },
} satisfies ChartConfig

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
                <text x={300} y={0} dy={-10} textAnchor="middle" className="text-base font-bold">Years</text>
            </XAxis>
            
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[0, 200]}
              tickFormatter={(value) => `${value}`}
              className="text-sm fill-gray-600"
            >
                <text x={0} y={150} dx={-10} dy={-5} textAnchor="middle" transform="rotate(-90)" className="text-base font-bold">Liter</text>
            </YAxis>

            {/* hover bar chart */}
            <ChartTooltip 
                content={<ChartTooltipContent 
                    nameKey="volume"
                    formatter={(value) => `${value} Million Liters`}
                    className="font-bold"
                />} 
            />
            
            {/* bar chart */}
            <Bar 
              dataKey="volume" 
              fill="#F98614"
              radius={[8, 8, 0, 0]}
              opacity={0.8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
);

// komponen card
const StatCard = ({ title, value, description, color }: { title: string, value: string, description: string, color: string }) => (
    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 mb-6">
        <p className={`text-4xl font-extrabold ${color} mb-2`}>{value}</p>
        <p className="text-lg font-semibold text-[#282a53] mb-2">{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const LogisticMilestones = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-7">
          <div className="flex items-center text-[#d73f38] mb-8"> 
            <ArrowUpRight className="h-6 w-6 mr-" />
            <h2 className="text-3xl font-bold text-[#282a53]">
              Logistic Volume Milestones
            </h2>
          </div>
          
          <VolumeBarChart />
        </div>
        <div className="lg:col-span-5"> 
          <StatCard
            title="Highest Annual Volume Growth"
            value="+52.4%"
            description="The most significant volume increase occurred from 2020 (115,000,000 Liters) to 2021 (176,625,000 Liters), showing a growth of more than half in that period."
            color="text-[#282a53]" 
          />
          
          <StatCard
            title="Steepest Annual Volume Decline"
            value="-45.8%"
            description="The volume saw its sharpest correction from 2021 (176,625,000 Liters) to 2022 (95,860,000 Liters), losing almost half of the peak volume recorded."
            color="text-[#d73f38]"
          />
          
          <StatCard
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