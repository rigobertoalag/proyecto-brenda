import React from 'react'
import {Link} from 'react-router-dom'

export default function Grid({data, isItem}) {
    return (
        <>
        {
            data.map((d) => (
                <section key={d.id}>
                    <img src={d.img} alt={d.name} style={{ width: "100%" }} className="section-img" />
                    <h2>{d.name}</h2>
                    <p>{d.description}</p>
                    {
                        isItem ? 
                        <a className="info-link" onClick={()=> alert('Se añadio al carrito')}>Añadir al carrito</a>
                        :
                        <Link to='/items'><a className="info-link">Ver mas..</a></Link>
                    }
                </section>
            ))
        }
        </>
    )
}