import React from 'react';

function Leadership() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-green-800">Our Leadership</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
        Leadership is about inspiring and empowering others. Kgosana Koketso Rakhudu follows the footsteps of his father, Kgosana Rantatja Jacob Rakhudu, a revered civic leader.
      </p>

      <section className="flex flex-col items-center mb-12">
        <img 
          src="/images/KgosanaKoketso.jpeg" 
          alt="Kgosana Koketso Rakhudu" 
          className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">
          Leadership and Legacy of the Office of Kgosana Koketso Rakhudu
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Office of Kgosana Koketso Rakhudu is rooted in a legacy of strong, visionary leadership established by Kgosana Rantatja Jacob Rakhudu, whose service was defined by integrity, humility, and a commitment to his people. Kgosana Koketso continues this legacy with a forward-thinking approach, ensuring the collective well-being of the community.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Observing his father’s dedication to Tsitsing, Kgosana Koketso has adopted a style that values engagement, collaboration, and community growth. His leadership is not about authority but about creating a thriving community through purpose-driven governance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Integrating African traditional governance with modern principles, the Office of Kgosana Koketso Rakhudu encourages each community member to reach their potential through various empowerment initiatives in education, healthcare, and economic development, all contributing to VisionPlan 2035.
        </p>
      </section>

      <section className="flex flex-col items-center mb-12">
        <img 
          src="/images/Hlolelo.jpeg" 
          alt="Community Empowerment Initiatives" 
          className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
      </section>

      <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">Principles of Leadership in the Office</h3>
      <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 leading-relaxed mb-12">
        <li>
          <strong>Purpose-Driven Governance:</strong> Governance is about fostering opportunities for individuals to find their roles within the community, creating a shared sense of purpose.
        </li>
        <li>
          <strong>Engagement and Inclusivity:</strong> Through regular Kgotla sessions, the Office makes collective, transparent decisions that reflect the voices of all community members.
        </li>
        <li>
          <strong>Empowerment and Capacity Building:</strong> The Office is committed to education, training, and leadership development, preparing future generations to carry forward the legacy of progress.
        </li>
        <li>
          <strong>Community Commitment:</strong> Leadership is seen as service. The Office supports the community with health initiatives, social welfare programs, and comprehensive resources that address local needs.
        </li>
      </ul>
    </div>
  );
}

export default Leadership;
