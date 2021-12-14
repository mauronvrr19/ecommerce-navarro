import React from "react";
import ReactDom from "react-dom";

import ItemCount from "./ItemCount/ItemCount";
import Itemlist from "./ItemCount/ItemList";

const ItemListContainer = (props) =>
{
    const onAdd = () => console.log("producto aniadido")

    const data =
[
    {
"title" : "placa madre",
"price" : 50000 ,
"id": "I7" ,
"pictureurl": "#"
},
{
    "title" : "placa madre",
    "price" : 40000 ,
    "id": "I3",
    "pictureurl": "#" 
},
{
    "title" : "placa madre",
    "price" :  15000,
    "id": "intel celeron",
    "pictureurl": "#"
},
]

    return(
        <div>
        <ul>
            <li>{props.nombre} 1</li>
            <li> {props.nombre} 2 </li>
            <li> {props.nombre} 3</li>
            <li> {props.nombre} 4</li>
        </ul>      
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        <Itemlist data={data}/>

</div>
    )

}



export default ItemListContainer