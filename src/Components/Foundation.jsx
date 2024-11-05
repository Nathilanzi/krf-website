import React from 'react';

function Foundation() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* About Us Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-[#1B5538]">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
        Founded on May 1, 2016, the Koketso Rakhudu Foundation (KRF) operates as an accredited Community Education & Training Center recognized by ETDP SETA. Nestled in Maile Kopman within the Royal Bafokeng Nation (RBN), a historically rich community of 150,000 people, KRF is committed to bridging traditional heritage with modern educational practices. The Foundation serves the North East Region, encompassing nine villages and a population deeply rooted in culture and resilience. Its primary focus is to uplift the community through sustainable and inclusive education.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Mission and Vision</h2>
        <p className="text-lg text-gray-700"><strong>Mission:</strong> To provide transformative, community-focused education and training that inspires lifelong learning and personal development.</p>
        <p className="text-lg text-gray-700"><strong>Vision:</strong> "Empowering Lives with Excellence" by equipping the community with skills and opportunities that align with both local heritage and future challenges.</p>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Love:</strong> Promoting unity and understanding.</li>
          <li><strong>Integrity:</strong> Upholding transparency and trustworthiness.</li>
          <li><strong>Lead:</strong> Leading by example and active involvement.</li>
          <li><strong>Excellence:</strong> Ensuring top-tier delivery in education and training programs.</li>
        </ul>
      </section>

      {/* Key Programmes Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Key Programmes</h2>
        <p className="text-lg text-gray-700 mb-4">Our primary programs focus on practical, impactful training and community empowerment:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Accredited Skills Development Workshops:</strong> Courses tailored to practical, job-aligned skills in office and project management, business practices, and more.</li>
          <li><strong>Youth Empowerment Initiatives:</strong> Programs centered around sports, arts, and culture, encouraging leadership and teamwork.</li>
          <li><strong>Small Business and Entrepreneurial Support:</strong> Training and resources to promote job creation and economic growth, backed by partnerships with ABSA and other institutions.</li>
        </ul>
      </section>

      {/* Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Success Stories and Impact</h2>
        <p className="text-lg text-gray-700 mb-4">KRF has positively impacted over 1,100 individuals through various programs:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Social, Women & Disability Development Program (2016):</strong> Benefited 30 participants.</li>
          <li><strong>Grade 12 Re-write Program (2017):</strong> Assisted 105 students to improve their education.</li>
          <li><strong>Microsoft Software Development Program (2023):</strong> Equipped 25 participants with vital IT skills.</li>
        </ul>
      </section>

      {/* Community Engagement Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Community Engagement</h2>
        <p className="text-lg text-gray-700 mb-4">Our engagement initiatives include open forums such as <strong>“Coffee with Dr. Koketso”</strong>, fostering community dialogue and collaboration. Cultural and educational events are held to promote unity and shared growth.</p>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Upcoming Events</h2>
        <p className="text-lg text-gray-700 mb-4">Check our calendar for future workshops, educational programs, and cultural events that help connect and grow our community.</p>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Testimonials</h2>
        <blockquote className="italic text-gray-700 mb-4">“Education is not only about learning facts but nurturing the potential within each individual to lead and inspire.” — Dr. Koketso Rakhudu</blockquote>
        <p className="text-lg text-gray-700">Hear from community members about how KRF programs have impacted their lives and career trajectories.</p>
      </section>

      {/* Accreditations and Partnerships Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Accreditations and Partnerships</h2>
        <p className="text-lg text-gray-700 mb-4">KRF holds accreditation from seven SETAs, offering 44 full qualifications. Partnerships with companies such as Anglo American, BMW, and Metropolitan have expanded our reach and integrated modern technologies like augmented reality into our e-learning systems.</p>
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Contact Information</h2>
        <p className="text-lg text-gray-700"><strong>Address:</strong> Maile Kopman, Motseng Section, Stand No. 517, 0365</p>
        <p className="text-lg text-gray-700"><strong>Telephone:</strong> 014-880-0493</p>
        <p className="text-lg text-gray-700"><strong>Website:</strong> <a href="http://www.koketsorakhudufoundation.com" className="text-[#397D5A] hover:text-[#1B5538]">www.koketsorakhudufoundation.com</a></p>
        <p className="text-lg text-gray-700"><strong>Email:</strong> <a href="mailto:info@koketsorakhudufoundation.com" className="text-[#397D5A] hover:text-[#1B5538]">info@koketsorakhudufoundation.com</a></p>
      </section>
    </div>
  );
}

export default Foundation;
