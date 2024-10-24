import React, {useState} from 'react';
import { Link } from "react-router-dom";
import NavLogo from '../images/small_logo.png';
import { useTranslation } from 'react-i18next';
import './navbar-styling.css';

interface NavbarProps {
  title: string;
  links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'><img src={NavLogo} alt={"CSSA Logo"} /></Link>
            </div>
            <ul className={showDropdown ? 'navbar-links dropdown-menu active' : 'navbar-links'}>
                {links.map((link, index) => (
                <li className='navbar-link' key={index}>
                    <Link to={link.url}>{t(link.name)}</Link>
                </li>
                ))}
                <button onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'FR' : 'EN'}
                </button>
            </ul>
            <div className='dropdown-button' onClick={toggleDropdown}>
                &#9776; {/* Unicode for three horizontal bars (Hamburger menu icon) */}
            </div>
        </div>
    );
};

export default Navbar;
