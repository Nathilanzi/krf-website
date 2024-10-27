import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#1B5538]">Office Of Kgosana Koketso Rakhudu</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome to the official site of the Office of Kgosana Koketso Rakhudu.</p>
        <img src="/images/OfficeofKgosanaTeam.jpeg" alt="Community" className="w-full h-64 object-contain mb-8" />
      </header>

      <section className="text-left mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Overview of the Office of Kgosana Koketso Rakhudu</h2>
        <p className="text-gray-700 mb-6">
          The Office of Kgosana Koketso Rakhudu is vital to the Tsitsing community and the Royal Bafokeng Nation (RBN), bridging traditional leadership with modern governance through the VisionPlan 2035. Kgosana Rakhudu guides the community by balancing cultural heritage with contemporary approaches to education and economic empowerment.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li><strong>Community Engagement:</strong> Hosting forums and traditional meetings for inclusive participation.</li>
          <li><strong>Strategic Partnerships:</strong> Collaborating with national and international partners to attract sustainable investments.</li>
          <li><strong>Cultural Preservation:</strong> Organizing festivals and heritage projects to maintain cultural identity.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Overall, the Office represents progressive leadership and embodies the aspirations of Tsitsing and the RBN, focusing on good governance and community empowerment.
        </p>
        <img src="/images/KgosanaKoketso.jpeg" alt="Kgosana" className="w-full h-64 object-contain mb-8" />
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">VisionPlan 2035</h2>
        <p className="text-gray-700 mb-6">
          VisionPlan 2035 is the community’s roadmap for development, focusing on three main areas:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-left">
          <li><strong>Human Individual Development:</strong> Ensuring that individuals in the community lead healthy, dignified, and educated lives.</li>
          <li><strong>Collective Development:</strong> Creating a safe, healthy, and culturally rich environment that fosters identity and promotes good governance.</li>
          <li><strong>Sustainability and Growth:</strong> Stewarding resources responsibly and fostering economic opportunities that ensure long-term prosperity for all.</li>
        </ul>
        <Link to="/vision-plan" className="text-[#397D5A] hover:text-[#1B5538]">Learn more about VisionPlan 2035</Link>
        <img src="/images/Kgosanaquote.jpeg" alt="Quote" className="w-full h-64 object-contain mb-8" />
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Objectives</h2>
        <p className="text-gray-700 mb-6">
          The Office of Kgosana Koketso Rakhudu is dedicated to building a self-reliant and thriving community through traditional governance that integrates modern development strategies. This is achieved through the following:
        </p>
        <ul className="text-gray-700 mb-6">
          <li><strong>Community engagement</strong></li>
          <li><strong>Sustainable development</strong></li>
          <li><strong>Social empowerment programmes</strong></li>
        </ul>
        <Link to="/objectives" className="text-[#397D5A] hover:text-[#1B5538]">View our Objectives</Link>
        <img src="/images/Communityengagement.jpeg" alt="Students initiative" className="w-full h-64 object-contain mb-8" />
      </section>

      <footer className="mt-16 text-center">
        <p className="text-gray-600">Contact us: <Link to="/contact" className="text-[#397D5A] hover:text-[#1B5538]">Get in touch</Link></p>
      </footer>
    </div>
  );
}

export default Home;
