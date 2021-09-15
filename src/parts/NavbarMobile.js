import React, { useState, useEffect } from 'react'
// STYLES
import "../styles/NavbarMobile.css"
import { AiOutlineMenu } from "react-icons/ai"
import { BiArrowToLeft } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"

function MenuIsOpen() {
    return(
        <>
            <nav id="navbar-mobile-wrap-container" style={{zIndex: 1}}>
                <ul id="navbar-mobile-wrap-inner-container">
                    <li className="navbar-li-mobile-list">
                        <a className="navbar-a-href-links" href="/home">Home</a>
                    </li>
                    <li className="navbar-li-mobile-list">
                        <a className="navbar-a-href-links" href="/#">Shop</a>
                    </li>
                    <li className="navbar-li-mobile-list">
                        <a className="navbar-a-href-links" href="/#">Cart</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default function NavbarMobile({ children }) {

    LoginIconNotShowOnLogin()
    
    var [navState, SetNavState] = useState(false)

    function menuIsClosedClick() { SetNavState(true) }
    function menuIsOpenClick() { SetNavState(false) }
      
    function LoginIconNotShowOnLogin() {
        useEffect(() => {
            let URL_HREF = window.location.href
            let URL_SPLIT = URL_HREF.split("/")
            let URL_LAST_SUB = URL_SPLIT[URL_SPLIT.length - 1].toString()
            if (URL_LAST_SUB === "login") {
                let LoginIcon = document.querySelectorAll("#login-icon-container")
                LoginIcon[0].style.display = "none"
            } else {
                let LoginIcon = document.querySelectorAll("#login-icon-container")
                LoginIcon[0].style.display = "block"
            }
        }, [])
    }


    return (
        <>
            <header>
                {
                    navState ?
                    <BiArrowToLeft onClick={menuIsOpenClick} id="icon-close"/>
                    :
                    <AiOutlineMenu onClick={menuIsClosedClick} id="icon-open"/>
                }
                <div id="login-icon-container">
                    <FaUserCircle id="user-login-icon"/>
                    <a href="/login">
                        Sign in
                    </a>
                </div>
            </header>
            {
                navState ?
                MenuIsOpen()
                :
                ""
            }

            { children }
        </>
    )
}
