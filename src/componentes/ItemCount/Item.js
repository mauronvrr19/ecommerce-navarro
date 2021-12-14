import React from "react";
import ReactDom from "react-dom";
import ItemList from "./ItemList";


const Item = props=>{
    return(
        <div>
            <h3>{props.name}</h3>
        </div>
    )

}

export default Item
