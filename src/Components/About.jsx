import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="container mx-auto px-6 py-12">
<Helmet>
        <title>About the Office of Kgosana Koketso Rakhudu | Tsitsing Leadership</title>
        <meta name="description" content="Discover the impactful work of the Office of Kgosana Koketso Rakhudu, bridging tradition and modernity to guide Tsitsing towards a sustainable future." />
        <meta name="keywords" content="Kgosana Koketso Rakhudu, Tsitsing, Royal Bafokeng Nation, VisionPlan 2035, Community Development" />
      </Helmet>


      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B5538] mb-4">About the Office of Kgosana Koketso Rakhudu</h1>
        <p className="text-lg text-gray-700">A bridge between tradition and modernity, guiding Tsitsing toward a sustainable future.</p>
      </header>

      {/* Overview Section */}
      <section className="text-left mt-8 text-gray-700">
        <p className="mb-6">
          The Office of Kgosana Koketso Rakhudu plays a pivotal role in the Tsitsing community and the broader Royal Bafokeng Nation (RBN). It was established as a corporate entity not just to facilitate traditional leadership but to integrate this leadership with modern governance and socio-economic strategies, ensuring that the Tsitsing community evolves with the changing times. This office is the driving force behind the successful execution of the VisionPlan 2035, a transformative strategy designed to ensure the long-term development of the community.
        </p>
        <p className="mb-6">
          Kgosana Koketso Rakhudu, as the traditional leader (Kgosana), is tasked with the immense responsibility of guiding his community through a dynamic and challenging world. His office bridges the gap between tradition and modernity, maintaining the community's cultural heritage while introducing innovative approaches to governance, education, and economic empowerment.
        </p>
        <img src="/images/Officeofkgosanateams.jpeg" alt="Team of the Office of Kgosana Koketso Rakhudu" loading='lazy' className="w-full h-64 object-contain rounded-lg shadow-lg mb-8"/>

        <p className="mb-6">
          The VisionPlan 2035 focuses on the key areas of education, economic empowerment, governance, and cultural preservation, all of which the Office is actively engaged in. The Office functions as the executive arm that turns this vision into actionable strategies and projects that directly impact the lives of Tsitsing's residents. It does this by:
        </p>

        {/* Initiatives List */}
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-4">
          <li>
            <strong className="text-[#1B5538]">Fostering Community Engagement:</strong> The Office regularly organizes community forums and Kgotla (traditional meetings) to ensure that every community member's voice is heard, fostering a governance system that is inclusive and participatory.
          </li>
          <li>
            <strong className="text-[#1B5538]">Building Strategic Partnerships:</strong> By aligning with national and international partners, the Office works to bring investment opportunities to the community. These partnerships are centered on sustainable development, respecting the cultural heritage of the region while promoting economic growth.
          </li>
          <li>
            <strong className="text-[#1B5538]">Preserving Culture and Identity:</strong> At its core, the Office is dedicated to preserving the community’s unique cultural identity. Through various initiatives like festivals, traditional arts programs, and heritage conservation projects, the Office ensures that the past is remembered while creating a vibrant cultural future.
          </li>
        </ul>

        {/* Vision and Purpose */}
        <section className="bg-[#F1F5F9] p-6 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">A Vision for the Future</h2>
          <p className="text-gray-700 mb-4">
            The Office of Kgosana Koketso Rakhudu is not just an administrative body; it is a symbol of leadership, responsibility, and progressive development, carrying the hopes and aspirations of Tsitsing and the Royal Bafokeng Nation into the future.
          </p>
          <p className="text-gray-700">
            With a focus on good governance, stewardship of resources, and community empowerment, the Office serves as a beacon for innovative and relevant African leadership in the modern era.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
