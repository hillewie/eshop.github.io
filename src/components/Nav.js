import React from 'react';
// STYLES
import '../styles/Nav.css';
// LOGO
import Logo from '../img/logo.svg'
// ICONS
import {RiShoppingCart2Fill} from 'react-icons/ri'

function Nav({ children }) {
    return (
        <>
            <div className="Navbar-desktop-wrap-container">
                <div className="container">
                    <img src={Logo} id="logo" alt="Bakluckan"/>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Sign in</a></li>
                    <li><a href="/#" ><RiShoppingCart2Fill id="icon-cart"/></a></li>
                </ul>
                </div>
            </div>

            { children }
        </>
    )
}
export default Nav;
