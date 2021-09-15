import React, { useState, useEffect } from 'react'
// DEPENT
import sha256 from "sha256"
// PARTS
import RegisterPart from './RegisterPart'
// API URL
const { REACT_APP_API_URL_USERS } = process.env

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

    var [usernameMessage, SetUsernameMessage] = useState("")
    var [passwordMessage, SetPasswordMessage] = useState("")
    
    var [apiData, SetApiData] = useState("")

    var [usernameCheck, SetUsernameCheck] = useState("")
    var [passwordCheck, SetPasswordCheck] = useState("")
    
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
    
    var username = []
    var password = []
    
    for (let i of apiData) {
        username.push(i.username)
        password.push(i.password)
    }

    function IsMyUsernameTrue(e) {
    }
    
    function IsMyPasswordTrue(e) {
    }
    
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
                            { usernameMessage }
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
                            { passwordMessage }
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

