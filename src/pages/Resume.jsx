import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-semibold text-white">Resume</h2>
        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Ini adalah Resume saya, terdapat pendidikan, pengalaman kerja, dan organisasi.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8 text-white w-full max-w-4xl">
        {/* Left Side - Education */}
        <div className="relative md:w-1/2">
          {/* Border Line */}
          <div className="absolute left-0 sm:top-14 top-16 h-full border-l border-white rounded-lg">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-red-600 to-white rounded-full"></div>
            <div className="absolute top-24 -left-2 w-4 h-4 bg-gradient-to-r from-red-500 to-white rounded-full"></div>
          </div>
          {/* Content */}
          <div className="pl-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Pendidikan</h2>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-medium">Teknik Informatika</h3>
              <p className="text-gray-400">Universitas Wanita Internasional</p>
              <p className="text-gray-500">2016 - 2020</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium">IPS</h3>
              <p className="text-gray-400">SMA Negeri 15 Pandeglang</p>
              <p className="text-gray-500">2013 - 2016</p>
            </div>
          </div>
        </div>

        {/* Center - Experience */}
        <div className="relative md:w-1/2">
          {/* Border Line */}
          <div className="absolute left-0 sm:top-14 top-24 h-full border-l border-white rounded-lg">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-red-600 to-white rounded-full"></div>
          </div>
          {/* Content */}
          <div className="pl-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Pengalaman Kerja</h2>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-medium">Promotor</h3>
              <p className="text-gray-400">PT. Daoben Communication (VIVO) </p>
              <p className="text-gray-500">2020 - 2021</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Menjual produk sesuai target yang diberikan</li>
                <li>Cek Stok</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Organagitation */}
        <div className="relative md:w-1/2">
          {/* Border Line */}
          <div className="absolute left-0 sm:top-14 top-24 h-full border-l border-white rounded-lg">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-red-600 to-white rounded-full"></div>
            <div className="absolute top-56 -left-2 w-4 h-4 bg-gradient-to-r from-red-500 to-white rounded-full"></div>
          </div>
          {/* Content */}
          <div className="pl-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Organisasi</h2>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-medium">Ketua Umum</h3>
              <p className="text-gray-400">Himpunan Mahasiswa Informatika</p>
              <p className="text-gray-500">2024 - 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
