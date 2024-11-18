import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex-1 p-10">
      <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
      <p className="mt-4 text-lg text-gray-600">
        I am a frontend developer with a passion for creating dynamic and responsive websites. 
        I specialize in using modern JavaScript frameworks like React, and I enjoy learning new web technologies to keep up with industry trends.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        I strive to write clean, maintainable code and am always looking for new opportunities to challenge myself. 
        I enjoy working in teams, sharing ideas, and continuously improving my skills.
      </p>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Skills:</h3>
        <ul className="mt-4 text-lg text-gray-600 space-y-2">
          <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git, GitHub)</li>
          <li>API Integration (RESTful APIs)</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
