import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                        <section key={d.id}>
                            <img src={d.image} alt={d.name} style={{ width: "100%" }} className="section-img" />
                            <h2>{d.name}</h2>
                            <p>{d.description}</p>
                            {
                                isItem ?
                                    <Link to='/items#'><a className="info-link" onClick={() => alert('Se añadio al carrito')}>Añadir al carrito</a></Link>
                                    :
                                    <Link to={{
                                        pathname: "/items/" + d.id
                                    }}><a className="info-link">Ver mas..</a></Link>
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
                            <button onClick={() => addToCart(d.id,d.name,d.description,d.img,d.category_id,d.user_id,d.created_at,d.updated_at)}>Añadir al carrito</button>
                        </section>
                    ))
                }
            </div>
        )
    }
}