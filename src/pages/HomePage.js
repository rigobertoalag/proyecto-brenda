import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage(){
    return(
        <div style={{textAlign: "center", marginTop: "10rem"}}>
            <h1>Bienvenido</h1>
            <Link to='/categories'><button>DA CLIC PARA INICIAR</button></Link>
        </div>
    )
}