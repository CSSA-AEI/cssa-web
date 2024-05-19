import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeLayer1 from './ pages/Home/HomeLayer1';
import HomeLayer2 from './ pages/Home/HomeLayer2';

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
        {/* Add your other components here */}
      </div>
    </div>
  );
};

export default App;
