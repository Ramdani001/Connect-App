import React, { useEffect, useState } from "react";

 function Video(props) {
    // const data = props.data;

    useEffect(() => {
        console.log(props);
    }, [])

    return(
        <div className="shadow w-72 h-72 bg-red-500 transition-all duration-700 ease-linear">
            
        </div>
    )
} 

export default Video;