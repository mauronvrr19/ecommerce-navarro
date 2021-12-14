import React from "react";
import ItemListContainer from "../ItemListContainer";
    
// const ItemList = setTimeout( ()=>{
//   const  peticion = fetch ('items')
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//     console.log (peticion)}, 2000)
 const Itemlist = props => {
     return (
         <div>
             {props.data.map(item =><item key={item.id} name={item.title} />)}
         </div>
     )
 }
export default Itemlist