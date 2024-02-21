import React from "react"
import Navbar from "./component/Navbar";
import HeroSection from "./section/HeroSection";
import Client from "./component/Client";
import Services from "./section/Services";

function Main() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <Client />
            <Services />
        </>
    )
}
 
export default Main;