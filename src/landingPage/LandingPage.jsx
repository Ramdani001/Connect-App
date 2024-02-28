import React, { useEffect } from "react";
import HeroSection from "./section/HeroSection";
import Client from "./component/Client";
import Services from "./section/Services";
import ContactUs from "./component/ContactUs";
import About from "./section/About";


export default function Main() {

    return (
        <>
            <HeroSection />
            <Client />
            <Services />
            <ContactUs />
            <About />
        </>
    )
}