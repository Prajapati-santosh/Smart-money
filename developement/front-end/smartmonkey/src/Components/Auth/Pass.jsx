import React, { useState } from "react";
import axios from 'axios';


function Pass(props){
    const [passkey ,setPassKey]=useState("");
    const userName=`${props.input}`;

    const callApi=async()=>{
        if(userName==null || passkey==null ){
            return console.log("Username or password not provided");
        }
        // const query='https://ubiquitous-guacamole-4prj6pw7rrr277v5-3000.app.github.dev/Login' test link
        const query=`https://nodejs-serverless-function-express-psi-hazel.vercel.app/Login/`; /*pd link*/
        try {
            const response = await axios.post(query, { userName, passkey }, {
                withCredentials: true // <--- THIS IS THE CRITICAL ADDITION
            });
            console.log("Login successful:", response.data);
            // You might want to handle successful login here, e.g., redirect
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            // Handle error, e.g., show an error message to the user
        }
    }
    return <div>
        <input className="input-class" onChange={(e)=>{setPassKey(e.target.value);}} placeholder="Enter your password"></input>
        <button className="SubmitAPICall" onClick={callApi}>Submit</button>
    </div>
}

export default Pass;