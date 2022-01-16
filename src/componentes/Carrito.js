

import { Link } from "react-router-dom"
import { useContexto } from "./CartContext"

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        limpiarCarrito()
    }
return (
    <div>
sus compras :
        {carrito.length > 0 ? (
            <ul>
                {carrito.map((unidad, indice) => {
                    return (
                        <li key={indice}>
                            {unidad.title} - {unidad.contador} combos - ${unidad.price * unidad.contador} 
                            <button onClick={()=>borrarDelCarrito(unidad.id, unidad.contador, unidad.price)}>borrar item</button>
                            <button onClick={limpiarCarrito} >limpiar</button>
                            
                        </li>
                    )
                })}
            </ul>
        ) : <p>No hay productos en el carrito</p>}
 <div>          <Link to={`/productos`}><button variant="primary">productos</button></Link>
 </div>
        <button onClick={finalizarCompra}>finalizar compra</button>
    </div>
)
}

export default Carrito