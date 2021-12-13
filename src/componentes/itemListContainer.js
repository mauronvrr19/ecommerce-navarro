import React from "react";
import ItemList from "./ItemCount/ItemList";
import Item from "./ItemCount/Item"

const ItemListContainer = (props) =>
{
    return(
        <div>
        <ul>
            <li>{props.nombre} 1</li>
            <li> {props.nombre} 2 </li>
            <li> {props.nombre} 3</li>
            <li> {props.nombre} 4</li>
        </ul>
        
    {id.map(ids => <ItemList/>)}
</div>
    )

}





export default ItemListContainer