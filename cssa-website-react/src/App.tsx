import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './ pages/Home/Home';
import About from './ pages/About/About';
import Minutes from './ pages/Minutes/Minutes';
import Volunteer from './ pages/Volunteer/Volunteer';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const App: React.FC = () => {
  const links = [
    { name: 'Events', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Volunteer', url: '/volunteer' },
    { name: 'Minutes', url: '/minutes' },
    { name: 'About', url: '/about' },
  ];

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
    <Router>
      <div>
        <Navbar title="My Navbar" links={links} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/minutes" Component={Minutes} />
          <Route path="/volunteer" Component={Volunteer} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
