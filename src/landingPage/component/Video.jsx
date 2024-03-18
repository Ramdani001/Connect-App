import React, { useEffect, useState } from "react";
import DetailModal from "./DetailModal";

 function Video(props) {
    // const data = props.data;

    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        console.log(props);
    }, [])

    return(
        <>
            <div className="shadow w-72 h-72 bg-red-500 transition-all duration-700 ease-linear" onClick={() => setShowDetail(!showDetail)}>
            
            </div>
            {
                showDetail && <DetailModal />
            }
        </>
    )
} 

export default Video;