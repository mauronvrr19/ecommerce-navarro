import React from "react";

const ItemDetail = (props)=> {
    const { producto } = props;
console.log(producto)

        return (
          <ul>
            <li>{producto.title}</li>
            <li>{producto.id}</li>
            <li>{producto.price}</li>
          </ul>
        );
      };



export default ItemDetail