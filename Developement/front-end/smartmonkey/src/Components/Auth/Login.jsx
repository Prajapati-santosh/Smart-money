import React, { useEffect, useState } from "react";
import './Login.css';
import Logo from "../Logo/Logo.jsx";
import googleLogo from "../Assets/search.png";

function Login(){
    const[input,setInput]=useState(" ");
    const[isSubmit,setSubmit]=useState(false);
    useEffect(()=>{
        console.log(input);
    },[input])
    const handleSubmit=()=>{
        console.log(isSubmit);
        setSubmit(true);
    }
    return <div className="login-container">
        <div>
            <Logo className="logo"/>
        </div>
        <div className="input-div">
            <label>E-mail</label>
            <input type="email" className="input-class" placeholder="example@email.com" onChange={(e)=>{setInput(e.target.value)}}></input>
        </div>
        <div className="submit-div">
           {isSubmit===false ?  <button className="button-class" onClick={handleSubmit}>Submit</button>:<div>
           Hello you clicked </div>}
        </div>
        <div className="line">
            <hr />
        </div>
        <div className="authPlatforms">
            <a href="www.google.com">
                <img className="oAuthLogos"alt=" google logo" src={googleLogo} />
            </a>
            <a href="www.google.com">
                <img className="oAuthLogos"alt=" google logo" src={googleLogo} />
            </a>
            <a href="www.google.com">
                <img className="oAuthLogos"alt=" google logo" src={googleLogo} />
            </a>
        </div>
    </div>
}

export default Login;