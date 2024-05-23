import React, {useState} from 'react';
import CircularCarousel from './CircularCarousel';
import './home-layer-2.css';

interface HomeLayer2Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer2: React.FC<HomeLayer2Props> = ({windowDimensions}) => {

    //The below part of the code is for the display when we have a portrait screen, i.e phones and tablets

    const [currentMember, setCurrentMember] = useState();
    console.log(currentMember)

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
                <CircularCarousel flexDirection='column' getCurrentMember={setCurrentMember}/>
            </div>
        )

    }

    return(
        <div className='home-layer-2-container' style={{display:`grid`, gridTemplateColumns: `1fr 1fr`}}>
            <div className='meet-the-team-container' style={{height: `100vh`}}>
                <div className='home-layer-2-title'>MEET THE TEAM</div>
                <div className='meet-the-team-blurb'> 
                    <p>
                    The CSSA is student elected student organization dedicated to 
                    advocating for Computer Science Students at the University of Ottawa.
                    </p>
                    <p>
                        Check out some of our members below.
                    </p>
                    <button>Learn More</button>
                </div>
                <CircularCarousel flexDirection='row' getCurrentMember={setCurrentMember}/>
            </div>
            <div className='tv-screen-container'>
                <div className='tv-screen' style={{width: `45vw`, height: `50vh`}}>
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