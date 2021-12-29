import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (props)=> {
    const { producto } = props;

console.log(props)
const onAdd = () => console.log("producto anidado")

if (producto.length > 0){
        return (
          <ul>
          <li>{producto.title}</li>
          <li>{producto.id}</li>
          <li>{producto.price}</li>

          <ItemCount stock={10} initial={1} onAdd={onAdd}/>

        </ul>
        )}
        else {
          return (
            <span>cargando</span>
          )
      }
    }


  

export default ItemDetail