import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {

    /** */
    const [data, setData] = useState('')
    function cachingData(){
        localStorage.setItem('myCat', 'Tom')
        alert('se añadio')
    }

    function cachingDelete(){
        localStorage.removeItem('myCat');
        alert('Se borro')
    }

    const cat = localStorage.getItem('myCat');
    console.log(cat)
    /** */

    let location = useLocation();

    function ShowCart() {
        if (location.pathname === '/categories' || location.pathname === '/items') {
            return (
                    <div style={{ position: "relative", float: "right", margin: "0.5rem 1rem" }}>
                        <Link to='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </Link>
                    </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className="topnav" id="myTopnav">
            <Link to='/'><p className="active">Inicio</p></Link>
            <ShowCart />
            <button onClick={cachingData}>Test añadir</button>
            <button onClick={cachingDelete}>Test eliminar</button>
        </div>
    )
}