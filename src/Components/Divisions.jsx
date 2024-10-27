import React from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaHandHoldingUsd, FaFacebook, FaCoffee } from 'react-icons/fa';

function Divisions() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-12 text-center text-[#1B5538]">Our Divisions</h1>

      {/* Investment & Sustainability Development Trust */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Investment & Sustainability Development Trust</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This division is responsible for driving economic growth through sustainable investment. It seeks to attract partnerships that align with the long-term goals of VisionPlan 2035, focusing on sectors like agriculture, renewable energy, and small enterprise development. The trust ensures that all investments benefit the community and contribute to the collective well-being.
        </p>

        {/* Impact Icons */}
        <div className="flex justify-around items-center mt-6">
          <div className="text-center">
            <FaSeedling className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Agriculture</p>
          </div>
          <div className="text-center">
            <FaLeaf className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Renewable Energy</p>
          </div>
          <div className="text-center">
            <FaHandHoldingUsd className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Small Enterprises</p>
          </div>
        </div>

        {/* Explore More Link */}
        <div className="text-center mt-8">
          <Link
            to="/investment-sustainability-trust"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-md hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Explore Our Initiatives
          </Link>
          <p className="mt-2 text-sm text-gray-500">Learn more about our focus areas and sustainable projects.</p>
        </div>
      </section>

      {/* Koketso Rakhudu Foundation */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Koketso Rakhudu Foundation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The foundation serves as an educational platform, providing training and development opportunities to community members. Accredited by the Education, Training & Development Practices Sector Education and Training Authority, the foundation focuses on skills development in areas like entrepreneurship, technology, and community leadership.
        </p>

        {/* Facebook Link */}
        <div className="text-center mt-6">
          <a 
            href="https://www.facebook.com/p/Koketso-Rakhudu-Foundation-100064528696915/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#1B5538] text-white font-semibold rounded-lg shadow-md hover:bg-[#397D5A] transition duration-200"
          >
            <FaFacebook className="mr-2 text-xl" />
            Follow us on Facebook
          </a>
          <p className="mt-2 text-sm text-gray-500">Stay connected and up-to-date with our latest initiatives and community programs.</p>
        </div>
      </section>

      {/* Coffee with Dr. Koketso Rakhudu */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Coffee with Dr. Koketso Rakhudu</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          "Coffee with Dr. Koketso" provides a platform where community members can meet with the Kgosana to discuss ideas, share challenges, and collaborate on solutions for the future.
        </p>

        {/* Interactive Coffee Icon */}
        <div className="flex justify-center my-6">
          <FaCoffee className="text-[#1B5538] text-6xl animate-pulse" />
        </div>

        {/* Join the Conversation Link */}
        <div className="text-center mt-8">
          <Link
            to="/coffee-with-koketso"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Join the Conversation
          </Link>
          <p className="mt-2 text-sm text-gray-500">Meet, share, and discuss with Dr. Koketso in an open forum.</p>
        </div>
      </section>

      {/* Image Section */}
      <div className="flex justify-center mt-12">
        <img 
          src="/images/constructionlearnersfull.jpeg" 
          alt="Community stakeholders discussing development plans" 
          className="w-full sm:w-3/4 lg:w-2/3 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Divisions;
