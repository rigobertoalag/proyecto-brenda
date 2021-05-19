import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { Popover } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/solid'

export default function Header() {

    function ItemLabel() {
        const [itemCount, setItemCount] = useState()

        const cartStorage = JSON.parse(localStorage.getItem('Cart')); //Traemos la data del localstorage
        useEffect(() => {
            if (!cartStorage) {
                setItemCount(0)
                console.log('nada en el carrito')
            } else {
                const numItems = cartStorage.length
                console.log('carrito lleno con:', numItems)
                setItemCount(numItems)
            }
        })

        if(itemCount === 0){
            return null
        }
        return (
            <span className="text-xs font-xs bg-red-500 py-1 px-2 rounded-full shadow-2xl text-red-100 float-right absolute top-10 right-2">{itemCount}</span>
        )
    }

    let location = useLocation();
    function ShowCart() {
        if (location.pathname === '/categories' || location.pathname.includes('/items/')) {
            return (
                <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link to='/cart'>
                        <ShoppingCartIcon className="h-8 w-auto sm:h-10 text-gray-600" />
                        <ItemLabel />
                    </Link>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <Popover className="relative bg-white">
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            {
                                location.pathname === '/categories' || location.pathname.includes('/items/') || location.pathname === '/cart' ?
                                    <Link to='/categories'>
                                        <span className="sr-only">Inicio</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </Link>
                                    :
                                    <Link to='/'>
                                        <span className="sr-only">Inicio</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </Link>
                            }
                        </div>
                        <ShowCart />
                    </div>
                </div>
            </>
        </Popover>
    )
}