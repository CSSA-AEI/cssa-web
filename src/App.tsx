import React , { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,  Link , Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import Home from './pages/Home/Home';
import FroshWeek from './pages/FroshWeek/FroshWeek';
import About from './pages/About/About';
//import Minutes from './pages/Minutes/Minutes';
//import Volunteer from './pages/Volunteer/Volunteer';
//import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';

const POPUP_SESSION_KEY = 'cssa-101-week-popup-seen';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const AppContent: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isFroshWeekPage = location.pathname === '/101week';
  const initialPath = useRef(location.pathname);
  const [isInitialPage, setIsInitialPage] = useState(true);

  const links = [
    { name: '101 Week', url: '/101week' },
    { name: 'Events', url: '/events' },
    { name: 'Merch', url: 'https://cssa-aei.square.site/' },
//  { name: 'Blog', url: '/blog' },
//  { name: 'Volunteer', url: '/volunteer' },
//  { name: 'Minutes', url: '/minutes' },
    { name: 'About', url: '/about' },
  ];

  const [show101Popup, setShow101Popup] = useState(false);

  useEffect(() => {
    if (location.pathname !== initialPath.current) {
      setIsInitialPage(false);
      setShow101Popup(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) {
      return;
    }

    sessionStorage.setItem(POPUP_SESSION_KEY, 'true');

    if (initialPath.current === '/101week') {
      return;
    }

    const timer = window.setTimeout(() => setShow101Popup(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  const close101Popup = () => {
    setShow101Popup(false);
  };


  return (
    <div>
        {show101Popup && isInitialPage && !isFroshWeekPage && (
          <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title">
            <div className="popup-card">
              <button className="popup-close" onClick={close101Popup} aria-label="Close popup">
                &#215;
              </button>
              <h2 id="popup-title">{t('Here for 101 Week?')}</h2>
              <p>
                {t('Discover the events, activities, and excitement happening throughout 101 Week.')}
              </p>
              <div className="popup-actions">
                <Link className="popup-btn primary" to="/101week" onClick={close101Popup}>
                  {t('Explore 101 Week')}
                </Link>
                <button className="popup-btn secondary" onClick={close101Popup}>
                  {t('Maybe Later')}
                </button>
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
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
