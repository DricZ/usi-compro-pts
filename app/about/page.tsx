import CoreValues from '@/components/about/CoreValues'
import DocumentSection from '@/components/about/DocumentSection'
import HistoryTimeline from '@/components/about/HistoryTimeline'
import JoinUsSection from '@/components/about/JoinUsSection'
import LogisticMilestones from '@/components/about/LogisticMilestone'
import VisionMission from '@/components/about/VisionMission'

const About = () => {
  return (
    <div>
    <section className="py-15 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#282a53] mb-6">
          About Us
        </h1>
        <p className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
          USI Petrotrans Samudra is a global logistic and maritime transportation company specializing in liquid bulk shipments. With rising demands of sustainable and reliable liquid bulk transportations in domestic and international waters, our company is thus created to cope with tailored shipping solutions.
        </p>
        <p className="text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
          USI Petrotrans Samudra is established in 2019 with focus to serve primarily domestic clients; and we have history of managing and performing shipments for our holding company since 2008.
        </p>
      </div>
    </section>
      <VisionMission />
      <CoreValues />
      <LogisticMilestones />
      <HistoryTimeline />
      <DocumentSection />
      <JoinUsSection />
    </div>
  )
}

export default About
