import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
    const [cartItems, setCartItems] = (useState(JSON.parse(localStorage.getItem('Cart'))))
    console.log('cartItems desde el carrito', cartItems)

    function cachingDelete(){
        localStorage.removeItem('Cart')
        setCartItems('')
        alert('Se borro')
    }

    if (cartItems) {
        return (
            <main>
                {
                    cartItems.map((c, i) => (
                        <div key={i}>
                            <li>{c.itemID}</li>
                            <li>{c.categoryID}</li>
                        </div>
                    ))
                }
                <button onClick={cachingDelete}>Limpiar carrito</button>
                <button onClick={()=>alert('Se envio por whats :)')}>Compartir</button>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Nada en el carrito :(</h1>
                <button><Link to='/categories'><a className="info-link">Ir a las categorias</a></Link></button>
            </main>
        )
    }
}