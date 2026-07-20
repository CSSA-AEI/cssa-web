import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import FroshWeek from './pages/FroshWeek/FroshWeek';
import About from './pages/About/About';
import Minutes from './pages/Minutes/Minutes';
import Volunteer from './pages/Volunteer/Volunteer';
import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const App: React.FC = () => {
  const links = [
    { name: '101 Week', url: '/101week' },
    { name: 'Events', url: '/events' },
    { name: 'Merch', url: 'https://cssa-aei--101week-kits.square.site/' },
//   { name: 'Blog', url: '/blog' },
//    { name: 'Volunteer', url: '/volunteer' },
//    { name: 'Minutes', url: '/minutes' },
    { name: 'About', url: '/about' },
  ];

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [show101Popup, setShow101Popup] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow101Popup(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  const close101Popup = () => {
    setShow101Popup(false);
  };

  return (
    <Router>
      <div>
        {show101Popup && (
          <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title">
            <div className="popup-card">
              <button className="popup-close" onClick={close101Popup} aria-label="Close popup">
                &#215;
              </button>
              <h2 id="popup-title">Here for 101 Week?</h2>
              <p>
                Discover the events, activities, and excitement happening throughout 101 Week.
              </p>
              <div className="popup-actions">
                <button className="popup-btn secondary" onClick={close101Popup}>
                  Maybe later
                </button>
                <Link className="popup-btn primary" to="/101week" onClick={close101Popup}>
                  Explore 101 Week
                </Link>
              </div>
            </div>
          </div>
        )}
        <Navbar title="My Navbar" links={links} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/101week" Component={FroshWeek} />
          <Route path="/about" Component={About} />
          {/* <Route path="/minutes" Component={Minutes} /> */}
          {/* <Route path="/volunteer" Component={Volunteer} /> */}
          {/* <Route path="/blog" Component={Blog} /> */}
          <Route path="/events" Component={Events} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
