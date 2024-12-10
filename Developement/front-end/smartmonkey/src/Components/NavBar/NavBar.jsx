import React from "react";
import FlashBar from "../FlashStaticBar/FlashBar";
import MyExpense from "../MyExpense/MyExpense";

function NavBar(){
    
    return <div className="Nav">
        <FlashBar/>
        <MyExpense/>
    </div>
}

export default NavBar;