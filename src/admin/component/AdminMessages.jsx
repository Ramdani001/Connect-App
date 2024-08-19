import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function AdminMessages(props){

    return(
        <>
            <div className="w-full bg-green-400 mt-4 text-end text-black p-2">
                <h6 className="font-olive">Administrator</h6>
                <p>
                    Stock Ready?
                </p>
            </div>
        </>
    )
}