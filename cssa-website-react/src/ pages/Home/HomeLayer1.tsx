import React, {useState} from 'react';
import InformationLayer from './Information-Layer';
import Connor from '../../images/Connor.png';
import Tim from '../../images/Tim.png';
import CouchCarry from '../../images/CouchCarry.png';
import './home-layer-1.css';

export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}


const HomeLayer1: React.FC = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    var flexDirection = 'row';

    if(windowDimensions.width / windowDimensions.height <= 1){
        flexDirection = 'column'
        return(
            <div className='home-layer-1-container' style={{flexDirection: 'column'}}>
                <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
                <div className='layer-1-circle-container' style={{marginTop: '4em'}}>
                    <div className='circle'>
                        <div className='image1-container'>
                            <img style={{height: 'inherit', zIndex: '2', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -15%)'}} src={Connor}/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '1', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-55%, -12%)'}} src={Tim}/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '3', position: 'absolute', bottom: '0', transform: 'translateY(-27%)'}} src={CouchCarry}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='home-layer-1-container' style={{flexDirection: 'row'}}>
            <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
            <div style={{height: `200px`, width:`200px`, backgroundColor: 'red'}}></div>
        </div>
    )
};

export default HomeLayer1;