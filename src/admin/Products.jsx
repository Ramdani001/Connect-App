import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import axios from 'axios';
import { format } from 'date-fns';

export default function Products(props){

    const [showModal, setShowModal] = useState(false);

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
    const [images, setImages] = useState("");
    const currentDate = new Date();
    const submit_product = (e) => {
        e.preventDefault();
        
        const formFile = new FormData();
        formFile.append('file', images);
        axios.post('http://localhost:3000/upload', images)
        .then(res => {})
        .catch(er => console.log(er));
        
        addProduct(formData);

    };

    const [formData, setFormData] = useState({
        created_at: format(currentDate, 'yyyy-MM-dd'),
        updated_at: format(currentDate, 'yyyy-MM-dd'),
      });

     

      const changeInput = (e) => {
        const { name, value } = e.target;

        if(name == "thumbnail"){
            const file = e.target.files[0];
            console.log(file);
            setImages(e.target.files[0]);
        }

        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));

    };

      const addProduct = async (userData) => {
        // try {

        //     const response = await axios.post('http://localhost:3000/api/v1/users/regist', userData);
            
        //     if(response.status == 200){
        //         setShowAlert(true);
        //         // if(response_per == 200){
        //             sessionStorage.setItem("id_user", userData.id_user);
        //             const timer = setTimeout(() => {
        //                 window.location.href = '/login';
        //             }, 3000);
        //         // }

        //     }
        //     console.log('User added:', response.status);
        // } catch (error) {
        //     if(error.response){
        //         if(error.response.status == 300){
        //             setshowAlertWar(true);
        //         }
        //     }
        //     if (error.response) {
        //         console.error('Response errora:', error.response.status);
        //         console.error('Response data:', error.response.data);
            
        //     } else {
        //         console.error('Error:', error.message);
        //     }
        // }
    };

    useEffect(() => {
        getUsers();
    }, []);

    // URL.createObjectURL();

    return(
        <>
            <div className="p-5 bg-white m-2 w-full shdaow-md rounded-md">
                <h1>Halaman Product</h1>
                <br />
                {/* Table */}
                <div className="py-3 flex justify-end">
                    <button className="rounded-md shadow-md text-white py-1 px-4 bg-blue-400" onClick={e => setShowModal(!showModal)}>Add Product</button>
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

                {/* Modal add product */}
                <div className={`absolute w-full h-full left-0 bg-gray-700/50 top-0 flex justify-center items-center ${showModal == true ? "" : "hidden"} `}>

                    <div className="overflow-y-auto h-[calc(100%-3rem)] scrollbar-blue-400">
                        <div className="bg-white shadow-md rounded-md p-5">
                            <div className="flex justify-between">
                                <h2 className="font-olive p-3">Tambah Product</h2>
                                <button onClick={e => setShowModal(!showModal)} className="font-olive p-3">X</button>
                            </div>
                            <hr />

                            <form onSubmit={submit_product}>
                                <div className="p-5 overflow-y-auto font-popins h-[calc(100%-3rem)]">

                                    {/* Title */}
                                    <div className="rounded-md p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm font-popins">Judul (Wajib isi)</label> <br />
                                        <textarea className="w-full p-3 text-sm" name="title" id="title" placeholder="Tambahkan judul yang menjelaskan video anda" onChange={changeInput}></textarea>
                                    </div>
                                    {/* Title */}

                                    {/* Deskription */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Description</label> <br />
                                        <textarea rows={5} className="w-full p-3 text-sm" name="description" id="description" placeholder="Beritahu penonton tentang video anda" onChange={changeInput}></textarea>
                                    </div>
                                    {/* Deskription */}

                                    {/* Thumbnail */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Thumbnail</label> <br />
                                        <label className="text-xs">Gunakan thumbnail yang menarik dan memikat perhatian penonton</label> <br />
                                        {images ? <img src={URL.createObjectURL(images)} alt="" className="w-[200px]" /> : ""}
                                        <br />
                                        <input type="file" name="thumbnail" className="border-2 bg-transparent p-4" onChange={changeInput}/>
                                    </div>
                                    {/* Thumbnail */}

                                    {/* Link Url */}
                                    <div className="rounded-md p-4 mt-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Link URL</label> <br />
                                        <textarea onChange={changeInput} className="w-full p-3 text-sm" name="url" id="url" placeholder="Harga untuk editing"></textarea>
                                    </div>
                                    {/* Link Url */}

                                    {/* Type Video */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Type Video</label> <br />
                                        <select onChange={changeInput} name="type" id="type" className="p-3 w-full border-2 mt-2 rounded-md">
                                            <option className="p-2" select>- Type Video -</option>
                                            <option className="p-2" value="Instagram">Instagram</option>
                                            <option className="p-2" value="Facebook"> Facebook</option>
                                            <option className="p-2" value="Youtube"> Youtube</option>
                                        </select>
                                    </div>
                                    {/* Type Video */}

                                    {/* Price */}
                                    <div className="rounded-md p-4 mt-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Price</label> <br />
                                        <textarea onChange={changeInput} className="w-full p-3 text-sm" name="price" id="price" placeholder="Harga untuk editing"></textarea>
                                    </div>
                                    {/* Price */}

                                    <div className="mt-10 justify-between flex gap-4">
                                        <button type="button" onClick={e => setShowModal(!showModal)} className="bg-gray-500 py-1 px-7 text-white rounded-md shadow-md">Cancel</button>
                                        <button type="submit" className="bg-blue-500 py-1 px-7 text-white rounded-md shadow-md">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}