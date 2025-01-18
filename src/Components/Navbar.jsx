import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBullseye, 
  FaUsers, 
  FaUserTie, 
  FaEnvelope, 
  FaSeedling,
  FaCalendar, 
  FaTrophy,
  FaCrown
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import ResponsiveLogo from './ResponsiveLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaHome className="w-5 h-5" />, text: "Home", path: "/" },
    { icon: <FaInfoCircle className="w-5 h-5" />, text: "About", path: "/about" },
    { icon: <FaCalendar className="w-5 h-5" />, text: "Calendar", path: "/calendar" },
    { icon: <FaSeedling className="w-5 h-5" />, text: "VisionPlan 2035", path: "/vision-plan" },
    { icon: <FaBullseye className="w-5 h-5" />, text: "Objectives", path: "/objectives" },
    { icon: <FaTrophy className="w-5 h-5" />, text: "Success Stories", path: "/successstories" },
    { icon: <FaUsers className="w-5 h-5" />, text: "Divisions", path: "/divisions" },
    { icon: <FaUserTie className="w-5 h-5" />, text: "Leadership", path: "/leadership" },
    { icon: <FaCrown className="w-5 h-5" />, text: "Kgosana Dr  Koketso Rakhudu", path: "/kgosana-koketso-rakhudu-profile"},
    { icon: <FaEnvelope className="w-5 h-5" />, text: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className={`hidden lg:flex items-center justify-between px-6 py-4 sticky top-0 transition-all duration-300 z-50 ${
        scrolled ? 'bg-white/50 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <Link to="/">
          <ResponsiveLogo
            scrolled={scrolled}
            className="transform hover:scale-105"
           />
        </Link>
        <div className="flex items-center space-x-6 text-green-700">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center hover:text-green-800 transform transition-transform duration-200 hover:scale-105"
            >
              <span className="flex-shrink-0 mr-2">
                {link.icon}
              </span>
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Components */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 text-green-700 hover:bg-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Navbar */}
        <nav className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-green-700 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Logo */}
          <Link 
            to="/" 
            className="block p-4 text-center border-b border-gray-300"
            onClick={() => setIsOpen(false)}
          >
          <ResponsiveLogo
           scrolled={false} className="mx-auto" />
</Link>

          {/* Nav Links */}
          <div className="py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 text-green-700 hover:text-green-800 hover:bg-gray-200 transform transition-transform duration-200 hover:scale-105"
              >
                <span className="flex-shrink-0 w-6">
                  {link.icon}
                </span>
                <span className="ml-3">{link.text}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
