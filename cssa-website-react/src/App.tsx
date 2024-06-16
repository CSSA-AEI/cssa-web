import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomeLayer1 from './ pages/Home/HomeLayer1';
import HomeLayer2 from './ pages/Home/HomeLayer2';
import HomeLayer3 from './ pages/Home/HomeLayer3';
import HomeLayer4 from './ pages/Home/HomeLayer4';

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
    { name: 'Merch', url: '/merch' },
    { name: 'Minutes', url: '/minutes' },
    { name: 'About', url: '/about' },
  ];

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
    <div>
      <Navbar title="My Navbar" links={links} />
      <div className='home-layers'>
        <HomeLayer1 windowDimensions={windowDimensions}/>
        <HomeLayer2 windowDimensions={windowDimensions}/>
        <HomeLayer3 windowDimensions={windowDimensions}/>
        <HomeLayer4 />
        {/* Add your other components here */}
      </div>
    </div>
  );
};

export default App;
