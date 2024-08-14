import React, { useEffect, useState } from "react";
import DetailModal from "./DetailModal";

 function Video(props) {
    // const data = props.data;

    const {key, no, nama, type, price, ket, url, thumbnail} = props;

    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        console.log(url);
    }, [])

    return(
        <>
            <div className={`shadow w-72 h-72 bg-url('${thumbnail}') transition-all duration-700 ease-linear`} onClick={() => setShowDetail(!showDetail)}>
            <h2 className="text-center text-3xl m-auto pt-10">{nama}</h2>
            <img src={thumbnail} alt="Thumbnail" />
            </div> 
            {
                showDetail && <DetailModal key={key} nama={nama} type={type} no={no} price={price} ket={ket} url={url} />
            }
        </>
    )
} 

export default Video;