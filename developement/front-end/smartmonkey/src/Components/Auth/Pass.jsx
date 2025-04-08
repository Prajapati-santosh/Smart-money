import React, { useState } from "react";
import axios from 'axios';


function Pass(props){
    const [passkey ,setPassKey]=useState("");
    const userName=`${props.input}`;

    const callApi=async()=>{
        // const query='https://ubiquitous-guacamole-4prj6pw7rrr277v5-3000.app.github.dev/Login' test link
        const query=`https://nodejs-serverless-function-express-miracq4kk.vercel.app/Login/`; /*pd link*/
        const data=axios.post(query,{userName,passkey})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Network error:', error);
        });
        console.log(data);
    }
    return <div>
        <input className="input-class" onChange={(e)=>{setPassKey(e.target.value);}} placeholder="Enter your password"></input>
        <button className="SubmitAPICall" onClick={callApi}>Submit</button>
    </div>
}

export default Pass;