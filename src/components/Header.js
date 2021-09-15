import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="desktop-wrap-main-outer-container" >
            <div className="container-hero">
                <button className="header-selection-button">1kr-200kr</button>
                <button className="header-selection-button">200kr-500kr</button>
                <button className="header-selection-button">500kr-över</button>
            </div>
        </div>
    )
}

export default Header;
