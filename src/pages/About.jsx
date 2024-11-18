import React from 'react';
import { Link } from 'react-router-dom'; 

const About = () => {
  const foto = require('../assets/1.jpg');

  return (
    <div className="relative flex items-center justify-center p-2 right-10 min-h-screen">
      <div className="flex items-center justify-between w-full max-w-5xl p-6 rounded-lg shadow-xl">
        {/* Kiri: Foto dengan Background Abstrak */}
        <div 
          className="relative w-1/3 h-96 bg-cover bg-center rounded-lg" 
          style={{ backgroundImage: `url(${foto})` }} // Gunakan foto yang di-import
        >
          <img 
            src={foto} // Gunakan variable foto, tanpa tanda kutip
            alt="Foto Profil"
            className="absolute bottom-4 left-4 w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        {/* Kanan: Informasi Pribadi */}
        <div className="w-2/3 pl-16">
          <h1 className="text-3xl font-bold text-white">Informasi System Student & IT Enthusias</h1>

          {/* Membagi informasi menjadi dua kolom */}
          <div className="flex space-x-8 mt-4 text-white">
            <div className="w-1/2 mt-4">
              <p className="flex items-center">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Phone:</strong>
                {/* Ganti anchor dengan Link */}
                <Link to="tel:+62123456789" className="hover:text-red-500">+62 123 456 789</Link>
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Email:</strong>
                {/* Ganti anchor dengan Link */}
                <Link to="mailto:email@example.com" className="hover:text-red-500">email@example.com</Link>
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Alamat:</strong> Labuan, Pandeglang
              </p>
            </div>
            <div className="w-1/2 mt-4">
              <p className="flex items-center">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Status:</strong> Available
              </p>
              <p className="flex items-center mt-6">
                <span className="mr-2 text-red-500">{'>'}</span>
                <strong className="mr-2">Pendidikan:</strong>Teknik Informatika
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
