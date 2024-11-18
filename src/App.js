import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; // Impor MainLayout
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Sertificate from './pages/Certificate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <MainLayout>
              <About />
            </MainLayout>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          } 
        />
        <Route 
          path="/sertificate" 
          element={
            <MainLayout>
              <Sertificate />
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
