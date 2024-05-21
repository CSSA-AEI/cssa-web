import React, {useState} from 'react';
import CircularCarousel from './CircularCarousel';
import './home-layer-2.css';

interface HomeLayer2Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer2: React.FC<HomeLayer2Props> = ({windowDimensions}) => {

    //The below part of the code is for the display when we have a portrait screen, i.e phones and tablets

    if(windowDimensions.width / windowDimensions.height <= 1){
        return(
            <div className='home-layer-2-container' style={{display: `flex`, flexDirection: `column`, height:`100vh`,  justifyContent: `space-between`, alignItems: `space-between`}}>
                <div className='home-layer-2-title' style={{justifyContent: `center`}}>Meet the Team</div>
                <div className='meet-the-team-container' style={{width: `100vw`, height: `fit-content`, alignItems: `center`}}>
                    <div className='tv-screen' style={{width: `90vw`, height: `30vh`}}>
                        <div className='tv-rims' style={{ height: `calc(100% - 1em)` }}>
                            <div className='tv-content'>
                            </div>
                        </div>
                    </div>
                </div>
                <CircularCarousel flexDirection='column'/>
            </div>
        )

    }

    return(
        <div className='home-layer-2-container' style={{display:`grid`, gridTemplateColumns: `1fr 1fr`}}>
            <div className='meet-the-team-container' style={{height: `100vh`}}>
                <div className='home-layer-2-title'>Meet the Team</div>
                <CircularCarousel flexDirection='row'/>
            </div>
            <div className='tv-screen-container'>
                <div className='tv-screen' style={{width: `45vw`, height: `40vh`}}>
                    <div className='tv-rims' style={{ height: `calc(100% - 1em)` }}>
                        <div className='tv-content'>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
};

export default HomeLayer2;