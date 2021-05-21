import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Grid from '../components/Grid'
import WP from '../statics/whatsapp-xxl.png';

import Swal from 'sweetalert2'

export default function Cart() {
    const [cartItems, setCartItems] = (useState(JSON.parse(localStorage.getItem('Cart'))))
    function cachingDelete() {
        localStorage.removeItem('Cart')
        setCartItems('')
    }

    const [link, setLink] = useState()
    useEffect(()=>{
        const data = cartItems.map(d => [' Name: ' + d.name  + ' Price: ' + d.itemID])
        const values = data.toString()
        const link = 'https://api.whatsapp.com/send?text=' + values

        setLink(link)
    }, [])

    if (cartItems) {
        return (
            <>
                <div className="w-screen h-screen justify-center bg-gray-100">
                    <div className="flex items-stretch justify-center pt-4">
                        <button 
                            onClick={
                                () => Swal.fire({
                                    title: 'Te mandaremos a WhatsApp, ¿Estas listo?',
                                    showDenyButton: true,
                                    showCancelButton: false,
                                    confirmButtonText: 'REGRESAR',
                                    denyButtonText: '¡VAMOS!',
                                    confirmButtonColor: '#34495e',
                                    denyButtonColor: '#58AE39'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                    } else if (result.isDenied) {
                                        window.open(link)
                                    }
                                })
                            }
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded flex items-stretch mr-3"
                        >
                            COMPARTIR <img src={WP} alt="fireSpot" className="max-h-5 ml-2" />
                        </button>
                        <button
                            onClick={
                                () => Swal.fire({
                                    title: '¿Quieres eliminar toda tu seleccion?',
                                    showDenyButton: true,
                                    showCancelButton: false,
                                    confirmButtonText: 'REGRESAR',
                                    denyButtonText: 'ELIMINAR TODO',
                                    confirmButtonColor: '#34495e',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                    } else if (result.isDenied) {
                                        cachingDelete()
                                    }
                                })
                            }
                            className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded flex items-stretch"
                        >
                            LIMPIAR CARRITO
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