import React from "react";
import ReactDom from "react-dom";
import ItemListContainer from "../ItemListContainer";
import Item from "./Item";  

const ItemList = setTimeout( ()=>{
  const  peticion = fetch ('data')
    .then(res=>res.json())
    .then(res=>console.log(res))
    console.log (peticion)}, 2000)
 const Itemlist = props => {
     return (
         <div>
             {props.data.map(item =>(<Item id={item.id} title={item.title} price={item.price}/>))}
         </div>
     )
 }
export default Itemlist