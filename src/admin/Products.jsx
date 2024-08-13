import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import axios from 'axios';

export default function Products(props){

    const [arrData, setArrData] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/api/v1/products');

    const getUsers = async () => {
        try {
            const response = await axios.get(url);
    
            setArrData(response.data);
            console.log('Data:', response.data);

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

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <>
            <div className="p-5 bg-white m-2 w-full shdaow-md rounded-md">
                <h1>Halaman Product</h1>
                <br />
                {/* Table */}
                <div className="py-3 flex justify-end">
                    <button className="rounded-md shadow-md text-white py-1 px-4 bg-blue-400">Add Product</button>
                </div>

                <br />
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-2">No</th>
                            <th className="border-2">Name Product</th>
                            <th className="border-2">Price</th>
                            <th className="border-2">Type</th>
                            <th className="border-2">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {arrData.forEach(element = > { */}
                        {arrData.map((item, index) => (
                        <tr key={index}>
                            <td className="border-2 p-3 text-center">
                            {index +1}
                            </td>
                            <td className="border-2 p-3">
                            {item.name_product}
                            </td>
                            <td className="border-2 p-3">
                                {item.type}
                            </td>
                            <td className="border-2 p-3">
                            {item.price}
                            </td>
                            <td className="border-2">
                            <div className="p-3 flex justify-center">
                                <button className="p-2" title="Edit" value={item.id_user}>
                                <img src="images/edit.png" alt="Edit" width={20} />
                                </button>
                                <button className="p-2" title="Delete" onClick={() => delFunct(item.id_user)}>
                                <img src="images/trash.png" alt="Delete" width={20} />
                                </button>
                                <button className="p-2" title="Detail" value={item.id_user}>
                                <img src="images/detail.png" alt="Detail" width={20} />
                                </button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}