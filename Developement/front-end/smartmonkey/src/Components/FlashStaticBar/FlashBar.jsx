import { useEffect, useState } from 'react';
import './FlashBar.css';

function FlashBar(){
    const[pos,setPos]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPos((prevPos) => {
                const newPos = prevPos + 2;
                return newPos > window.innerWidth ? -200 : newPos;
              });
        }, 10);
    
        return () => clearInterval(interval); // Clear interval on component unmount
      }, [pos]);
    return (
    <div className="flash-bar">
        <p className='text-class' >SALE LIVE FOR PREMIUM</p>
    </div>
  );
  
}

export default FlashBar;