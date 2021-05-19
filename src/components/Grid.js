import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlusCircleIcon } from '@heroicons/react/outline'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Grid({ dataItems, dataCategories, isItem, dataCart }) {

    const checkCart = (id, name, description, img, category_id, user_id, created_at, updated_at) =>{
        const cartStorage = JSON.parse(localStorage.getItem('Cart'));
        if(!cartStorage){
            AddToCart(id, name, description, img, category_id, user_id, created_at, updated_at)
        }else{
            const res = cartStorage.find(cart => cart.itemID === id );
            if(res){
                isInCartAlert()
            }else{
                AddToCart(id, name, description, img, category_id, user_id, created_at, updated_at)
            }
        }
    }

    const isInCartAlert = () => toast.error('El producto ya esta en el carrito', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    function AddToCart(id, name, description, img, category_id, user_id, created_at, updated_at) {
        const cartStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!cartStorage) {
            const item = ([{
                'itemID': id,
                "name": name,
                "description": description,
                "img": img,
                "category_id": category_id,
                "user_id": user_id,
                "created_at": created_at,
                "updated_at": updated_at
            }])
            localStorage.setItem('Cart', JSON.stringify(item))
            notify()
        } else {
            const prevItem = JSON.parse(localStorage.getItem('Cart'))
            const newItem = ([{
                'itemID': id,
                "name": name,
                "description": description,
                "img": img,
                "category_id": category_id,
                "user_id": user_id,
                "created_at": created_at,
                "updated_at": updated_at,
                "in_cart": true
            }])
            Array.prototype.push.apply(prevItem, newItem);
            localStorage.setItem('Cart', JSON.stringify(prevItem))
            notify()
        }
    }

    const notify = () => toast.success('Se añadio al carrito', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    if (dataCategories) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 ml-2 mr-2 mb-2">
                {
                    dataCategories.map((d) => (
                        <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5" key={d.id}>
                            <div>
                                <img src={'http://localhost:8000/storage/image/' + d.image} alt={d.name} style={{ width: "100%", height: '7rem' }} className="section-img" />
                            </div>
                            <div className="p-3 space-y-3">
                                <h3 className="text-gray-700 font-semibold text-md">
                                    {d.name}
                                </h3>
                                <p className="text-sm text-gray-900 leading-sm">
                                    {d.description}
                                </p>
                            </div>
                            <Link to={{ pathname: '/items/' + d.id }}>
                                <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                                    VER MAS  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
    if (dataCart) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 ml-2 mr-2 mb-2">
                {
                    dataCart.map((d) => (
                        <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5" key={d.itemID}>
                            <div>
                                <img src={'http://localhost:8000/storage/image/' + d.img} alt={d.name} style={{ width: "100%", height: '7rem' }} className="section-img" />
                            </div>
                            <div className="p-3 space-y-3">
                                <h3 className="text-gray-700 font-semibold text-md">
                                    {d.name}
                                </h3>
                                <p className="text-sm text-gray-900 leading-sm">
                                    {d.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 ml-2 mr-2 mb-2">
                {
                    dataItems.map((d) => (
                        <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5" key={d.id}>
                            <div>
                                <img src={'http://localhost:8000/storage/image/' + d.img} alt={d.name} style={{ width: "100%", height: '7rem' }} className="section-img" />
                            </div>
                            <div className="p-3 space-y-3">
                                <h3 className="text-gray-700 font-semibold text-md">
                                    {d.name}
                                </h3>
                                <p className="text-sm text-gray-900 leading-sm">
                                    {d.description}
                                </p>
                            </div>
                            <button
                                onClick={()=>{checkCart(d.id, d.name, d.description, d.img, d.category_id, d.user_id, d.created_at, d.updated_at)}}
                                className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1 sm:text-xs md:text-xs lg:text-xs">
                                AÑADIR AL CARRITO <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                            </button>
                        </div>
                    ))
                }
                <div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        )
    }
}