import TimelineItem from './TimelineItem';

const historyData = [
    {
        year: 2019,
        title: "84,490,000",
        description: "Baseline Performance Year: The starting point of the data used for internal performance before major capacity expansion and growth efforts.",
        imageSrc: "/history2019.png"
    },
    {
        year: 2020,
        title: "116,025,000",
        description: "Initial Growth Leap: Volume surpassed the 100 Million Liters mark, indicating significant expansion in logistics capacity and market reach.",
        imageSrc: "/history2020.png"
    },
    {
        year: 2021,
        title: "176,825,000",
        description: "All-Time High Volume: Recorded the highest volume in this period (+52.4% increase from 2020), marking a peak in demand or operational capacity.",
        imageSrc: "/history2021.png"
    },
    {
        year: 2022,
        title: "95,860,000",
        description: "Performance Correction: Volume experienced a sharp decline (-45.8% from peak 2021), potentially due to market fluctuations or post-peak operational adjustments.",
        imageSrc:"/history2022.png"
    },
    {
        year: 2023,
        title: "70,550,000",
        description: "Lowest Performance Point: Reached the lowest volume in the seven-year period, representing a challenging year for the company's logistics capacity.",
        imageSrc: "/history2023.png"
    },
    {
        year: 2024,
        title: "106,290,000",
        description: "Recovery Phase: Volume successfully rebounded past the 100 Million Liters baseline, indicating successful market adaptation and recovery efforts.",
        imageSrc: "/history2019.png"
    },
    {
        year: 2025,
        title: "170,000,000",
        description: "Major Projection: Volume is projected to near the 2021 high, reflecting aggressive growth targets and operational optimism. (Data ON PROGRESS)",
        imageSrc: "/history2019.png"
    },
];

const HistoryTimeline = () => {
    return (
        <section className=" px-4 sm:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">    
                <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto">
                    Our seven-year operational history demonstrates significant market adaptability and robust performance. Following a major growth leap in 2020 and achieving an All-Time High volume of 176.8 Million Liters in 2021, the company successfully navigated a sharp market correction in the following two years with a strong recovery effort evident in 2024. Our projected 2025 volume of 170 Million Liters underscores our aggressive expansion targets and commitment to market resilience.
                </p>

                <div className="relative text-left">
                    {historyData.map((item, index) => (
                        <TimelineItem
                            key={item.year}
                            year={item.year}
                            title={item.title}
                            description={item.description}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HistoryTimeline;