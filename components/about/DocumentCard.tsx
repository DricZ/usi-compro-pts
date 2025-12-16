import React from "react";
import { FileText, Award, LucideIcon } from "lucide-react";
import DocumentModal from "./DocumentModal";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  IconComponent: LucideIcon;
  modalImagePath: string;
}

const DocumentCard: React.FC<CardProps> = ({
  title,
  IconComponent,
  modalImagePath,
}) => {

    // Modal Button
  const TriggerButton = (
    <Button className="py-2 px-6 bg-[#d73f38] text-white font-bold rounded-md transition-colors hover:bg-[#a9322c]">
      View
    </Button>
  );

  return (
    <div className="flex flex-col items-center justify-between p-15 hover:shadow-xl transition-shadow ease-in-out bg-white rounded-xl shadow-none borde border-2 border-gray-200 h-fit">
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="text-4xl font-extrabold mb-5 text-[#282a53] mr-4">
            {title}
          </h3>

          <DocumentModal
            triggerButton={TriggerButton}
            docTitle={title}
            docImage={modalImagePath}
          />
        </div>

        <div className="w-30 h-30 bg-orange-400 rounded-lg flex items-center justify-center">
          <IconComponent size={70} color="white" />
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
