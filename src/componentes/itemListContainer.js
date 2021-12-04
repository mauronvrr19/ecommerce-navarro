import React from "react";

const productos = [
    {href:"#", name:"inicio",id:1}, 
    {href:"#", name:"Productos",id:2}, 
    {href:"#", name:"Contactos",id:3}, 
    {href:"#", name:"Carrito",id:4} 
]

const itemListContainer = () => {
    return (
        <div>
{productos.map(producto => <item/>)}
        </div>
    )
}

export default itemListContainer