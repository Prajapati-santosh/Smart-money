import React from "react";
import { Link } from 'react-router-dom';

function OTP(props){
    return <div>
        <p>A verification code has been sent on your {props.email}</p>
        <div>
            <input></input>
            <button>Verify</button>
        </div>
        <div className="re-submit">
            Not your email? / Didn't recieved the code?
            <Link className="Link" to="/Login">Try again</Link>
        </div>
    </div>
}


export default OTP;