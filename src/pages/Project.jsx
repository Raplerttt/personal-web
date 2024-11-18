import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="flex-1 p-10">
      <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
      <p className="mt-4 text-lg text-gray-600">
        Here are some of the projects I've worked on. Each project showcases my skills in frontend and backend development.
      </p>
      
      {/* Project 1 */}
      <img src="../assets/sharingan.png" alt="" />
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Project 1: Personal Portfolio Website</h3>
        <p className="mt-2 text-lg text-gray-600">
          A responsive personal portfolio website built with React and Tailwind CSS. It showcases my work and provides a contact form.
        </p>
        <a href="#" className="mt-4 inline-block text-blue-500">View Project</a>
      </div>

      {/* Project 2 */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Project 2: E-commerce Website</h3>
        <p className="mt-2 text-lg text-gray-600">
          An e-commerce website built with React, Redux, and Firebase for authentication and database storage. It allows users to browse products and make purchases.
        </p>
        <a href="#" className="mt-4 inline-block text-blue-500">View Project</a>
      </div>

      {/* Project 3 */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Project 3: Blogging Platform</h3>
        <p className="mt-2 text-lg text-gray-600">
          A blogging platform built with Node.js, Express, and MongoDB. It allows users to create, edit, and delete blog posts.
        </p>
        <a href="#" className="mt-4 inline-block text-blue-500">View Project</a>
      </div>
    </section>
  );
};

export default Projects;
