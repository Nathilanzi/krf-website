import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

function Leadership() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center text-[#1B5538]">Our Leadership</h1>

      {/* Introductory Text */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
        Leadership is about inspiring and empowering others. Kgosana Koketso Rakhudu follows the footsteps of his father, Kgosana Rantatja Jacob Rakhudu, a revered civic leader known for his integrity and dedication.
      </p>

      {/* Leadership and Legacy Section */}
      <section className="flex flex-col items-center mb-12">
        <img 
          src="/images/KgosanaKoketso.jpeg" 
          alt="Kgosana Koketso Rakhudu" 
          className="w-2/3 sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">
          Leadership and Legacy of the Office of Kgosana Koketso Rakhudu
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl text-center">
          The Office of Kgosana Koketso Rakhudu is rooted in a legacy of strong, visionary leadership established by Kgosana Rantatja Jacob Rakhudu, whose service was defined by integrity, humility, and a commitment to his people. Kgosana Koketso continues this legacy with a forward-thinking approach, ensuring the collective well-being of the community.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl text-center">
          Observing his father’s dedication to Tsitsing, Kgosana Koketso has adopted a style that values engagement, collaboration, and community growth. His leadership is not about authority but about creating a thriving community through purpose-driven governance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl text-center">
          Integrating African traditional governance with modern principles, the Office of Kgosana Koketso Rakhudu encourages each community member to reach their potential through various empowerment initiatives in education, healthcare, and economic development, all contributing to VisionPlan 2035.
        </p>
      </section>

      {/* Community Initiatives Image */}
      <section className="flex flex-col items-center mb-12">
        <img 
          src="/images/Hlolelo.jpeg" 
          alt="Community Empowerment Initiatives" 
          className="w-2/3 sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
      </section>

      {/* Principles of Leadership Section */}
      <h3 className="text-2xl font-semibold text-[#397D5A] mb-6 text-center">Principles of Leadership in the Office</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        {/* Principle Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHandHoldingHeart className="text-[#1B5538] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Purpose-Driven Governance</h4>
          <p className="text-gray-700">
            Governance is about fostering opportunities for individuals to find their roles within the community, creating a shared sense of purpose.
          </p>
        </div>
        
        {/* Principle Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-[#1B5538] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Engagement and Inclusivity</h4>
          <p className="text-gray-700">
            Through regular Kgotla sessions, the Office makes collective, transparent decisions that reflect the voices of all community members.
          </p>
        </div>
        
        {/* Principle Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaChalkboardTeacher className="text-[#1B5538] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Empowerment and Capacity Building</h4>
          <p className="text-gray-700">
            The Office is committed to education, training, and leadership development, preparing future generations to carry forward the legacy of progress.
          </p>
        </div>
        
        {/* Principle Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHandsHelping className="text-[#1B5538] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Community Commitment</h4>
          <p className="text-gray-700">
            Leadership is seen as service. The Office supports the community with health initiatives, social welfare programs, and comprehensive resources that address local needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
