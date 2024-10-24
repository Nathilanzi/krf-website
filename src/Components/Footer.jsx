import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2024 OOKKR - All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className='hover:underline'>About</Link>
          <Link to="/vision-plan" className="hover:underline">VisionPlan 2035</Link>
          <Link to="/Objective" className="hover:underline">Objective</Link>
          <Link to="/Division" className="hover:underline">Division</Link>
          <Link to="/Leadership" className="hover:underline">Leadership</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
