import React from "react";
import Item from "./Item";

    const ItemList = setTimeout( ()=>{
  const  peticion = fetch ("item.js")
    .then(res=>res.json())
    .then(res=>console.log(res))
    console.log (peticion)}, 5000)

export default ItemList