import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-900">OOKKR</Link>
        </div>
        <div>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link to="/vision-plan" className="hover:text-blue-500">VisionPlan 2035</Link>
            </li>
            <li>
              <Link to="/objectives" className="hover:text-blue-500">Objectives</Link>
            </li>
            <li>
              <Link to="/divisions" className="hover:text-blue-500">Divisions</Link>
            </li>
            <li>
              <Link to="/leadership" className="hover:text-blue-500">Leadership</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
