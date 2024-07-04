import React, {useEffect, useState} from "react";
import { getWindowDimensions } from "../../App";
import { Link } from "react-router-dom";
import FooterTablet from '../../images/scrapbook-images/FooterImageTablet.png';
import HeaderTablet from '../../images/scrapbook-images/HeaderImageTablet.png';
import LaptopFooter from '../../images/scrapbook-images/Laptopfooter.png';
import LaptopHeader from '../../images/scrapbook-images/LaptopHeader.png';
import Group22 from '../../images/scrapbook-images/Group22.png';
import BinaryBackground from "./BinaryBackground";
import './home-layer-4.css';

interface HomeLayer4Props {

}

const useOrientation = () => {
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
    console.log(orientation)

    if(orientation === 'portrait' || dimensions.width < 768){

        //Phones
        if(dimensions.width < 500){
            return(
                <div className="home-layer-4-container">
                    <img className="image-header" src={HeaderTablet} style={{transform: `translate(-8%,-45%)`, zIndex: 2, width: `110vw`, animation: `none`}}/>
                    <div className="get-involved-container" style={{zIndex: 3}}>
                            <div className="get-involved-header">
                                <p>GET INVOLVED</p>
                                <p>WITH CSSA</p>
                            </div>
                            <div className="get-involved-grid">
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/volunteer">VOLUNTEER</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/minutes">MINUTES</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/blog">BLOG</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}>MERCH</div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/about">CONTACT</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxvdZL2eKyZj15OGu6VKBEWURQQ9kW7LGDidkwsXRUg-x3Ug/viewform">REQUEST ITEM</a></div>
                            </div>
                    </div>
                    <img className="image-footer" src={FooterTablet} alt='event-cutout' style={{zIndex:4}}/>
                </div>
            )
        }
        else{
            return(
                <div className="home-layer-4-container">
                    <img className="image-header" src={HeaderTablet} style={{transform: `translate(-8%,-45%)`, zIndex: 2, width: `110vw`, animation: `none`}}/>
                    <div className="get-involved-container" style={{zIndex: 3}}>
                            <div className="get-involved-header">
                                <p>GET INVOLVED</p>
                                <p>WITH CSSA</p>
                            </div>
                            <div className="get-involved-grid">
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/volunteer">VOLUNTEER</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/minutes">MINUTES</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/blog">BLOG</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}>MERCH</div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><Link to="/about">CONTACT</Link></div>
                                <div className="grid-item" style={{boxShadow: `6px 6px #14283a`}}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxvdZL2eKyZj15OGu6VKBEWURQQ9kW7LGDidkwsXRUg-x3Ug/viewform">REQUEST ITEM</a></div>
                            </div>
                    </div>
                    <img className="image-footer" src={FooterTablet} alt='event-cutout' style={{zIndex:4}}/>
                </div>
            )
        }

    }
    console.log('not in portrait')
    return(
       <div className="home-layer-4-container" style={{overflowY: `visible`}}>
            <img className="image-header" src={Group22} style={{width: `105vw`, height: `auto`}} alt='event-poster'/>
            <div className="get-involved-container" style={{height: `70vh`}}>
                    <div className="get-involved-header">
                        <p>GET INVOLVED</p>
                        <p>WITH CSSA</p>
                    </div>
                    <div className="get-involved-grid">
                        <div className="grid-item"><Link to="/volunteer">VOLUNTEER</Link></div>
                        <div className="grid-item"><Link to="/minutes">MINUTES</Link></div>
                        <div className="grid-item"><Link to="/blog">BLOG</Link></div>
                        <div className="grid-item">MERCH</div>
                        <div className="grid-item"><Link to="/about">CONTACT</Link></div>
                        <div className="grid-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxvdZL2eKyZj15OGu6VKBEWURQQ9kW7LGDidkwsXRUg-x3Ug/viewform">REQUEST ITEM</a></div>
                    </div>
            </div>
            <img className="image-footer" src={LaptopFooter} alt='event-poster'/>
       </div>
   )
}

export default HomeLayer4;