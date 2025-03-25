import React, { useRef, useState, useEffect} from "react";
import './sponsors-carousel-buttons.css';

interface CarouselButtonProps{
    changesponsor: (direction: string) => void;
}

const CarouselButtons: React.FC<CarouselButtonProps> = ({changesponsor}) => {
    return(
        <div className="sponsors-buttoncontainer">
            <button className="sponsors-buttons" onClick={() => changesponsor("fwd")}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm2.7781746 9.60710678c-.3905243-.39052429-1.0236893-.39052429-1.4142136 0l-5.6568542 5.65685422c-.180242.180242-.2772954.4121708-.2911601.6480754v.1612085c.0138647.2359047.1109181.4678335.2911601.6480754l5.6568542 5.6568543c.3905243.3905243 1.0236893.3905243 1.4142136 0s.3905243-1.0236893 0-1.4142136l-4.9712279-4.9717474 4.9712279-4.9708933c.3905243-.3905242.3905243-1.02368923 0-1.41421352z" fill="#46638d" fill-rule="evenodd"></path></g></svg>
                next
            </button>
            <button className="sponsors-buttons" onClick={() => changesponsor("back")}>
                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm2.7781746 9.60710678c-.3905243-.39052429-1.0236893-.39052429-1.4142136 0l-5.6568542 5.65685422c-.180242.180242-.2772954.4121708-.2911601.6480754v.1612085c.0138647.2359047.1109181.4678335.2911601.6480754l5.6568542 5.6568543c.3905243.3905243 1.0236893.3905243 1.4142136 0s.3905243-1.0236893 0-1.4142136l-4.9712279-4.9717474 4.9712279-4.9708933c.3905243-.3905242.3905243-1.02368923 0-1.41421352z" fill="#46638d" fill-rule="evenodd"></path></g></svg>
                back
            </button>
        </div>
    );
};


export default CarouselButtons;