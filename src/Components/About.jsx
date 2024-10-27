import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1B5538]">About the Office of Kgosana Koketso Rakhudu</h1>
      </header>

      <section className="text-left mt-8 text-gray-700">
        <p className="mb-6">
          The Office of Kgosana Koketso Rakhudu plays a pivotal role in the Tsitsing community and the broader Royal Bafokeng Nation (RBN). It was established as a corporate entity not just to facilitate traditional leadership but to integrate this leadership with modern governance and socio-economic strategies, ensuring that the Tsitsing community evolves with the changing times. This office is the driving force behind the successful execution of the VisionPlan 2035, a transformative strategy designed to ensure the long-term development of the community.
        </p>
        <p className="mb-6">
          Kgosana Koketso Rakhudu, as the traditional leader (Kgosana), is tasked with the immense responsibility of guiding his community through a dynamic and challenging world. His office bridges the gap between tradition and modernity, maintaining the community's cultural heritage while introducing innovative approaches to governance, education, and economic empowerment. This duality ensures that Tsitsing remains grounded in its values while actively participating in a globalizing world.
        </p>
        <img src="/images/Officeofkgosanateams.jpeg" alt="Office team" className="w-full h-64 object-contain mb-8"/>

        <p className="mb-6">
          The VisionPlan 2035 focuses on the key areas of education, economic empowerment, governance, and cultural preservation, all of which the Office is actively engaged in. The Office functions as the executive arm that turns this vision into actionable strategies and projects that directly impact the lives of Tsitsing's residents. It does this by:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-700">
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

        <p className="mb-6">
          The Office of Kgosana Koketso Rakhudu is not just an administrative body; it is a symbol of leadership, responsibility, and progressive development, carrying the hopes and aspirations of Tsitsing and the Royal Bafokeng Nation into the future. With its focus on good governance, stewardship of resources, and community empowerment, the Office serves as a beacon for innovative and relevant African leadership in the modern era.
        </p>
      </section>
    </div>
  );
}

export default About;
