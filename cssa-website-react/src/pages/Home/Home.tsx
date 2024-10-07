import React, { useState , Suspense , useEffect } from 'react';
import HomeLayer1 from './HomeLayer1';
const HomeLayer2 = React.lazy(() => import('./HomeLayer2'));
const HomeLayer3 = React.lazy(() => import('./HomeLayer3'));
const HomeLayer4 = React.lazy(() => import('./HomeLayer4'));

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
        <div className='home-layers' style={{position: "relative", top:"8vh"}}>
          <HomeLayer1 windowDimensions={windowDimensions}/>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeLayer2 windowDimensions={windowDimensions} />
            <HomeLayer3 windowDimensions={windowDimensions} />
            <HomeLayer4 />
          </Suspense>
        </div>
  );
};

export default Home;
