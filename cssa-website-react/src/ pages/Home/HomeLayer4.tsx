import React from "react";
import { getWindowDimensions } from "../../App";
import FooterTablet from '../../images/FooterImageTablet.png';
import HeaderTablet from '../../images/HeaderImageTablet.png';
import LaptopFooter from '../../images/Laptopfooter.png';
import LaptopHeader from '../../images/LaptopHeader.png';
import Group22 from '../../images/Group-22.png';
import './home-layer-4.css';

interface HomeLayer4Props {

}
const EventCard: React.FC<HomeLayer4Props> = () => {

    var dimensions = getWindowDimensions();
    var cardHeight = `45vh`;

    

    if(dimensions.width / dimensions.height <= 1){
        return(
            <div className="home-layer-4-container">
                <img className="image-header" src={HeaderTablet}/>
                <div className="get-involved-container">
                        <div className="get-involved-header">
                            <p>GET INVOLVED</p>
                            <p>WITH CSSA</p>
                        </div>
                        <div className="get-involved-grid">
                            <div className="grid-item">VOLUNTEER</div>
                            <div className="grid-item">MINUTES</div>
                            <div className="grid-item">BLOG</div>
                            <div className="grid-item">MERCH</div>
                            <div className="grid-item">1</div>
                            <div className="grid-item">CONTACT</div>
                        </div>
                </div>
                <img className="image-footer" src={FooterTablet}/>
            </div>
        )

    }
   return(
       <div className="home-layer-4-container" style={{overflowY: `visible`}}>
            <img className="image-header" src={Group22} style={{width: `102vw`, transform: `translate(-1%, -55%)`, height: `auto`}}/>
            <div className="get-involved-container" style={{height: `70vh`}}>
                    <div className="get-involved-header">
                        <p>GET INVOLVED</p>
                        <p>WITH CSSA</p>
                    </div>
                    <div className="get-involved-grid">
                        <div className="grid-item">VOLUNTEER</div>
                        <div className="grid-item">MINUTES</div>
                        <div className="grid-item">BLOG</div>
                        <div className="grid-item">MERCH</div>
                        <div className="grid-item">1</div>
                        <div className="grid-item">CONTACT</div>
                    </div>
            </div>
            <img className="image-footer" src={LaptopFooter}/>
       </div>
   )
}

export default EventCard;