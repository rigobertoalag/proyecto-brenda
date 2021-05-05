import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Grid({ dataItems, dataCategories, isItem }) {

    const [data, setData] = useState([])

    function addToCart(id, category) {
        const cartStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!cartStorage) {
            const data = [{ 'itemId': id, 'categoryId': category }]
            //setData({id, category})
            localStorage.setItem('Cart', JSON.stringify(data))
            console.log('stringify', data)
        } else {
            const prevCartItems = JSON.parse(localStorage.getItem('Cart'))
            const full = prevCartItems.unshift({ 'itemId': id, 'categoryId': category });
            console.log('prevCartItems', prevCartItems)
            console.log('full', full)
            //console.log(data)
        }
    }

    const cartStorage = JSON.parse(localStorage.getItem('Cart'));
    console.log(cartStorage)

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