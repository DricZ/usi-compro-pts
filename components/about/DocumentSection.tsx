import { FileText, Award } from 'lucide-react';
import DocumentCard from './DocumentCard';

const documentData = [
    {
        title: "Policies",
        IconComponent: FileText, 
        modalImage: "/Certificate.png", 
    },
    {
        title: "Certifications",
        IconComponent: Award, 
        modalImage: "/Certificate.png", 
    },
];

const DocumentSection = () => {
    return (
        <section className="py-20 px-4 sm:px-8 bg-[#f5f6f8]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {documentData.map((doc, index) => (
                        <DocumentCard 
                            key={index}
                            title={doc.title}
                            IconComponent={doc.IconComponent} 
                            modalImagePath={doc.modalImage}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DocumentSection;