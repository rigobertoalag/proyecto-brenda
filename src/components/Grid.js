import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Grid({ dataItems, dataCategories, isItem }) {

    function addToCart(id, category) {
        const cartStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!cartStorage) {
            const item = ([{ 'itemID': id, 'categoryID': category }])
            localStorage.setItem('Cart', JSON.stringify(item))
        } else {
            const prevItem = JSON.parse(localStorage.getItem('Cart'))
            console.log('previtem', prevItem)

            const newItem = ([{ 'itemID': id, 'categoryID': category }])
            console.log(newItem)

            Array.prototype.push.apply(prevItem, newItem);
            console.log('desde array proto',prevItem)

            localStorage.setItem('Cart', JSON.stringify(prevItem))
        }
    }

    const cartStorage = JSON.parse(localStorage.getItem('Cart'));
    console.log('ya convertido', cartStorage)

    if (dataCategories) {
        return (
            <div>
                {
                    dataCategories.map((d) => (
                        <section key={d.id}>
                            <img src={d.img} alt={d.name} style={{ width: "100%" }} className="section-img" />
                            <h2>{d.name}</h2>
                            <p>{d.description}</p>
                            {
                                isItem ?
                                    <Link to='/items#'><a className="info-link" onClick={() => alert('Se añadio al carrito')}>Añadir al carrito</a></Link>
                                    :
                                    <Link to='/items'><a className="info-link">Ver mas..</a></Link>
                            }
                        </section>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    dataItems.map((d) => (
                        <section key={d.id}>
                            <img src={d.img} alt={d.name} style={{ width: "100%" }} className="section-img" />
                            <h2>{d.name}</h2>
                            <p>{d.description} el id: {d.id}</p>
                            <button onClick={() => addToCart(d.id, d.category)}>Añadir al carrito</button>
                        </section>
                    ))
                }
            </div>
        )
    }
}