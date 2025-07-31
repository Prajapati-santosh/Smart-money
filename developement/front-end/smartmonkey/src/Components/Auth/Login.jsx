import React, { useEffect, useState } from "react";
import './Login.css';
import Logo from "../Logo/Logo.jsx";
import googleLogo from "../Assets/search.png";
// import OTP from './OTP.jsx';
import Pass from "./Pass.jsx";
import axios from "axios";

function Login(){
    const[input,setInput]=useState(" ");
    const[isSubmit,setSubmit]=useState(false);
    // const[check,setCheck]=useState(false);
    useEffect(()=>{
        console.log(input);
    },[input])
    const handleSubmit=()=>{
        console.log(isSubmit);
        setSubmit(true);
    }
    const handleClickGet=()=>{
        // const url='https://ubiquitous-guacamole-4prj6pw7rrr277v5-3000.app.github.dev/getInfo'; test link
        const url='https://nodejs-serverless-function-express-psi-hazel.vercel.app/getInfo'; /*prod link*/
        axios.get(url,{
            withCredentials:true
        }).then(
            response=>{
                console.log(response.data);
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }
    return <div className="login-container">
        <div className="logo-container">
            <Logo className="logo"/>
        </div>
       {isSubmit===false?<div className="input-div">
            <label>E-mail</label>
            <input type="email" className="input-class" placeholder="example@email.com" onChange={(e)=>{setInput(e.target.value)}}></input>
        </div>:<div className="disabledInputDiv"></div>} 
        <div className="submit-div">
            {isSubmit===false?<button className="button-class" onClick={handleSubmit}>Verify</button>:<Pass input={input}/>}
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
        <button onClick={handleClickGet}>GetInfo</button>
    </div>
}

export default Login;