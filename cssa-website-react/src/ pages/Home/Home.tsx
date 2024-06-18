import React, { useState } from 'react';
import HomeLayer1 from './HomeLayer1';
import HomeLayer2 from './HomeLayer2';
import HomeLayer3 from './HomeLayer3';
import HomeLayer4 from './HomeLayer4';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Home: React.FC = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
        <div className='home-layers'>
          <HomeLayer1 windowDimensions={windowDimensions}/>
          <HomeLayer2 windowDimensions={windowDimensions}/>
          <HomeLayer3 windowDimensions={windowDimensions}/>
          <HomeLayer4 />
        </div>
  );
};

export default Home;
