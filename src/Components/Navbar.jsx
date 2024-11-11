import React, { useState } from 'react';
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
  FaTrophy
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { icon: <FaHome className="w-5 h-5" />, text: "Home", path: "/" },
    { icon: <FaInfoCircle className="w-5 h-5" />, text: "About", path: "/about" },
    { icon: <FaCalendar className="w-5 h-5" />, text: "Calendar", path: "/calendar" },
    { icon: <FaSeedling className="w-5 h-5" />, text: "VisionPlan 2035", path: "/vision-plan" },
    { icon: <FaBullseye className="w-5 h-5" />, text: "Objectives", path: "/objectives" },
    { icon: <FaTrophy className="w-5 h-5" />, text: "Success Stories", path: "/successstories" },
    { icon: <FaUsers className="w-5 h-5" />, text: "Divisions", path: "/divisions" },
    { icon: <FaUserTie className="w-5 h-5" />, text: "Leadership", path: "/leadership" },
    { icon: <FaEnvelope className="w-5 h-5" />, text: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden lg:flex items-center justify-between px-6 py-4 bg-[#1B5538] text-white">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="h-12 w-auto transition-transform transform hover:scale-105"
           />
        </Link>
        <div className="flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center hover:text-[#397D5A] transition-colors duration-200"
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
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#1B5538] text-white hover:bg-[#397D5A]"
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
        <nav className={`fixed top-0 left-0 h-full w-64 bg-[#1B5538] text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Logo */}
          <Link 
            to="/" 
            className="block p-4 text-xl font-bold text-center border-b border-[#397D5A]"
            onClick={() => setIsOpen(false)}
          >
            OOKKR
          </Link>

          {/* Nav Links */}
          <div className="py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:bg-[#397D5A] transition-colors duration-200"
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
