import React from 'react';
import { Link } from 'react-router-dom'; 

const About = () => {
  const foto = require('../assets/1.jpg');

  return (
    <div className="relative flex items-center justify-center p-4 sm:p-6 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-5xl p-6 rounded-lg shadow-xl">
        {/* Kiri: Foto dengan Background Abstrak */}
        <div 
          className="relative w-full sm:w-1/3 h-64 sm:h-96 bg-cover bg-center rounded-lg mb-6 sm:mb-0" 
          style={{ backgroundImage: `url(${foto})` }} // Gunakan foto yang di-import
        >
          <img 
            src={foto} // Gunakan variable foto, tanpa tanda kutip
            alt="Foto Profil"
            className="absolute bottom-4 left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white"
          />
        </div>

        {/* Kanan: Informasi Pribadi */}
        <div className="w-full sm:w-2/3 sm:pl-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Informasi System Student & IT Enthusias</h1>

          {/* Membagi informasi menjadi dua kolom */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 text-white">
            <div className="w-full sm:w-1/2 mt-4">
              <p className="flex items-center">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Phone:</strong>
                {/* Ganti anchor dengan Link */}
                <Link to="wa.me+6287771177155" className="hover:text-red-500">+62 8777 1177 155</Link>
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Email:</strong>
                {/* Ganti anchor dengan Link */}
                <Link to="mailto:mhmdraffi1002@gmail.com" className="hover:text-red-500">Mhmdraffi1002@gmail.com</Link>
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Alamat:</strong> Labuan, Pandeglang
              </p>
            </div>
            <div className="w-full sm:w-1/2 mt-4">
              <p className="flex items-center">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Status:</strong> Available
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Pendidikan:</strong> Teknik Informatika
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Portofolio :</strong>
                <Link to="https://portofolio-three-indol.vercel.app/" className="hover:text-red-500">Klik here</Link>
              </p>
            </div>
          </div>

          {/* Cerita Tentang Anda */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white">Cerita Saya</h2>
            <p className="mt-2 text-white">
              Saya adalah seorang profesional yang bersemangat dalam bidang teknologi dan pengembangan perangkat lunak. 
              Dengan latar belakang pendidikan di bidang teknik informatika, saya terus berusaha untuk meningkatkan keterampilan dan pengetahuan saya. 
              Saya percaya bahwa teknologi memiliki kekuatan untuk mengubah dunia, dan saya berkomitmen untuk terus belajar dan berinovasi dalam industri ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
