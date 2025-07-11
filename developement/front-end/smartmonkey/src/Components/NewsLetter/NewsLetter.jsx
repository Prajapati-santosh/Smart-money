import './NewsLetter.css';
import Logo from '../Logo/Logo.jsx';
import { useState } from "react";
import axios from "axios";

function NewsLetter(){
    const[email,setEmail]=useState("");
    function handleChange(e) {
        setEmail(e.target.value);
    }
    function resetState() {
    setEmail("");  
    document.querySelector(".newsInput").value="";
    console.log("reset state called, email set to:", email);
    }

    function handleClick(){
        console.log(email);
        const URL=process.env.REACT_APP_API_URL;
        const api_url=`${URL}`+'/newsLetter';
        console.log(api_url);
        axios.post(api_url,{Email:email}).then(
            (response)=>{
                console.log(response);
                console.log("Added to newsletter");
                resetState();
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }
    return <div className="newsletter">
            <Logo className="logo-newsletter"/>
            <h1>Sign up for email to get insights and more.</h1>
            <div className="newsletter-form">
                <input  className="newsInput" placeholder="Enter your email here." onChange={handleChange} value={email}></input>
                <button onClick={handleClick}>Sign-up</button>
            </div>
    </div>
}
export default NewsLetter;