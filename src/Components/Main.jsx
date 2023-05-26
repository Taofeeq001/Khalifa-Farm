import React from "react"
import Body from "../Components/Body.jsx";
import About from "./About";
import Testimony from "./Testimony";
import Header from "./Header.jsx";

const Main=()=>{
    return(
        <div>
            <Header/>
            <Body />
            <About />
            <Testimony />
        
            
        </div>
    )
}
export default Main;