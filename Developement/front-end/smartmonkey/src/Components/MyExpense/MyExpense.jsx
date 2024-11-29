import React from "react";
import "./MyExpense.css";
import { useState } from "react";

function MyExpense(){
    const[list,setList]=useState([]);
    const[input,setInput]=useState("");
    function handleChange(e){
       if(e.target.value==null){
            return;
        }
       else{
        setInput(e.target.value);
        console.log(input);
       }
       
    }
    function addToList(){
        if (input.trim()) {
            setList([...list, input]);
            setInput(""); 
          } else {
            console.warn("Please enter an expense before adding.");
          }
        
    }
   
    return <div className="addExpesePage">
        <div className="function">
            <p className="Header-text">Add your Expenses</p>
            <input  placeholder="Enter your expense" onChange={handleChange}></input>
            <button className="button" onClick={addToList}>Add Expense</button>
        </div>
       
        {
       list.map((item,index)=>{
           return <li className="li-element" key={index}>
               {item}
            </li>
        })}
        </div>
}

export default MyExpense;