import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props)=> {
    const { producto } = props;

console.log(props)
const onAdd = () => console.log("producto anidado")

        return (
          <ul>
          <li>{producto.props}</li>
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>

        </ul>
        )
      }


export default ItemDetail