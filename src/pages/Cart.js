import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '../components/Grid'
import WP from '../statics/whatsapp-xxl.png';

export default function Cart() {
    const [cartItems, setCartItems] = (useState(JSON.parse(localStorage.getItem('Cart'))))
    console.log('cartItems desde el carrito', cartItems)
    function cachingDelete() {
        localStorage.removeItem('Cart')
        setCartItems('')
        alert('Se borro')
    }
    if (cartItems) {
        return (
            <>
                <div className="w-screen h-screen justify-center bg-gray-100">
                    <div className="flex items-stretch justify-center pt-4">
                        <button
                            onClick={() => alert('Se envio por whats :)')}
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded flex items-stretch mr-3"
                        >
                            Compartir <img src={WP} alt="fireSpot" className="max-h-5 ml-2" />
                        </button>
                        <button
                            onClick={cachingDelete}
                            className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded flex items-stretch"
                        >
                            Limpiar carrito
                        </button>
                    </div>
                    <Grid dataCart={cartItems} />
                </div>
            </>
        )
    } else {
        return (
            <div className="w-screen h-screen pt-4 bg-gray-100">
                <div className="pt-2 text-center">
                    <p className="mb-4 text-base sm:text-2x1 md:text-2x1 font-bold">Nada en el carrito :(</p>
                    <button className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"><Link to='/categories'>Ir a las categorias</Link></button>
                </div>
            </div>
        )
    }
}