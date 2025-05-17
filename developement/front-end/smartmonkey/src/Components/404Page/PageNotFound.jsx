import React from "react";
import Logo from "../Logo/Logo";
import './PageNotFound.css';
import Footer from "../Footer/Footer";
import animation from '../../Assets/404.gif';

function PageNotFound(){
    return <div className="joke">
            <div>
                <Logo className="logo-404"/>
            </div>
                <div>
                    <div className="mid">
                        <p className="text">Look's like this page <br/>has gone bankrupt<br/>
                        Try navigating back <br/>to safer territory.
                        <br/>
                        <br/>
                        <br/>
                        <br/></p>
                        <img className="image" alt="animation of ufo and 404" src={animation} height="60%" />
                    </div>
                </div>
            <div className="Footer-404">
                <Footer className="footer"/>
            </div>
       </div>
}

export default PageNotFound;