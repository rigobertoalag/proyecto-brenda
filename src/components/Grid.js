import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircleIcon } from '@heroicons/react/outline'

export default function Grid({ dataItems, dataCategories, isItem }) {

    function addToCart(id,name,description,img,category_id,user_id,created_at,updated_at) {
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
        } else {
            const prevItem = JSON.parse(localStorage.getItem('Cart'))
            const newItem = ([{ 
                'itemID': id ,
                "name": name,
                "description": description,
                "img": img,
                "category_id": category_id,
                "user_id": user_id,
                "created_at": created_at,
                "updated_at": updated_at
            }])
            Array.prototype.push.apply(prevItem, newItem);
            localStorage.setItem('Cart', JSON.stringify(prevItem))
        }
    }

    const cartStorage = JSON.parse(localStorage.getItem('Cart'));

    if (dataCategories) {
        return (
            <div>
                {
                    dataCategories.map((d) => (
                        <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5" key={d.id}>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                            {/*<img src={d.image} alt={d.name} style={{ width: "100%" }} className="section-img" />*/}
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                {d.name}
                        </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                {d.description}
                        </p>
                        </div>
                        <Link to={{ pathname: '/items/' + d.id}}>
                            <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                                VER MAS  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                            </button>
                        </Link>
                    </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    dataItems.map((d) => (
                        <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5" key={d.id}>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                            {/*<img src={d.image} alt={d.name} style={{ width: "100%" }} className="section-img" />*/}
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
                        onClick={() => addToCart(d.id,d.name,d.description,d.img,d.category_id,d.user_id,d.created_at,d.updated_at)}
                        className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                            AÑADIR AL CARRITO  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                        </button>
                    </div>
                    ))
                }
            </div>
        )
    }
}