import React from 'react';
import banner from '../../../images/header/main.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div className='banner'>
            <h2>Capture your wedding with Genius Photographer</h2>
            <img className='mw-100 mh-100' src={banner} alt="" />
        </div>
    );
};

export default Banner;