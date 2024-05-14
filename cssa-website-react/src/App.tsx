import React from 'react';
import Navbar from './components/Navbar';

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
        <h2>Welcome to my website</h2>
        {/* Add your other components here */}
      </div>
    </div>
  );
};

export default App;
