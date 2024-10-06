import React from 'react';
import logo from '../../images/home-layer-1-images/cssalogo.webp';
import Pacman from './Pacman';
import './information-layer.css';
import { useTranslation } from 'react-i18next';

interface InformationLayerProps {

}

const InformationLayer: React.FC<InformationLayerProps> = () => {

    const { t } = useTranslation();
    
    return(
        <div className='information-layer1'>
            <div className='information-layer1-container'>
                <div className='info-layer-logo-container'>
                    <img className='info-layer-logo' src={logo} alt="The CSSA Logo"/>
                </div>
                <div className='cssa-title'>{t('Computer Science Students Association')}</div>
                <div className='pacman-layer'>
                    <Pacman />
                </div>
                <a href='https://maps.app.goo.gl/qHmKpCVCdSNHVBso9' className='address-tag'>
                        <div className='info-layer-invite'>
                            <div>{t('SWING BY OUR OFFICE')}</div>
                            <div>{t('AT')}</div>
                            <div>{t('SITE 4076')}</div>
                        </div>
                </a>
            </div>
        </div>
    )
};

export default InformationLayer;