import React from "react";
// import FlashBar from "../FlashStaticBar/FlashBar";
// // import MyExpense from "../MyExpense/MyExpense";
import Logo from "../Logo/Logo";
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return <div className="Nav">
        <Logo/>
        <ul className="ulist">
            <li className="Links"><Link to="/Login">Login</Link></li>
            <li className="Links"><Link to="/Login">Login</Link></li>
            <li className="Links"><Link to="/Login">Login</Link></li>
            <li className="Links"><Link to="/Login">Login</Link></li>
        </ul>
    </div>
}

export default NavBar;