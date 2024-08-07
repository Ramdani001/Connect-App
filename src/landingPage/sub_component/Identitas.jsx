import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';


export default function Identitas(props){

    return (
    <div className="h-100 transition-all duration-500">
        <div className="bg-white shadow-md w-full h-full p-5">
            

            {/* Header */}
            <div className="flex gap-4">
                <div className="w-[60%] h-[70vh] bg-blue-400 rounded-2xl shadow-md">
                </div>

                {/* Content */}
                <div className="p-3 border-2 w-full rounded-2xl">
                    <form id="frm_identitas" className="flex gap-5 flex-wrap">
                        <div>
                            <h6 className="text-sm">Nama Depan</h6>
                            <input type="text" placeholder="Nama Depan" name="name_d_iden" className="border-b-2 font-bold"/>
                        </div>
                        <div>
                            <h6 className="text-sm">Nama Belakang</h6>
                            <input type="text" placeholder="Nama Belakang" name="name_b_iden" className="border-b-2 font-bold"/>
                        </div>
                        {/* Alamat */}
                        <div className="col-2 w-full">
                            <h6 className="text-sm">Alamat</h6>
                            <input type="text" placeholder="Alamat Lengkap" name="alamat_iden" className="border-b-2 w-full font-bold"/>
                        </div>
                    </form>
                </div>
                {/* Content */}

            </div>
            {/* Header */}

        </div>
    </div>
    )
};