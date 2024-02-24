import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';

import Video from './component/Video';

export default function Gallery(props){

    const data = [
        {
            "no": 1,
            "nama": "Rizkan Ramdani"
        },
        {
            "no": 2,
            "nama": "Ramdani"
        },
        {
            "no": 3,
            "nama": "Rizkan"
        },
        {
            "no": 3,
            "nama": "Rizkan"
        },
        {
            "no": 3,
            "nama": "Rizkan"
        },
        {
            "no": 3,
            "nama": "Rizkan"
        },
    ]
    
    const data2 = [
        {
            "no": 1,
            "nama": "Rizkan Ramdani"
        },
        {
            "no": 2,
            "nama": "Ramdani"
        }
    ]

    let [active, setActive] = useState(false);
    const type = props.type;

    if(type == "allProduk"){
        setActive = true;
    }
    let [sendData, setSendData] = useState([]);

    useEffect(() => {
        if(type == "allProduk"){
            setSendData(data);
        }else if(type == "videoFacebook"){
            setSendData(data2);
        }
        console.log(sendData);
    }, [type]);
    
    const mappingData = sendData.map((dat => {
        return <Video key={dat.key} no={dat.no} nama={dat.nama} />
    }))


    return (
        <div className="my-5 pt-20 h-full w-full bg-[url('images/bgAbout.png')] bg-no-repeat bg-top-4 bg-fixed ">
            <div className="px-2">
                <h1 className="text-3xl font-semibold underline underline-offset-8 decoration-wavy decoration-[#1a4f5c] text-[#1a4f5c]">Gallery Ads Video</h1>
                
                <nav className="mt-5 grid grid-cols-3 md:grid-flow-col gap-2 w-full md:w-[40%] text-sm font-semibold">
                    <Link to="/Gallery" className={active ? "border p-1 bg-blue-500 text-center rounded shadow w-full active" : "border p-1 bg-blue-500 text-center rounded shadow w-full"}>All Video</Link>

                    <Link to="/videoFacebook" className={"border p-1 bg-blue-500 text-center rounded shadow w-full"}
                    >Video Facebook</Link>
                    <Link to="/instaStory" className="border p-1 bg-blue-500 text-center rounded shadow w-full"> InstaStory</Link>
                    <Link to="/videoYoutube" className="border p-1 bg-blue-500 text-center rounded shadow w-full">Video Youtube</Link>
                </nav>
                </div>
                <div className="flex flex-row flex-wrap justify-stretch mt-5 gap-4 px-10">
                    {mappingData}
                    {/* {sendData} */}
                </div>
            
        </div>
    )
};