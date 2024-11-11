import React from 'react';

const VillageEconomyIndaba = () => {
  return (
    <section className="village-economy-indaba px-8 py-12 bg-gray-50 rounded-lg shadow-lg">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#397D5A] mb-2">Village Economy Indaba</h1>
        <p className="text-lg text-gray-600 italic">Empowering Rural Economies for a Sustainable Future</p>
      </div>

      {/* Introduction Section */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          The <strong>Inaugural Village Economy Indaba</strong>, hosted by the Office of Kgosana Koketso Rakhudu on 
          <strong> 1st November 2024</strong>, marked a pivotal advancement in promoting economic empowerment 
          and sustainability within rural communities. Held in the North West Province, this groundbreaking event 
          gathered an array of stakeholders—from government officials and local entrepreneurs to industry leaders 
          and community representatives—all unified by a commitment to revitalizing village economies. This ambitious 
          initiative was established to provide an inclusive platform to address economic challenges unique to rural areas, 
          share successful strategies, and forge sustainable paths forward for long-term development.
        </p>
      </div>

      {/* Objectives and Key Goals Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4">Objectives and Key Goals</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Village Economy Indaba’s design and mission centered on specific goals, each representing a vital pillar 
          in the journey toward sustainable and inclusive economic empowerment:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Empowerment of SMMEs:</strong> To empower small, medium, and micro enterprises in rural areas by 
            providing them with the necessary tools, resources, and knowledge to become viable players in the broader economy.
          </li>
          <li>
            <strong>Encouragement of Collaboration:</strong> To foster collaboration among government entities, 
            private businesses, non-profits, and local communities, creating an interconnected support system that promotes mutual growth.
          </li>
          <li>
            <strong>Promotion of Innovation:</strong> To highlight the role of technology and innovation as game-changers 
            for rural businesses. By exposing attendees to digital solutions and modern business practices, the event aimed 
            to demonstrate how embracing innovation can bridge the gap between local businesses and larger markets.
          </li>
          <li>
            <strong>Sustainability and Growth:</strong> To encourage discussions around sustainability, ensuring that economic 
            growth aligns with community values and environmental considerations, securing long-term benefits for village 
            residents and future generations.
          </li>
          <li>
            <strong>Capacity Building:</strong> To initiate training and mentorship programs tailored to the unique needs 
            of village-based entrepreneurs, addressing issues such as compliance, funding, and skill development.
          </li>
          <li>
            <strong>Engagement and Networking:</strong> To provide a space for attendees to network, share insights, and 
            build partnerships that could lead to joint initiatives aimed at uplifting village economies.
          </li>
        </ul>
      </div>

      {/* Conclusion Section */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          The Indaba’s primary purpose was to serve as a catalyst for change, igniting action and demonstrating that village economies 
          are not just supplementary to national economic growth but can be central to it. By investing in rural areas, empowering 
          entrepreneurs, and fostering a spirit of unity, the event sought to inspire an ongoing cycle of growth and innovation.
        </p>
      </div>
    </section>
  );
};

export default VillageEconomyIndaba;
