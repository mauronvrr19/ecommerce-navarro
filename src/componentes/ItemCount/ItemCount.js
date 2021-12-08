import react, { useState } from 'react';



const ItemCount = ()=>{

let [contador, setContador] = useState(0)

const quitar =()=> {
    if (contador > 0){
    setContador(contador - 1)}
}   


const agregar =()=>{
    if (contador < 10){
    setContador(contador + 1)}
    }

const onAdd =()=> {
    console.log("compra efectuada")
}



    return (

<div class="btn-group" role="group" aria-label="Basic example">
<p>Contador Actual : {contador}</p>
  <button onClick={quitar} type="button" className="btn btn-primary">quitar</button>
  <button onClick={onAdd} type="button" className="btn btn-primary">confirmar</button>
  <button onClick={agregar} type="button" className="btn btn-primary">agregar</button>
</div>
    )

    }

export default ItemCount