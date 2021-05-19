import React from 'react'

import { PlusCircleIcon } from '@heroicons/react/outline'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Test() {
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <>
            <div className="w-screen h-screen flex justify-center px-2 bg-gray-100">
                <div>
                    <button onClick={notify}>Notify!</button>
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
                <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-5 mr-2 ml-2">
                    <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                Titulo
                        </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Description
                        </p>
                        </div>
                        <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                            AÑADIR AL CARRITO  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                        </button>
                    </div>
                    <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                Titulo
                        </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Description
                        </p>
                        </div>
                        <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                            AÑADIR AL CARRITO  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                        </button>
                    </div>
                    <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                Titulo
                        </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Description
                        </p>
                        </div>
                        <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                            AÑADIR AL CARRITO  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                        </button>
                    </div>
                    <div className="max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mt-5">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                Titulo
                        </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Description
                        </p>
                        </div>
                        <button className="bg-gray-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-gray-400 mb-1">
                            AÑADIR AL CARRITO  <PlusCircleIcon className="h-6 w-auto sm:h-6 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}