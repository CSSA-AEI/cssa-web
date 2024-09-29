import React, {useEffect, useState} from "react";
import { getWindowDimensions } from "../../App";
import { Link } from "react-router-dom";
import FooterTablet from '../../images/scrapbook-images/FooterImageTablet.png';
import HeaderTablet from '../../images/scrapbook-images/HeaderImageTablet.png';
import LaptopFooter from '../../images/scrapbook-images/Laptopfooter.png';
import LaptopHeader from '../../images/scrapbook-images/LaptopHeader.png';
import Group22 from '../../images/scrapbook-images/Group22.png';
import { useTranslation } from 'react-i18next';
import './home-layer-4.css';

interface HomeLayer4Props {

}

export const useOrientation = () => {
    const [orientation, setOrientation] = useState(window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape');
  
    useEffect(() => {
      const handleOrientationChange = (e : any) => {
        setOrientation(e.matches ? 'portrait' : 'landscape');
      };
  
      const mediaQuery = window.matchMedia("(orientation: portrait)");
      mediaQuery.addListener(handleOrientationChange);
  
      return () => {
        mediaQuery.removeListener(handleOrientationChange);
      };
    }, []);
  
    return orientation;
};


const HomeLayer4: React.FC<HomeLayer4Props> = () => {

    var dimensions = getWindowDimensions();
    const orientation = useOrientation();

    const { t } = useTranslation();

    if(orientation === 'portrait' || dimensions.width < 768){

            return(
                <div className="home-layer-4-container">
                    <div className="image-top-conatiner" style={{height: `20vh`, width: `100vw`, position: 'relative', overflow: `visible`, zIndex: 2}}>
                        <img className="image-header" src={HeaderTablet} style={{width: `110vw`, transform: `translate(-8%, -31.5%)`}} alt='event-poster'/>
                    </div>
                    <div className="get-involved-container" style={{zIndex: 3}}>
                            <div className="get-involved-header">
                                <p>GET INVOLVED</p>
                                <p>WITH CSSA</p>
                            </div>
                            <div className="get-involved-grid" style={{zIndex:4}}>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/volunteer">{t('VOLUNTEER')}</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/minutes">MINUTES</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/blog">{t('BLOG')}</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="https://cssa-aei--101week-kits.square.site/">MERCH</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/about">CONTACT</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="https://docs.google.com/forms/d/e/1FAIpQLSfxvdZL2eKyZj15OGu6VKBEWURQQ9kW7LGDidkwsXRUg-x3Ug/viewform">REQUEST ITEM</Link></div>
                            </div>
                    </div>
                    <img className="image-footer" src={FooterTablet} alt='event-cutout' style={{zIndex:4}}/>
                </div>
            )

    }
    return(
       <div className="home-layer-4-container" style={{overflowY: `visible`, flexDirection: `column`}}>
            <div className="image-top-conatiner" style={{height: `20vh`, width: `100vw`, position: 'relative', overflow: `visible`}}>
                <img className="image-header" src={Group22} style={{width: `105vw`, height: `auto`}} alt='event-poster'/>
            </div>
            <div className="get-involved-container" style={{height: `80vh`}}>
                    <div className="get-involved-header">
                        <p>GET INVOLVED</p>
                        <p>WITH CSSA</p>
                    </div>
                    <div className="get-involved-grid">
                        <div className="grid-item"><Link to="/volunteer">{t("VOLUNTEER")}</Link></div>
                        <div className="grid-item"><Link to="/minutes">MINUTES</Link></div>
                        <div className="grid-item"><Link to="/blog">{t('BLOG')}</Link></div>
                        <div className="grid-item"><Link to="https://cssa-aei--101week-kits.square.site/">MERCH</Link></div>
                        <div className="grid-item"><Link to="/about">CONTACT</Link></div>
                        <div className="grid-item"><Link to="https://docs.google.com/forms/d/e/1FAIpQLSfxvdZL2eKyZj15OGu6VKBEWURQQ9kW7LGDidkwsXRUg-x3Ug/viewform">REQUEST ITEM</Link></div>
                    </div>
            </div>
            <img className="image-footer" src={LaptopFooter} alt='event-poster'/>
       </div>
   )
}

export default HomeLayer4;