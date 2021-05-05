import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Grid({ dataItems, dataCategories, isItem }) {

    const [data, setData] = useState([])
    useEffect(()=>{
        addToCart()
        console.log('desde useefect', data)
        localStorage.setItem('Cart', JSON.stringify(data))
    },[data])

    const handleClick = value => () => {
        setData(value)
    }

    function addToCart() {
        const cartStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!cartStorage) {
            
        } else {
            const prevCartItems = JSON.parse([localStorage.getItem('Cart')])
            prevCartItems.push(data)
            console.log(prevCartItems)
            /*const prevCartItems = JSON.parse(localStorage.getItem('Cart'))
            const full = null //prevCartItems.unshift({ 'itemId': id, 'categoryId': category });
            console.log('prevCartItems', prevCartItems)
            console.log('full', full)
            //console.log(data)
            console.log('valio dick')*/
        }
    }

    const cartStorage = JSON.parse(localStorage.getItem('Cart'));
    console.log('cartStorage', cartStorage)

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
                            {/*<button onClick={() => addToCart(d.id, d.category)}>Añadir al carrito</button>*/}
                            <button onClick={handleClick([{ id: d.id, category: d.category }])}>Añadir al carrito</button>
                        </section>
                    ))
                }
            </div>
        )
    }
}