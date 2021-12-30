import React from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemCount = ({ stock, initial,onAdd})=> {

    const [contador, setContador] = useState(initial);

const [lista, setLista] = useState([]);

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
    setLista();

 }
    }
    
const confirmar =()=>{
    if(contador <= stock){
        setContador(initial);
        onAdd(contador);
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