import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function Grid({ dataItems, dataCategories, isItem }) {

    const [cart, setCart] = useState([])

    //console.log('desde var cart:',cart)

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
                <NavBar dataItems={cart}/>
                {
                    dataItems.map((d) => (
                        <section key={d.id}>
                            <img src={d.img} alt={d.name} style={{ width: "100%" }} className="section-img" />
                            <h2>{d.name}</h2>
                            <p>{d.description} el id: {d.id}</p>
                            <button onClick={()=>setCart(d.id)}>Añadir al carrito</button>
                        </section>
                    ))
                }
            </div>
        )
    }
}