import React from "react";
// import FlashBar from "../FlashStaticBar/FlashBar";
import Logo from "../Logo/Logo";
import './NavBar.css';
import { Link } from 'react-router-dom';
// removed relative imports yaar i have to do blank commits that why im  doing this LOL
// Do not use relative imports they don't work on vercel idk why?? if you know send email sp359422@gmail.com
// import loginIcon from '/workspaces/Smart-money/developement/front-end/smartmonkey/src/Assets/Login.png';
import loginIcon from '../../Assets/Login.png';


function NavBar(){
    return <div className="Nav">
        <Logo/>
        <ul className="ulist">
            <li className="Links"><Link className="Link" to="/Products">Products</Link></li>
            <li className="Links"><Link className="Link"to="/MyExpense">About</Link></li>
            <li className="Links"><Link className="Link"to="/Login">
                <img  height="30px" alt="Login" src={loginIcon}></img>
            </Link></li>
            <div>&nbsp;&nbsp;|</div>
            <li className="Links"><Link className="Link" to="/Login">Start saving</Link></li>
            
        </ul>
    </div>
}

export default NavBar;