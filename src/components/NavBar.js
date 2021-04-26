import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="topnav" id="myTopnav">
            <Link to='/'><p className="active">Inicio</p></Link>
        </div>
    )
}