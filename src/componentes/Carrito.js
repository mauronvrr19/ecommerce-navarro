
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useContexto } from "./CartContext"
import { db } from "../firebase"

const Carrito = () => {
    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()

    const finalizarCompra = () => { 
        console.log("Guardando la compra en la db...")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "mauro",
                lastName : "navarro",
                email : "mauronvrr19@gmail.com"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : 100
        })
        .then((resultado)=>{
            console.log(resultado)
            limpiarCarrito()
        })
    }

return (
    <div>
sus compras :
        {carrito.length > 0 ? (
            <ul>
                {carrito.map((unidad, indice) => {
                    return (
                        <li key={indice}>
                            {unidad.detail} - {unidad.contador} combos - ${unidad.price * unidad.contador}
                            <button onClick={()=>borrarDelCarrito(unidad.id, unidad.contador, unidad.price)}>borrar item</button>
                            <button onClick={limpiarCarrito} >limpiar</button>
                            
                        </li>
                    )
                })}
            </ul>
        ) : <p>ya no hay productos</p>}
 <div>          <Link to={`/productos`}><button variant="primary">productos</button></Link>
 </div>
        <button onClick={finalizarCompra}>finalizar compra</button>
    </div>
)
}

export default Carrito