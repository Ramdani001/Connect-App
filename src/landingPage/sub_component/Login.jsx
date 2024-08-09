import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';


export default function Login(props){

    return (
        <>
            <div className="w-full h-[100vh] grid place-center bg-gray-200 p-5">
                <div className="w-full border-2 flex justify-center">
                        
                    <div className="w-[80%] h-full bg-white/25 shadow-md flex gap-4 p-5 border-2 border-white rounded-md">
                        <div className="bg-purple-400 p-5 w-full h-full rounded-md shadow-md">
                            <img src="images/bg3.png" alt="" className="w-full h-full object-cover"/>
                            {/* Form Login */}
                            {/* <div className="text-center mt-[100px] mt-[20%]">
                                <h5 className="text-3xl font-bold font-olive">
                                    Hello, Join With Us!
                                </h5>
                                <h6 className="pt-4 font-normal mb-5 font-popins">
                                    Capture your moments with us
                                </h6>
                            </div>
                            <div className="mt-5">

                                <div className="grid place-center w-full mt-[90px] gap-5">
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Username" />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Password" />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Confirmed Password" />
                                    </div>
                                    <div className="w-full flex justify-center mt-3">
                                        <button className="py-3 px-5 w-[50%] rounded-md shadow-md bg-orange-400">Sign Up</button>
                                    </div>
                                </div>

                            </div> */}
                            {/* Form Login */}
                        </div>
                        <div className=" p-5 w-full h-full">
                            <span className="flex justify-end font-popins">
                                Not a member? <a href="#" className="pl-2 text-blue-400">Register</a>
                            </span>
                            <div className="text-center mt-[100px]">
                                <h5 className="text-3xl font-bold font-olive">
                                    Hello, Again!
                                </h5>
                                <h6 className="pt-4 font-normal mb-5 font-popins">
                                    Wellcome back you've been missed!
                                </h6>
                            </div>

                            {/* Form Login */}
                            <div className="mt-5">

                                <div className="grid place-center w-full mt-[90px] gap-5">
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Username" />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Password" />
                                    </div>
                                    <div className="w-full flex justify-center mt-3">
                                        <button className="py-3 px-5 w-[50%] rounded-md shadow-md bg-orange-400">Sign In</button>
                                    </div>
                                </div>

                            </div>
                            {/* Form Login */}
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};