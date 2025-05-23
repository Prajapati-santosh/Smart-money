import React from "react";
// Adding relative imports lets see how much more i need to add
// import NavBar from '/workspaces/Smart-money/developement/front-end/smartmonkey/src/Components/NavBar/NavBar';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer';
import ScrollableText from '../Animations/ScrollableText';
import Impressionpage from "../Animations/Impressionpage.jsx";

function HomePage(){
    return <div>
        <NavBar/>
        <Impressionpage/>
        <ScrollableText/>
        <Footer/>
    </div>
}

export default HomePage;