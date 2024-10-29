import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Calendar, Users, Target, Phone } from 'lucide-react';

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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-20 overflow-hidden bg-gradient-to-r from-[#1B5538] to-[#397D5A] py-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-0.5 bg-white"
              style={{
                left: `${i * 8}px`,
                transform: 'rotate(45deg)',
                transformOrigin: 'top'
              }}
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl font-semibold text-white">{taglines[currentIndex]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-[#1B5538]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#1B5538] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#1B5538] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TaglineCarousel />
      
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img 
          src="/images/OfficeofKgosanaTeam.jpeg" 
          alt="Community" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1 
              className="text-5xl font-bold text-white mb-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Office Of Kgosana Koketso Rakhudu
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to the official site of the Office of Kgosana Koketso Rakhudu
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Calendar}
            title="Community Events"
            description="Regular gatherings and traditional meetings fostering community engagement"
          />
          <FeatureCard 
            icon={Users}
            title="Cultural Heritage"
            description="Preserving and celebrating our rich cultural identity"
          />
          <FeatureCard 
            icon={Target}
            title="Vision 2035"
            description="Strategic planning for sustainable community development"
          />
          <FeatureCard 
            icon={Phone}
            title="Stay Connected"
            description="Easy access to community resources and support"
          />
        </div>

        {/* Vision Plan Section */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#1B5538] mb-4">VisionPlan 2035</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive roadmap for community development and growth...
              </p>
              <Link 
                to="/vision-plan"
                className="inline-flex items-center gap-2 text-[#1B5538] hover:text-[#397D5A] font-semibold"
              >
                Explore the Vision <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="/images/Kgosanaquote.jpeg" 
                alt="Vision" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Objectives Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B5538] mb-8 text-center">Objectives</h2>
          <div className="flex justify-center">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md" // Changed max-w-xs to max-w-md for a wider card
              whileHover={{ y: -5 }}
            >
              <img 
                src="/images/Gasgiveaway.jpeg" 
                alt="Objectives" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B5538] mb-2">Our Objectives</h3>
                <p className="text-gray-600 mb-4">Discover the key objectives guiding our initiatives...</p>
                <Link 
                  to="/objectives"
                  className="text-[#397D5A] hover:text-[#1B5538] font-semibold inline-flex items-center gap-2"
                >
                  View Objectives <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.footer 
          className="text-center p-8 bg-white rounded-xl shadow-lg"
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#1B5538] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to serve our community. Reach out to us for any inquiries or support.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
          >
            Contact Us <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.footer>
      </div>
    </div>
  );
}

export default Home;
