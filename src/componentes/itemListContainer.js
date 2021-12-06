import React from "react";


const ItemListContainer = (props) =>
{
    return(
        <ul>
            <li>{props.nombre} 1</li>
            <li> {props.nombre} 2 </li>
            <li> {props.nombre} 3</li>
            <li> {props.nombre} 4</li>
        </ul>
    )
}


// const productos = [
//     {href:"#", name:"inicio",id:1}, 
//     {href:"#", name:"Productos",id:2}, 
//     {href:"#", name:"Contactos",id:3}, 
//     {href:"#", name:"Carrito",id:4} 
// ]

// const ItemListContainer = () => {
//     return (
//         <div>
// {productos.map(producto => <item/>)}
//         </div>
//     )
// }



export default ItemListContainer