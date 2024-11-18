import React, { useState } from 'react';
import portfolioImg from '../assets/1.jpg';
import ecommerceImg from '../assets/sosmed-monet.png';
import { FaLink, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const projectList = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      image: portfolioImg,
      link: '#',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      image: ecommerceImg,
      link: '#',
    },
    {
      id: 3,
      title: 'E-commerce Website',
      image: ecommerceImg,
      link: '#',
    },
    {
      id: 4,
      title: 'E-commerce Website',
      image: ecommerceImg,
      link: '#',
    },
    {
      id: 5,
      title: 'E-commerce Website',
      image: ecommerceImg,
      link: '#',
    },
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-semibold text-white">My Sertificate</h2>
        <p className="text-lg text-gray-400 mt-6">
          Here are some of the projects I've worked on. Each project showcases my skills in frontend and backend development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-48 object-cover"
            />
            {/* Overlay with Icons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Link Icon */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl mx-4 hover:text-blue-400"
              >
                <FaLink />
              </a>
              {/* Eye Icon */}
              <button
                onClick={() => openModal(project.image)}
                className="text-white text-3xl mx-4 hover:text-blue-400"
              >
                <FaEye />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            {/* Image */}
            <img
              src={currentImage}
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
