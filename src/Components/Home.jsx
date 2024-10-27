import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'

const TaglineCarousel = () => {
  const taglines = [
    "Building a Legacy Together",
    "Leading with Purpose",
    "Empowering Our Community",
    "Preserving Heritage, Embracing Future",
    "Unity Through Traditional Values"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000); // Change tagline every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 overflow-hidden bg-gradient-to-r from-[#1B5538] to-[#397D5A] py-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-white">{taglines[currentIndex]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
    <TaglineCarousel />
    <div className="container mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#1B5538]">Office Of Kgosana Koketso Rakhudu</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome to the official site of the Office of Kgosana Koketso Rakhudu.</p>
        <div className="rounded-lg overflow-hidden shadow-xl mb-8">
          <img 
            src="/images/OfficeofKgosanaTeam.jpeg" 
            alt="Community" 
            className="w-full h-[400px] object-cover" 
          />
        </div>
      </header>

      <section className="text-left mt-12 bg-white rounded-lg shadow-md p-8">
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
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/KgosanaKoketso.jpeg" 
            alt="Kgosana" 
            className="w-full h-[400px] object-cover" 
          />
        </div>
      </section>

      <section className="text-center mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">VisionPlan 2035</h2>
        <p className="text-gray-700 mb-6">
          VisionPlan 2035 is the community's roadmap for development, focusing on three main areas:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-left">
          <li><strong>Human Individual Development:</strong> Ensuring that individuals in the community lead healthy, dignified, and educated lives.</li>
          <li><strong>Collective Development:</strong> Creating a safe, healthy, and culturally rich environment that fosters identity and promotes good governance.</li>
          <li><strong>Sustainability and Growth:</strong> Stewarding resources responsibly and fostering economic opportunities that ensure long-term prosperity for all.</li>
        </ul>
        <Link to="/vision-plan" className="inline-block px-6 py-2 bg-[#397D5A] text-white rounded-full hover:bg-[#1B5538] transition-colors duration-300">
          Learn more about VisionPlan 2035
        </Link>
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/Kgosanaquote.jpeg" 
            alt="Quote" 
            className="w-full h-[400px] object-cover" 
          />
        </div>
      </section>

      <section className="text-center mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Objectives</h2>
        <p className="text-gray-700 mb-6">
          The Office of Kgosana Koketso Rakhudu is dedicated to building a self-reliant and thriving community through traditional governance that integrates modern development strategies. This is achieved through the following:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="bg-gray-50 p-4 rounded-lg"><strong>Community engagement</strong></li>
          <li className="bg-gray-50 p-4 rounded-lg"><strong>Sustainable development</strong></li>
          <li className="bg-gray-50 p-4 rounded-lg"><strong>Social empowerment programmes</strong></li>
        </ul>
        <Link to="/objectives" className="inline-block px-6 py-2 bg-[#397D5A] text-white rounded-full hover:bg-[#1B5538] transition-colors duration-300">
          View our Objectives
        </Link>
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/Communityengagement.jpeg" 
            alt="Students initiative" 
            className="w-full h-[400px] object-cover" 
          />
        </div>
      </section>

      <footer className="mt-16 text-center p-8 bg-white rounded-lg shadow-md">
        <p className="text-gray-600">
          Contact us: {" "}
          <Link to="/contact" className="text-[#397D5A] hover:text-[#1B5538] font-semibold">
            Get in touch
          </Link>
        </p>
      </footer>
    </div>
  </div>
  );
}

export default Home;
