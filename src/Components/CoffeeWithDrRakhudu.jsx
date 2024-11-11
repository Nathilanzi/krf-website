import React, { useState } from "react";

const CoffeeWithDrRakhudu = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the email or handle form submission
    alert(`Email sent with the following details:
      Name: ${name}
      Email: ${email}
      Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <section>
        <h1 className="text-4xl font-bold text-center mb-8 text-[#397D5A]">
          Coffee with Dr. Koketso Rakhudu
        </h1>
        <img 
                src="/images/CoffeeDesign1.jpg" 
                alt="Logo" 
                className="mx-auto mb-4 w-64 h-64 object-contain opacity-90"
              />
        <p className="text-lg mb-4 text-gray-700">
          Coffee with Dr. Koketso Rakhudu is an innovative consulting and mentorship program crafted for social changemakers and entrepreneurs. It’s not just a series of meetings—it’s a transformative experience designed to equip participants with essential skills, inspire innovative thinking, and cultivate powerful networks. Through the program, participants tackle real-world social and economic challenges within their communities. This year-long journey, punctuated by quarterly networking events, invites participants to "sip, share, and strategize" with Dr. Koketso Rakhudu, setting the stage for creative idea generation and impactful change.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Vision and Mission</h2>
        <p><strong>Vision:</strong> To empower social changemakers and entrepreneurs as leaders in innovation and community impact.</p>
        <p><strong>Mission:</strong> To provide participants with the skills, creative perspectives, and connections necessary to address social challenges effectively, fostering a culture of excellence, opportunity, and action.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1B5538]">Program Structure and Framework</h2>
        <h3 className="text-xl font-semibold mb-2 text-[#1B5538]">Program Format:</h3>
        <p>This year-long initiative combines monthly workshops, one-on-one mentorship, and group networking sessions. Activities are held both in person and virtually to ensure inclusivity and accessibility.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-[#1B5538]">Core Values:</h3>
        <ul className="list-disc ml-8 text-gray-700">
          <li><strong>Creativity:</strong> Developing out-of-the-box solutions through creative problem-solving workshops, brainstorming sessions, and innovation labs.</li>
          <li><strong>Opportunity:</strong> Identifying and capitalizing on opportunities within the social sector through market analysis and value proposition sessions.</li>
          <li><strong>Far-sightedness:</strong> Strategic planning focused on sustainability and long-term impact, guiding participants to anticipate future challenges and opportunities.</li>
          <li><strong>Fruitfulness:</strong> A focus on generating impactful results, with workshops on measuring social impact and designing financially sustainable programs.</li>
          <li><strong>Excellence:</strong> Emphasizing high standards and ethical considerations, ensuring quality in service delivery.</li>
          <li><strong>Execution:</strong> Practical training on project management and implementation strategies to turn ideas into actionable plans.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1B5538]">Program Components</h2>
        <ul className="list-disc ml-8 text-gray-700">
          <li><strong>Workshops:</strong> Monthly sessions focusing on each core value, featuring insights from guest speakers, industry experts, and social entrepreneurs.</li>
          <li><strong>Mentorship:</strong> Personalized guidance through one-on-one mentorship with Dr. Koketso Rakhudu and other leaders.</li>
          <li><strong>Networking Events:</strong> Quarterly gatherings to connect participants with potential collaborators, investors, and industry influencers.</li>
          <li><strong>Community Projects:</strong> Real-world application through community engagement, enabling participants to test their ideas and gain practical experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1B5538]">Target Audience</h2>
        <p>The program is designed for social entrepreneurs, changemakers, and community leaders who are eager to build their skills and expand their networks. It targets individuals and organizations committed to addressing social and economic challenges within their communities.</p>

        {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1B5538]">How to Join</h2>
        <p>If you're interested in becoming part of "Coffee with Dr. Koketso Rakhudu" and unlocking your potential as a social changemaker, fill out the form below to express your interest.</p> */}

        {/* Form Section */}
        {/* <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-[#1B5538]">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#397D5A] focus:outline-none focus:ring-2 focus:ring-[#397D5A]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-[#1B5538]">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#397D5A] focus:outline-none focus:ring-2 focus:ring-[#397D5A]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold text-[#1B5538]">Why do you want to join Coffee with Dr. Koketso Rakhudu?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#397D5A] focus:outline-none focus:ring-2 focus:ring-[#397D5A]"
              required
            />
          </div>

          <button type="submit" className="px-6 py-2 bg-[#397D5A] text-white rounded-lg hover:bg-[#1B5538] transition">
            Submit
          </button>
        </form> */}
      </section>
    </div>
  );
};

export default CoffeeWithDrRakhudu;
