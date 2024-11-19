import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Sertificate from './pages/Certificate';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sertificate" element={<Sertificate />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
