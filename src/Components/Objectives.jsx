import React from 'react';

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
