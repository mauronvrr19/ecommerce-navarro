import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props)=> {
    const { producto } = props;

console.log(props)
const onAdd = () => console.log("producto anidado")

if (producto.length > 0){
        return (
          <ul>
          <li>{producto[0].title}</li>
          <li>{producto[0].id}</li>
          <li>{producto[0].price}</li>
          <li>{producto[0].pictureurl}</li>

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