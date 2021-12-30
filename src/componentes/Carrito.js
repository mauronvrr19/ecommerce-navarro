
import React from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {
    return (
        <div>
            <p>soy carrito</p>
            <Link to={`/productos`}><button variant="primary">Seguir Comprando</button>
        </Link>


        </div>
    )
}

export default Carrito
