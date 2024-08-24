import React from 'react';
import logo from '../../images/home-layer-1-images/cssalogo.png';
import Pacman from './Pacman';
import './information-layer.css';

interface InformationLayerProps {
    windowSize: { width: number, height: number};
    flexDirection: string
}

const InformationLayer: React.FC<InformationLayerProps> = ({windowSize, flexDirection}) => {

    var logoWidth = 0;

    //The block below is to be able to dynamically resize the logo on the home page.
    //This way we can more easily prepare for other device sizes
    if(flexDirection === 'column'){
        logoWidth = windowSize.width-100;
    }
    else{
        logoWidth = windowSize.width/2 - 50;
    }
    
    return(
        <div className='information-layer1' style={{ height: flexDirection !== 'column' ? '92vh' : '', marginTop: flexDirection !== 'column' ? '0em' : '2em' , width: flexDirection !== 'column' ? '50%' : ''}}>
            <div className='information-layer1-container'>
                <div className='info-layer-logo-container'>
                    <img className='info-layer-logo' src={logo} alt="The CSSA Logo" style={{ width: `${logoWidth}px`, height: 'auto' }}/>
                </div>
                {flexDirection === 'column' ? 
                    (<div className='cssa-title' style={{justifyContent: 'center', textAlign: `center`}}>COMPUTER SCIENCE STUDENTS ASSOCIATION</div>)
                    :
                    (<div className='cssa-title'>COMPUTER SCIENCE STUDENTS ASSOCIATION</div>)
                }
                <div className='pacman-layer'>
                    <Pacman />
                </div>
                <a href='https://maps.app.goo.gl/qHmKpCVCdSNHVBso9' className='address-tag'>{flexDirection === 'column' ? 
                    (
                        <div className='info-layer-invite' style={{alignItems: 'center'}}>
                            <div>SWING BY OUR OFFICE</div>
                            <div>AT</div>
                            <div>SITE 4076</div>
                        </div>
                    ) :
                    (
                        <div className='info-layer-invite' id='info-layer-desktop'>
                            <div>SWING BY OUR OFFICE</div>
                            <div>AT</div>
                            <div>SITE 4076</div>
                        </div>
                    )
                }</a>
            </div>
        </div>
    )
};

export default InformationLayer;