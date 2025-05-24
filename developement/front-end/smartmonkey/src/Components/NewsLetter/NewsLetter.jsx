import React from "react";
import './NewsLetter.css';
import Logo from '../Logo/Logo.jsx';
import { useState } from "react";

function NewsLetter(){
    const[email,setEmail]=useState("");
    function handleChange(e) {
        setEmail(e.target.value);
    }
    function handleClick(){
        console.log(email);
    }
    return <div className="newsletter">
            <Logo className="logo-newsletter"/>
            <h1>Sign up for email to get insights and more.</h1>
            <div className="newsletter-form">
                <input placeholder="Enter your email here." onChange={handleChange}></input>
                <button onClick={handleClick}>Sign-up</button>
            </div>
    </div>
}
export default NewsLetter;