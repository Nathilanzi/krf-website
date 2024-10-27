import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#1B5538] shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold text-white">OOKKR</Link>
        </div>
        <div>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/" className="hover:text-[#397D5A]">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#397D5A]">About</Link>
            </li>
            <li>
              <Link to="/vision-plan" className="hover:text-[#397D5A]">VisionPlan 2035</Link>
            </li>
            <li>
              <Link to="/objectives" className="hover:text-[#397D5A]">Objectives</Link>
            </li>
            <li>
              <Link to="/divisions" className="hover:text-[#397D5A]">Divisions</Link>
            </li>
            <li>
              <Link to="/leadership" className="hover:text-[#397D5A]">Leadership</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#397D5A]">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
