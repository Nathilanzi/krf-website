import React from 'react';

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
