import React from "react";

export default function DetailModal(){
    return(
        <section className="fixed h-screen w-full bg-gray-500/70 top-0 left-0 right-0 bottom-0 overflow-hidden" style={{zIndex: 100}}>
            <main className="p-10 grid place-items-center h-full">
                <div className="borde w-2/3 h-full p-5 bg-white rounded-sm shadow">
                    <div className="closeSection text-2xl font-semibold flex justify-end mr-3">
                        <span>X</span>
                    </div>

                    <div className="grid grid-flow-col-dense gap-3 place-items-center h-full w-full">
                        <div className="content w-full h-2/4 rounded-sm">
                            <iframe src="https://www.youtube.com/embed/3OjboZ5esog?si=FVuu37_7Svd0PMYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="md:w-96 md:h-full"></iframe>
                        </div>
    
                        <div className="textContent col w-full h-2/3 col-span-1">
                            <div>
                                <label className="text-slate-400">Title</label>
                                <h2 className="font-bold text-xl">Branding Chicken</h2>
                            </div>
                            <div>
                                <label className="text-slate-400">Type</label>
                                <h2 className="text-md">Ads Video</h2>
                            </div>
                            <div className="">
                                <label className="text-slate-400">Summary</label>
                                <h2 className=""> dolor sit amet consectetur, adipisicing elit. Quaerat ea non similique dolorum dicta ipsum et temporibus quae ducimus illum, assumenda porro. Est facere, iusto tempore voluptatum nulla illum asperiores obcaecati, numquam laudantium dolor omnis dolorum? Quaerat molestiae adipisci Lorem ipsumeos!</h2>
                            </div>
                            <div className="mt-3 flex gap-3">
                                <button className="border border-blue-400 rounded shadow-md font-semibold p-1 w-full">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    Add To Cart
                                </button>
                                <button className="border border-blue-400 rounded shadow-md font-semibold p-1 w-full">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    Buy
                                </button>
                            </div>

                            <div className="sosmed flex justify-evenly mt-3">
                                <div>
                                    <i class="fa-brands fa-square-instagram"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-square-facebook"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}