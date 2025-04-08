import React from "react";
import NavBar from '/workspaces/Smart-money/developement/front-end/smartmonkey/src/Components/NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollableText from '../Animations/ScrollableText';
import BlankDivs from "../Animations/BlankDivs";
function HomePage(){
    return <div>
        <NavBar/>
        <BlankDivs/>
        <ScrollableText/>
        <Footer/>
        
    </div>
}

export default HomePage;