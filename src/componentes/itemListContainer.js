import React from "react";
import ItemList from "./ItemCount/ItemList";
import Item from "./ItemCount/Item"
import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = (props) =>
{
    const onAdd = () => console.log("producto aniadido")

    return(
        <div>
        <ul>
            <li>{props.nombre} 1</li>
            <li> {props.nombre} 2 </li>
            <li> {props.nombre} 3</li>
            <li> {props.nombre} 4</li>
        </ul>      
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
  
    {/* {id.map(ids => <ItemList/>)} */}
</div>
    )

}





export default ItemListContainer