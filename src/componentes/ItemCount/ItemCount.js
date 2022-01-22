import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial,onAdd})=> {

    const [contador, setContador] = useState(initial);

const [lista, setLista] = useState([]);

const quitar =()=> {
    if (contador <= 0){
  }
  else {
    setContador(contador - 1)
  }
}   


const agregar =()=>{
    if (contador >= stock){
 }
 else {
    setContador(contador + 1)
    setLista();

 }
    }
    
const confirmar =()=>{
    if(contador <= stock & contador > 0){
        setContador(initial);
        onAdd(contador);
    }
}


    return (
        <div className="btn-group" role="group" aria-label="Basic example">
<p>Contador Actual : {contador}</p>
  <button onClick={quitar} type="button" >quitar</button>
  <button onClick={confirmar} type="button" >confirmar</button>
  <button onClick={agregar} type="button" >agregar</button>
</div>
    )

    } 

export default ItemCount