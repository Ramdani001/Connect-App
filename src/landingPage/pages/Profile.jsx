import React, {useState} from "react";
import Identitas from '../sub_component/Identitas';
import History from '../sub_component/History'; 

export default function Profile() {

    const [showContent, setShowContent] = useState("Identitas");

    return(
        <main className="flex justify-between my-5 pt-20 h-screen w-full p-10 bg-slate-200">
            <aside className="border-red-400 border h-full w-1/3 p-10">
                <div>
                    <div className="header">
                        <div className="flex items-center">
                            <div className="bg-yellow-300 rounded-full w-16 h-16 border">

                            </div>
                            <div className="ml-3 ">
                                <h2 className="font-semibold">
                                    Rizkan Ramdani
                                </h2> 
                                <label className="text-slate-400 cursor-pointer"> Ubah profile <i class="fa-solid fa-pencil"></i></label>    
                            </div>
 

                        </div>  
                            <button className={showContent == "Identitas" ? "py-1 w-full px-4 transition-all duration-500 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("Identitas")}>Identity</button>
                            <br />
                            <button className={ showContent == "History" ? "py-1 w-full transition-all duration-500 px-4 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("History")}>Transaction History</button>
                            <br />
                            <button className={ showContent == "History" ? "py-1 w-full transition-all duration-500 px-4 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("History")}>History</button>
                    </div>
                </div>
            </aside>
            <section className="border-blue-400 border h-full w-full p-2">
                { showContent === "Identitas" ? <Identitas /> : <History /> }
                
            </section>
        </main>
    )
}