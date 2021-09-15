import React, { useState, useEffect } from 'react'
// DEPENT
import sha256 from "sha256"
// PARTS
import RegisterPart from './RegisterPart'
// API URL
const { REACT_APP_API_URL_USERS } = process.env
const { REACT_APP_API_URL_ONLINE } = process.env

function WarningMessageInputField( props ) {
    return(
    <><span style={{
        margin: "0",
        padding: "0",
        color: "rgb(255,50,120)",
        border: "1px solid transparent"
    }}>{ props.message }</span></>)
}

export default function LoginUser() {


    var [apiData, SetApiData] = useState("")
    var [onlineData, SetOnlineData] = useState("")
    
    useEffect(() => {
        async function FetchMyData(url) {
            return await(await fetch(url)).json()
        }
        async function Myfetch() {
            var users = await FetchMyData(REACT_APP_API_URL_USERS)
            SetApiData(users)
        }
        Myfetch()
    }, [])
    
    useEffect(() => {
        async function FetchMyData(url) {
            return await(await fetch(url)).json()
        }
        async function Myfetch() {
            var status = await FetchMyData(REACT_APP_API_URL_ONLINE)
            SetOnlineData(status)
        }
        Myfetch()
    }, [])

    console.log(onlineData)
    
    function IsMyUsernameTrue(e) {
    }
    
    function IsMyPasswordTrue(e) {
    }
    
    // function HandleFormSubmit(e) {
    // }
    
    function HandleFormSubmit(e) {
    }

    return (
        <>
            <div className="icon-car-small-mobile"/>
            <div id="login-background-image-full"/>
            <div id="login-user-wrap-container">
                <form onSubmit={ HandleFormSubmit } id="login-form">
                    <div className="form-section">
                        <label>
                            <input
                                onChange={ IsMyUsernameTrue }
                                placeholder="Username"
                                required
                                name="username"
                                type="text"/>
                        </label>
                    </div>
                    <div className="form-section">
                        <label>
                            <input
                                onChange={ IsMyPasswordTrue }
                                placeholder="Password"
                                required
                                name="password"
                                type="password"/>
                        </label>
                    </div>
                    <div className="form-section">
                        <button type="submit" id="login-button">
                            LOGIN
                        </button>
                    </div>
                </form>
                <RegisterPart/>
            </div>
        </>
    )
}

