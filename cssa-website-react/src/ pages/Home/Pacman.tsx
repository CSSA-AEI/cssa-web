import React, {useState} from 'react';
import './pacman.css';

const Pacman: React.FC = () => {
    return(
        <div className='preloader'>
            <div className='preloader-pacman'>
            <div className='pacman'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='ghost'></div>
            </div>
        </div>
    )
};

export default Pacman;