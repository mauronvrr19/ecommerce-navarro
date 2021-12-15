import react from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = producto=> {

     const onAdd = () => console.log("producto aniadido")

return(
    <div>
        <h1>detalles del producto</h1>
        <p>nombre: {producto.title}</p>
        <p>modelo: {producto.id}</p>
        <p>precio: ${producto.price}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <p>cantidad de productos unitarios : {contador}</p>
  <button onClick={quitar} type="button" className="btn btn-primary">quitar</button>
  <button onClick={confirmar} type="button" className="btn btn-primary">confirmar</button>
  <button onClick={agregar} type="button" className="btn btn-primary">agregar</button>
    </div>
)
}

export default ItemDetail