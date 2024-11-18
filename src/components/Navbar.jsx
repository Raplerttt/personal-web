import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      {/* Navbar yang terpusat di tengah */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Nama Portfolio (Logo) */}
        <div className="text-xl font-semibold">My Portfolio</div>

        {/* Menu untuk desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Hamburger menu untuk mobile */}
        <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>

      {/* Menu untuk mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <ul className="space-y-4">
            <li><Link to="/" className="block text-white hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="block text-white hover:text-yellow-400">About</Link></li>
            <li><Link to="/projects" className="block text-white hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/contact" className="block text-white hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
