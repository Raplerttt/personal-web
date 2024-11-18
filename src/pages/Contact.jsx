import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Anda dapat menambahkan logika untuk mengirimkan formulir
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="flex-1 p-10">
      <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-600">
        Feel free to reach out to me for inquiries, collaborations, or just to say hello!
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
