import React, {useState} from 'react';
import CircularCarousel from './CircularCarousel';
import './home-layer-2.css';

interface HomeLayer2Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer2: React.FC<HomeLayer2Props> = ({windowDimensions}) => {

    //The below part of the code is for the display when we have a porttrait screen, i.e phones and tablets

    if(windowDimensions.width / windowDimensions.height <= 1){
        return(
            <div className='home-layer-2-container' style={{padding: `2em 2em`, flexDirection: `column`}}>
                <div className='home-layer-2-title'>Meet the Team</div>
                <div className='tv-screen' style={{width: `80vw`, height: `40vw`}}>
                    <div className='tv-rims' style={{ height: `calc(100% - 1em)` }}>
                        <div className='tv-content'>
                        </div>
                    </div>
                </div>
                <CircularCarousel />
            </div>
        )

    }

    return(
        <div className='home-layer-2-container'>

        </div>
    )
};

export default HomeLayer2;