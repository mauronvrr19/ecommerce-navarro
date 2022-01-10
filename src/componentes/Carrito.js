

import { Link } from "react-router-dom"
import { useContexto } from "./CartContext"

const Carrito = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()
    return (
        <div>
tu compras:
            {carrito.length > 0 ? (
                <ul>
                   {carrito.map((unidad, index) => {
                        return <li key={index}>{unidad.title}  ${unidad.price}</li>
                    }) }
                          <div>{console.log(carrito + "carrito")}</div>  
          <button onClick={carrito} type="button" className="btn btn-primary">carrito</button>
  <button onClick={borrarDelCarrito} type="button" className="btn btn-primary">borrar</button>
 <button onClick={limpiarCarrito} type="button" className="btn btn-primary">limpiar</button>
 
                </ul>
            ) :  
 <p>No hay productos en el carrito</p>}
 <div>          <Link to={`/productos`}><button variant="primary">productos</button></Link>
</div>
 
        </div>
        
    )
}
export default Carrito

