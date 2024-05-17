import React from 'react';
import Navbar from './components/Navbar';
import HomeLayer1 from './ pages/Home/HomeLayer1';

const App: React.FC = () => {
  const links = [
    { name: 'Events', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Merch', url: '/merch' },
    { name: 'Minutes', url: '/minutes' },
    { name: 'About', url: '/about' },
  ];

  return (
    <div>
      <Navbar title="My Navbar" links={links} />
      <div className='home-layer-1'>
        <HomeLayer1 />
        <div style={{width: '100vw', height: '500px', backgroundColor:'red'}}></div>
        {/* Add your other components here */}
      </div>
    </div>
  );
};

export default App;
