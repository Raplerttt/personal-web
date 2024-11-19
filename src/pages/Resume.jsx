import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-semibold text-white">Resume</h2>
        <p className="text-lg text-gray-400 mt-6">
          Here are some of the projects I've worked on. Each project showcases my skills in frontend and backend development.
        </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-white">
        {/* Left Side - Education */}
        <div className="relative md:w-1/2">
          {/* Border Line */}
          <div className="absolute left-2 top-14 h-full border-l border-white rounded-lg">
          <div className="absolute -top-1 -left-3 w-5 h-5 bg-gradient-to-r from-red-600 to-white rounded-full"></div>
          <div className="absolute top-24 -left-3 w-5 h-5 bg-gradient-to-r from-red-500 to-white rounded-full"></div>
          </div>
          {/* Content */}
          <div className="pl-8">
            <h2 className="text-2xl font-semibold mb-4 inline-block pr-2 relative z-10">
              Education
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium">Teknik Informatika</h3>
              <p className="text-gray-400">Universitas Wanita Internasional</p>
              <p className="text-gray-500">2016 - 2020</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-medium">IPS</h3>
              <p className="text-gray-400">SMA Negeri 15 Pandeglang</p>
              <p className="text-gray-500">2013 - 2016</p>
            </div>
          </div>
        </div>

        {/* Right Side - Experience */}
        <div className="relative md:w-1/2 pl-6">
        <div className="absolute -left-1 top-14 h-full border-l border-white rounded-lg">
          <div className="absolute -top-1 -left-3 w-5 h-5 bg-gradient-to-r from-red-600 to-white rounded-full"></div>
          <div className="absolute top-44 -left-3 w-5 h-5 bg-gradient-to-r from-red-500 to-white rounded-full"></div>
        </div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Software Engineer</h3>
            <p className="text-gray-400">ABC Tech Company</p>
            <p className="text-gray-500">2021 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained web applications.</li>
              <li>Collaborated with cross-functional teams to deliver projects.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Intern</h3>
            <p className="text-gray-400">Startup XYZ</p>
            <p className="text-gray-500">2020 - 2021</p>
            <ul className="list-disc list-inside mt-2">
              <li>Assisted in designing user-friendly interfaces.</li>
              <li>Conducted testing and debugging for new features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
