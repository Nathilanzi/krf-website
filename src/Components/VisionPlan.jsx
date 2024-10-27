import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import { X, Clock, Users, Sprout } from 'lucide-react';

const milestones = [
  {
    id: 1,
    area: "Human Individual Development",
    icon: <Users className="w-6 h-6" />,
    timeframe: "2023-2027",
    goals: [
      {
        title: "Healthy Individuals",
        description: "Prioritizing healthcare initiatives, from basic medical access to preventative care. Special programs focus on maternal health, child nutrition, and mental health awareness."
      },
      {
        title: "Individuals with Dignity",
        description: "Promotes social welfare programs to support the most vulnerable, including poverty eradication initiatives and support for the elderly, disabled, and those affected by crises."
      },
      {
        title: "Educated Individuals",
        description: "Advocates for equal access to quality education, from early childhood to tertiary education, with a focus on bridging the digital divide."
      }
    ]
  },
  {
    id: 2,
    area: "Development of the Collective",
    icon: <Clock className="w-6 h-6" />,
    timeframe: "2027-2031",
    goals: [
      {
        title: "Safe, Healthy, and Appealing Environment",
        description: "Focuses on clean and sustainable infrastructure, providing clean water, sanitation, safe housing, and accessible public spaces."
      },
      {
        title: "Valued Identity and Cultural Heritage",
        description: "Supports cultural revitalization through traditional practices, oral histories, festivals, and arts initiatives."
      },
      {
        title: "Good Governance and Leadership",
        description: "Emphasizes transparent governance, community engagement, and youth leadership roles."
      }
    ]
  },
  {
    id: 3,
    area: "Sustainability and Growth",
    icon: <Sprout className="w-6 h-6" />,
    timeframe: "2031-2035",
    goals: [
      {
        title: "Stewardship of Our Resources",
        description: "Encourages responsible management of land and natural resources through sustainable practices and conservation efforts."
      },
      {
        title: "Economic Opportunity",
        description: "Focuses on building a thriving economy by supporting small businesses and creating diverse employment opportunities."
      }
    ]
  }
];

const Modal = ({ isOpen, onClose, milestone }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#1B5538]">{milestone.area}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-600 font-semibold">{milestone.timeframe}</p>
          </div>

          <div className="space-y-6">
            {milestone.goals.map((goal, index) => (
              <div key={index} className="border-l-4 border-[#397D5A] pl-4">
                <h4 className="text-lg font-semibold text-[#1B5538] mb-2">{goal.title}</h4>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

function VisionPlan() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1B5538]">VisionPlan 2035</h1>
      </header>

      <section className="text-left text-gray-700">
        <p className="text-lg mb-8">
          The VisionPlan 2035 is the heart of the community’s development strategy. It is designed to align traditional governance with modern socio-economic needs, ensuring that Tsitsing and the broader Royal Bafokeng Nation (RBN) continue to thrive. The plan is broken down into three key areas of action, each with specific goals.
        </p>

        {/* Area 01 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-[#1B5538] mb-4">Area 01: Human Individual Development</h2>
          <p className="text-gray-700 mb-4">
            The first goal of VisionPlan 2035 is to invest in the well-being of individuals, recognizing that the strength of the community lies in the strength of its people. The focus here is on providing opportunities for growth, ensuring that all individuals have access to the essentials for a dignified life.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong className="text-[#397D5A]">1.1 Healthy Individuals:</strong> Prioritizing healthcare initiatives, from basic medical access to preventative care. Special programs focus on maternal health, child nutrition, and mental health awareness.</li>
            <li><strong className="text-[#397D5A]">1.2 Individuals with Dignity:</strong> Promotes social welfare programs to support the most vulnerable, including poverty eradication initiatives and support for the elderly, disabled, and those affected by crises.</li>
            <li><strong className="text-[#397D5A]">1.3 Educated Individuals:</strong> Advocates for equal access to quality education, from early childhood to tertiary education, with a focus on bridging the digital divide and supporting students’ success in a modern world.</li>
          </ul>
          <img src="/images/Stakeholders.jpeg" alt="Health and Well-being Initiative" className="w-full h-64 object-contain rounded mb-8" />
        </div>

        {/* Area 02 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-[#1B5538] mb-4">Area 02: Development of the Collective</h2>
          <p className="text-gray-700 mb-4">
            VisionPlan 2035 emphasizes building a strong, cohesive community by fostering mutual respect, safety, and a shared identity.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong className="text-[#397D5A]">1.4 A Safe, Healthy, and Appealing Environment:</strong> Focuses on clean and sustainable infrastructure, providing clean water, sanitation, safe housing, and accessible public spaces, along with conservation efforts to preserve natural resources.</li>
            <li><strong className="text-[#397D5A]">1.5 A Valued Identity and Cultural Heritage:</strong> Supports cultural revitalization through traditional practices, oral histories, festivals, and arts initiatives, ensuring that the community’s unique identity is celebrated and preserved.</li>
            <li><strong className="text-[#397D5A]">1.6 Good Governance and Leadership:</strong> Emphasizes transparent governance, community engagement, and youth leadership roles, ensuring inclusivity and accountability within the community.</li>
          </ul>
          <img src="/images/Stakeholders.jpeg" alt="Cultural Identity and Governance" className="w-full h-64 object-contain rounded mb-8" />
        </div>

        {/* Area 03 */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1B5538] mb-4">Area 03: Sustainability and Growth</h2>
          <p className="text-gray-700 mb-4">
            VisionPlan 2035 aims to ensure development that is both sustainable and leads to long-term growth, managing resources responsibly for current and future generations.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong className="text-[#397D5A]">1.7 Stewardship of Our Resources:</strong> Encourages responsible management of land and natural resources through sustainable agricultural practices, wildlife conservation, renewable energy initiatives, and pollution reduction.</li>
            <li><strong className="text-[#397D5A]">1.8 Economic Opportunity:</strong> Focuses on building a thriving economy by supporting small businesses, offering skills training, and forming local and international partnerships to create diverse and stable employment opportunities.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default VisionPlan;
