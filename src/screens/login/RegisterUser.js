import React, { useState, useEffect } from 'react'
// DEPENT
import sha256 from "sha256"
// PARTS
import LoginPart from './LoginPart'
// API URL
const { REACT_APP_API_URL_REGISTER } = process.env
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

function PostWarningMessage( props ) {
    return(
    <><span style={{
        margin: "0",
        padding: "0",
        color: "rgb(255,50,120)",
        border: "1px solid transparent"
    }}>{ props.message }</span></>)
}

export default function RegisterUser() {
    
    var [passCheck, SetPassCheck] = useState("")
    var [messageName, SetMessageName] = useState("")
    var [messageEmail, SetMessageEmail] = useState("")
    var [messagePass1, SetMessagePass1] = useState("")
    var [messagePass2, SetMessagePass2] = useState("")
    var [postMessageWarning, SetPostMessageWarning] = useState("")
    
    var [apiData, SetApiData] = useState("")
    
    var [username, SetUsername] = useState("")
    var [email, SetEmail] = useState("")
    var [password, SetPassword] = useState("")
    
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

    console.log(apiData)

    function listenForChangeName(e) {
        SetUsername(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 50) {
            SetMessageName(<WarningMessageInputField message='
            Characters must be more than 1 or less than 50'/>)
        } else {
            return SetMessageName("")
        }
    }
    function listenForChangeEmail(e) {
        SetEmail(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 70) {
            SetMessageEmail(<WarningMessageInputField message='
            Characters must be more than 1 or less than 70'/>)
        } else {return SetMessageEmail("")}
    }
    function listenForChangePassword1(e) {
        SetPassword(sha256(e.target.value))
        SetPassCheck(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 50) {
            SetMessagePass1(<WarningMessageInputField message='
            Characters must be more than 8 or less than 50'/>)
        } else {return SetMessagePass1("")}
    }
    function listenForChangePassword2(e) {
        if (e.target.value !== passCheck) {
            SetMessagePass2(<WarningMessageInputField message='
            Please repeat your password!'/>)
        } else {return SetMessagePass2("")}
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = { username, email, password }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(REACT_APP_API_URL_REGISTER, requestOptions)
        .then(response => response.json())
        .then(res => console.log(res))
        .catch(error => {
            if (error) {
                SetPostMessageWarning(
                    <PostWarningMessage
                        message="
                        Username or email might be taken!
                        Please chose another username, and
                        check your email-adress again!"/>
                )
            }
        })
        console.log(requestOptions)
    }

    return (
        <>
            <div className="icon-car-small-mobile"/>
            <div id="register-background-image-full"/>
            <div id="register-user-wrap-container">
                <form onSubmit={handleSubmit} id="register-form">
                    <div className="form-section">
                        <label>
                            <input
                                onChange={listenForChangeName}
                                required
                                id="username"
                                placeholder="Username"
                                name="username"
                                type="text"/>
                            { messageName }
                        </label>
                    </div>
                    <div className="form-section">
                        <label>
                            <input
                                onChange={listenForChangeEmail}
                                required
                                id="email"
                                placeholder="Email"
                                name="email"
                                type="email"/>
                            { messageEmail }
                        </label>
                    </div>
                    <div className="form-section">
                        <label>
                            <input
                                onChange={listenForChangePassword1}
                                required
                                id="password"
                                placeholder="Password"
                                name="password"
                                type="password"/>
                            { messagePass1 }
                        </label>
                    </div>
                    <div className="form-section">
                        <label>
                            <input
                                onChange={listenForChangePassword2}
                                required
                                placeholder="Repeat Password!"
                                name="password"
                                type="password"/>
                            { messagePass2 }
                        </label>
                    </div>
                    <div className="form-section">
                        <button id="register-button" type="submit">
                            REGISTER
                        </button>
                        { postMessageWarning }
                    </div>
                </form>
                <LoginPart/>
            </div>
        </>
    )
}
