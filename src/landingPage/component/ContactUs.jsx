import React from "react";

function ContactUs(){
    return(
        <div className="p-5 md:p-10 bg-[url('images/circles-bg.png')] bg-[#1a4f5c] rounded-tr-md text-white mb-5 w-full h-full text-center grid grid-flow-row gap-5 place-content-center">
            <h1 className="text-2xl md:text-5xl text-bold">Ready to Improve your business?</h1>
            <h3 className="text-xl uppercase">Connect Always there for you</h3>
            <button className="p-2 rounded-2xl border-[3px] border-[#0300A6] text-white font-semibold text-xl w-40 justify-self-center" id="buttonContact">
                Contact Us
            </button>
        </div>
    )
}

export default ContactUs;