import React from 'react';
import { FaHome, FaUserAlt, FaBriefcase, FaPhoneAlt } from 'react-icons/fa'; // Mengimpor ikon dari React Icons

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 p-8 h-screen fixed top-0 left-14 flex justify-center items-center">
      <div className="text-center">
        <div className="space-y-4">
          <button
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full"
            onClick={() => window.location.href = '/'} // Menavigasi ke halaman Home
          >
            <FaHome className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-300 ease-in-out">Home</span>
          </button>

          <button
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full"
            onClick={() => window.location.href = '/about'} // Menavigasi ke halaman About
          >
            <FaUserAlt className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-300 ease-in-out">About</span>
          </button>

          <button
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full"
            onClick={() => window.location.href = '/projects'} // Menavigasi ke halaman Projects
          >
            <FaBriefcase className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-300 ease-in-out">Projects</span>
          </button>

          <button
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full duration-300 ease-in-out transition-opacity "
            onClick={() => window.location.href = '/contact'} // Menavigasi ke halaman Contact
          >
            <FaPhoneAlt className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-300 ease-in-out">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;