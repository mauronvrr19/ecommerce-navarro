import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial,onAdd})=> {
let [contador, setContador] = useState(0);

const quitar =()=> {
    if (contador <= 0){
        console.log("debe seleccionar un producto")
  }
  else {
    setContador(contador - 1)
  }
}   


const agregar =()=>{
    if (contador >= stock){
console.log("stock maximo")
 }
 else {
    setContador(contador + 1)
 }
    }
const confirmar =()=>{
    if (contador > 0){
    onAdd()}
    else {
        console.log("no seleccionaste ningun producto")
    }
}

    return (

<div className="btn-group" role="group" aria-label="Basic example">
<p>Contador Actual : {contador}</p>
  <button onClick={quitar} type="button" className="btn btn-primary">quitar</button>
  <button onClick={confirmar} type="button" className="btn btn-primary">confirmar</button>
  <button onClick={agregar} type="button" className="btn btn-primary">agregar</button>
</div>
    )

    } 

export default ItemCount