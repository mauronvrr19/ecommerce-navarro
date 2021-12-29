import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props)=> {
  const { producto } = props;

const [ocultar, setOcultar] = useState(true)
const [cantidad, setCantidad] = useState(0)

const onAdd = (contador) => {
console.log("Contador");
setOcultar(false);
setCantidad(contador);
}

if(ocultar) {

  return (
    <div>
      <h3>Nombre: {props.title}</h3>
      <h3>codigo: {props.id}</h3>
      <h3>Precio: ${props.price}</h3>
      <ItemCount stock={10} initial={0}  onAdd={onAdd}
      />
    </div>
  );
} else {
  return (
    <div>
       <h3>Nombre: {props.title}</h3>
      <h3>codigo: {props.id}</h3>
      <h3>Precio: ${props.price}</h3>
      <Link to={`/carrito`}><button variant="primary">Terminar Comprar</button></Link>
         </div>
  )}}

  

export default ItemDetail