import React, { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';


function Pass(props){
    const [passkey ,setPassKey]=useState("");
    const userName=`${props.input}`;
    const [navigate,setNavigate]=useState(false);
    const [formSubmit,setformSubmit]=useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const callApi=async()=>{
        if(userName==null || passkey==null ){
            return console.log("Username or password not provided");
        }
        setformSubmit(true);
        // const query='https://ubiquitous-guacamole-4prj6pw7rrr277v5-3000.app.github.dev/Login' test link
        const query=`https://nodejs-serverless-function-express-psi-hazel.vercel.app/Login/`; /*pd link*/
        try {
            const response = await axios.post(query, { userName, passkey }, {
                withCredentials: true // <--- THIS IS THE CRITICAL ADDITION
            });
            console.log("Login successful:", response.data);
            setIsAuthenticated(true);
            setNavigate(true);
            
            // You might want to handle successful login here, e.g., redirect
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            // Handle error, e.g., show an error message to the user
        }
    }
    if(navigate){
        console.log("Redirect:");
        console.log("Authenticated:", isAuthenticated);
        return <Navigate to="/dashboard" replace />;
    }
    return <div>
        {formSubmit || 
         <input className="input-class" onChange={(e)=>{setPassKey(e.target.value);}} placeholder="Enter your password"></input>}
         <button className="SubmitAPICall" onClick={callApi}>Submit</button>
         {}
    </div>
}

export default Pass;