import React from "react";
import './Card.css';

function Card({ className, dimensions, heading, color ,borderRadius,content }) {
    const classname = className;
    const { height, width } = dimensions;
    const borderRad=(borderRadius==="true")?10:"none";
    return <div className={classname} style={{
        height: height,
        width: width,
        backgroundColor:color,
        borderRadius:borderRad
    }}>
        <div className="heading" >
            {heading}
        </div>
        <div style={{paddingTop:"5px", paddingLeft:"10px"}}>
            {content}
        </div>
    </div>
}

export default Card;