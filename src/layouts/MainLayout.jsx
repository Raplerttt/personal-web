import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Hamburger from '../components/hamburger'; 

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#100f0f]">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex w-[200px] bg-black text-white flex-col justify-center items-center rounded-r-full">
        <Sidebar />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Hamburger onClick={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {children}
      </div>

      {/* Sidebar for Mobile (Modal) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-75 z-40">
          <div className="absolute top-0 left-0 w-2/3 bg-black text-white p-6 h-full">
            <Sidebar />
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
