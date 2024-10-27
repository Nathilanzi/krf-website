import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1B5538] text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2024 OOKKR - All Rights Reserved</p>
        <div className="flex justify-center space-x-4 text-[#397D5A]">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className='hover:text-white'>About</Link>
          <Link to="/vision-plan" className="hover:text-white">VisionPlan 2035</Link>
          <Link to="/objectives" className="hover:text-white">Objectives</Link>
          <Link to="/divisions" className="hover:text-white">Divisions</Link>
          <Link to="/leadership" className="hover:text-white">Leadership</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
