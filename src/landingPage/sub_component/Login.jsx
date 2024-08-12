import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';


export default function Login(props){

    const [showForm, setShowForm] = useState(true);

        const [showPassword, setShowPassword] = useState(true);
        const [showPassword1, setShowPassword1] = useState(true);

        const [invalidPass, setInvalidPass] = useState(true);

        const [formData, setFormData] = useState({
          username: '',
          password: '',
          confirm_password: '',
        });

        useEffect(() => {
            console.log('Component rendered or count changed');

            return () => {
                console.log('Clean-up');
            };
        }, [invalidPass]); 
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
              ...prevState,
              [name]: value,
            }));

        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          
          if(formData["confirm_password"] == formData["password"]){
            if(formData["confirm_password"].length < 8){
                setInvalidPass(false);
                console.log(invalidPass);
            }else{
                setInvalidPass(true);
            }
        }else{
            setInvalidPass(false);
        }

          console.log('Form data:', formData);
        };
      
    return (
        <>
            <div className="w-full h-[100vh] grid place-center bg-gray-200 p-5">
                <div className="w-full border-2 flex justify-center">
                        
                    <div className="w-[80%] h-full bg-white/25 shadow-md flex gap-4 p-5 border-2 border-white rounded-md">
                        <div className="bg-purple-400 p-5 w-full h-full rounded-md shadow-md">
                            <img src="images/bg3.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className=" p-5 w-full h-full">
                            <span className="flex justify-end font-popins">
                                Not a member? <button className="pl-2 text-blue-400" onClick={e => setShowForm(!showForm)}>Register</button>
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
                            <div className={showForm ? "mt-5 transition-all duration-700" : "mt-5 hidden"}>

                                <div className="grid place-center w-full mt-[90px] gap-5">
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Username" />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" placeholder="Password" />
                                    </div>
                                    <div className="w-full flex justify-center mt-3">
                                        <button className="py-3 px-5 w-[50%] rounded-md shadow-md bg-orange-400 text-white">Sign In</button>
                                    </div>
                                </div>

                            </div>

                            <div className={showForm ? "hidden" : "transition-all duration-700"}>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid place-center w-full  gap-5">
                                        <div className="w-full flex justify-center">
                                            <input type="text" className="py-3 shadow-md px-2 rounded-md w-[60%]" name="username" placeholder="Username" 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <input type={showPassword1 ? "password" : "text"} name="password" className="py-3 shadow-md px-2 rounded-l-md w-[50%]" placeholder="Password" onChange={handleChange} required/>
                                            <div className="h-full bg-white rounded-r-md p-2">
                                                <img src={"images/eye.png"} alt="" className={showPassword1 ? "w-[30px] h-[30px] " : "hidden"} onClick={e => setShowPassword1(!showPassword1)}/>

                                                <img src={"images/close_eye.png"} alt="" className={showPassword1 ? "hidden" : "w-[30px] h-[30px]"} onClick={e => setShowPassword1(!showPassword1)}/>

                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <input type={showPassword ? "password" : "text"} name="confirm_password" className={invalidPass ? "py-3 shadow-md rounded-l-md px-2 w-[50%] border-white" : "py-3 shadow-md rounded-l-md px-2 w-[50%] border-2 border-red-500"} placeholder="Confirmed Password" onChange={handleChange} required/>
                                            <div className="h-full bg-white rounded-r-md p-2">
                                                <img src={"images/eye.png"} alt="" className={showPassword ? "w-[30px] h-[30px] " : "hidden"} onClick={e => setShowPassword(!showPassword)}/>

                                                <img src={"images/close_eye.png"} alt="" className={showPassword ? "hidden" : "w-[30px] h-[30px]"} onClick={e => setShowPassword(!showPassword)}/>

                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center mt-3">
                                            <button className="py-3 px-5 w-[60%] rounded-md shadow-md bg-orange-400 text-white">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Form Login */}
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};