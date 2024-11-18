import React from 'react';
import Sidebar from '../components/SideBar'; // Pastikan nama file sesuai dengan nama file yang benar

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#100f0f]">
      {/* Sidebar Kiri - Lebar lebih besar */}
      <div className="w-[200px] bg-black text-white flex flex-col justify-center items-center rounded-r-full">
        <Sidebar />
      </div>

      {/* Konten Utama Kanan - Adjust margin agar tidak tertutup */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
