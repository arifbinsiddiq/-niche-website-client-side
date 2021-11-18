import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="banner-img">
            <div className="banner-info">
                <p>TAKING RIDES TO A NEW LEVEL</p>
                <h1>CHOICE YOUR MOTOBIKE</h1>
                <Link to="/services">
                    <button>View the Bike</button>
                </Link>
                
            </div>
        </div>
    );
};

export default HomeBanner;