import React from "react";

export default function Profile() {
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
                    </div>
                </div>
            </aside>
            <section className="border-blue-400 border h-full w-full p-2">
                <h3>Content</h3>
            </section>
        </main>
    )
}