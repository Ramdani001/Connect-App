import React, { useEffect, useState } from "react";
import axios from 'axios';
import Submessages from "./Submessages";
import AdminMessages from "./AdminMessages";

export default function Messages(props){
    const [arrData, setArrData] = useState([]);
    const [statCheck, setStatCheck] = useState(0);


    const getMessages = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/messages");
    
            setArrData(response.data);

        } catch (error) {
            
            if (error.response) {
                
                console.error('Response error:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                
                console.error('Request error:', error.request);
            } else {
                
                console.error('Error:', error.message);
            }
        }
    }; 

    const handleMess = async(e) => {
        const itemId = e.currentTarget.getAttribute('data-id');
        console.log(itemId);

        try {
            const response = await axios.get(`http://localhost:3000/api/v1/messages/stat/${itemId}`);
    
            if(response){
                setStatCheck(!statCheck);
            }

        } catch (error) {
            
            if (error.response) {
                
                console.error('Response error:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                
                console.error('Request error:', error.request);
            } else {
                
                console.error('Error:', error.message);
            }
        }
    }
    
    useEffect(() => {
        getMessages();
        console.log("Clicked");
    }, [statCheck]);
    return(
        <>
            <div className="w-full h-full bg-white flex gap-3">
                
                <div className="w-[25%] p-3 h-full bg-light border grid gap-3">
                    {arrData.map((item, index) => ( 
                        <div className="border p-2 relative flex" data-id={item.id_m} 
                        onClick={handleMess}>
                            <span name={item.id_m} className={item.stat == 1 ? "bg-blue-400/50 w-[20px] h-[20px] rounded-full absolute -mt-3 ml-44" : "hidden"}></span>
                            <h6>{item.nama}</h6>
                            <hr />
                        </div>
                    ))}
                </div>

                <div className="w-full h-[330px] bg-gray-400/20 p-3 flex flex-col">
                    <div className="flex-1 overflow-auto">
                        <Submessages />
                        <AdminMessages />
                        <Submessages />
                        <AdminMessages />
                    </div>

                    <div className="bg-white w-full h-[50px]">
                        
                    </div>
                </div>

                
            </div>
        </>
    )
}