import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Users, 
  TreePine,
  HeartHandshake,
  Building2,
  GraduationCap,
  Target,
  ChevronDown,
  CircleDollarSign,
  Shield,
  Lightbulb,
  HandHeart,
  School
} from 'lucide-react'

const ObjectiveCard = ({ title, description, icon: Icon, details, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-[#1B5538] rounded-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B5538]">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#397D5A] hover:text-[#1B5538] transition-colors"
        >
          Learn more
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {detail.icon}
                    <p className="text-gray-700">{detail.text}</p>
                  </div>
                ))}
                {image && (
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function Objectives() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-green-800">Our Objectives</h1>

      <section className="mb-12">
        <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
          The objectives of the Office of Kgosana Koketso Rakhudu are centered on building a self-reliant and thriving community through traditional governance that integrates modern development strategies.
        </p>
        <img 
          src="/images/constructionlearners.jpeg" 
          alt="Community initiatives involving learners in construction projects" 
          className="w-full sm:h-64 lg:h-80 object-contain rounded-lg shadow-lg mb-8"
        />
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-4">Community Engagement and Traditional Governance</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Office of Kgosana Koketso Rakhudu places a high priority on community engagement. The office regularly consults with the people of Tsitsing, ensuring that their voices are heard and incorporated into decision-making processes. Community forums and regular Kgotla (traditional meetings) are essential platforms for gathering input on major decisions.
        </p>
        <img 
          src="/images/Gasgiveaway.jpeg" 
          alt="Community engagement initiative with gas giveaways" 
          className="w-full sm:h-64 lg:h-80 object-cover rounded-lg shadow-lg mb-8"
        />
      </section>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-4">Investment and Sustainability Development</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The community’s economic future is built on sustainable development. The Kgosana's office focuses on aligning investment practices with the long-term vision of the community. This includes identifying opportunities for foreign and local investment that respect the cultural and environmental heritage of the region.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-4">Supporting the Tsitsing Community</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Beyond infrastructure and economic development, the office is committed to social empowerment programs. These programs aim to uplift the most vulnerable groups in the community, providing them with the resources and opportunities to improve their lives. Special focus is given to education, healthcare, and social welfare programs.
        </p>
      </section>
    </div>
  );
}

export default Objectives;
