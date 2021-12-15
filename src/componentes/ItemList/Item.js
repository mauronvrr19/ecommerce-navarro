import React from "react";
import ReactDom from "react-dom";
import Itemlist from "./ItemList";

const Item = props =>{
    return(
        <ul>
            <li>{props.title}</li>
            <li>{props.id}</li>
            <li>{props.price}</li>
        </ul>
    )
}

export default Item
