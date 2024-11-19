import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaBriefcase, FaCertificate, FaBars, FaStudiovinari } from 'react-icons/fa'; // Mengimpor ikon dari React Icons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk menampilkan sidebar

  // Fungsi untuk membuka dan menutup sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Tombol Hamburger di layar kecil */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          className="text-white p-2 rounded-full bg-black hover:bg-red-700"
          onClick={toggleSidebar}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar - Tampilan di desktop */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:block bg-black text-white w-64 p-8 h-screen fixed top-0 left-0 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40`}
      >
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
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full"
            onClick={() => window.location.href = '/sertificate'} // Menavigasi ke halaman Sertifikat
          >
            <FaCertificate className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-300 ease-in-out">Certificate</span>
          </button>

          <button
            className="group relative flex items-center space-x-2 hover:bg-red-700 hover:text-white p-2 rounded-lg w-full"
            onClick={() => window.location.href = '/sertificate'} // Menavigasi ke halaman Sertifikat
          >
            <FaStudiovinari className="h-6 w-6" />
            <span className="absolute left-6 px-4 py-2">Certificate</span>
          </button>
        </div>
      </div>

      {/* Background Overlay ketika Sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar} // Menutup sidebar saat background diklik
        />
      )}
    </div>
  );
};

export default Sidebar;
