import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import { Popover } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/solid'

export default function Test() {

    let location = useLocation();

    function ShowCart() {
        if (location.pathname === '/categories' || location.pathname.includes('/items/')) {
            return (
                <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link to='/cart'>
                        <ShoppingCartIcon className="h-8 w-auto sm:h-10 text-gray-600" />
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