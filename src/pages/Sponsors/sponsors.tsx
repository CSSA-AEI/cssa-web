//import stuff errmmmmm idk
//am i in the kitchen
import SponsorsCircularCarousel from './sponsors-carousel';
import CarouselButtonProps from './sponsors-carousel.buttons';
import { sponsorsInfo } from '../../resources/sponsorsImagesInfo';
import Navbar from "../../components/Navbar";
import { getWindowDimensions } from "../Home/Home";
import BinaryBackground from "../Home/BinaryBackground";
import React, { useRef, useState } from "react";
import './sponsors.css'

const Sponsors: React.FC = () =>{
    const sponsortypes = ["type", "type", "type"];
    const sponsornames = ["Nokia", "Communications Security Establishment (CSE) Canada", "Sponsor Us!"];
    const sponsordescs = ["yap", "yap", "plssss"];
    
    const [currentSponsor, setCurrentSponsor] = useState(sponsorsInfo[0]);
    const [currentindex, setIndex] = useState(0);

    const changesponsor = (direction: string) => { 
        
        // Handle carousel navigation logic (forward/backward)
        let index = currentindex;
        
        if (direction === "fwd"){
            index++;
        }
        else if (direction === "back"){
            index--;
        }
        
        if (index === sponsorsInfo.length){
            index = 0;
        }
        else if (index < 0){
            index = sponsorsInfo.length - 1;
        }
        
        setCurrentSponsor(sponsorsInfo[index]);;
        
        setIndex(index);
    }

    return(
        <div className="sponsors-body">
            <BinaryBackground/>

            <div className="sponsors-leftside">
                <SponsorsCircularCarousel flexDirection='row' getCurrentSponsor={setCurrentSponsor} images={sponsorsInfo} carouselIndex={currentindex}/>
            </div>
            <div className="sponsors-rightside">
                <div className="sponsors-type">
                    <p>{currentSponsor.type}</p>
                </div>
                <div className="sponsors-name">
                    <h1>{currentSponsor.name}</h1>
                </div>
                <div className="sponsors-desc">
                    <p>{currentSponsor.description}</p>
                </div>
                <CarouselButtonProps changesponsor={changesponsor}/>
            </div>
        </div>
    )
}

export default Sponsors;