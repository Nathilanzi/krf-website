import React from 'react';

function Divisions() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-green-800">Our Divisions</h1>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">Investment & Sustainability Development Trust</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This division is responsible for driving economic growth through sustainable investment. It seeks to attract partnerships that align with the long-term goals of VisionPlan 2035, focusing on sectors like agriculture, renewable energy, and small enterprise development. The trust ensures that all investments benefit the community and contribute to the collective well-being.
        </p>
      </section>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">Koketso Rakhudu Foundation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The foundation serves as an educational platform, providing training and development opportunities to community members. Accredited by the Education, Training & Development Practices Sector Education and Training Authority, the foundation focuses on skills development in areas like entrepreneurship, technology, and community leadership. Through this initiative, community members are empowered to take an active role in shaping their future.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">Coffee with Dr. Koketso Rakhudu</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This division is a platform for dialogue and community engagement. "Coffee with Dr. Koketso" provides a space where community members can meet with the Kgosana to discuss ideas, share challenges, and collaborate on solutions for the future. This initiative fosters a culture of openness and collaboration, ensuring that the VisionPlan 2035 remains a community-driven process.
        </p>
      </section>

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
