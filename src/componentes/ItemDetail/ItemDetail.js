import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import  { useContexto }  from "../CartContext";
import Carrito from "../Carrito";

const ItemDetail = ({ unidad }) => {
  const [ocultar, setOcultar] = useState(true);
  const [cantidad, setCantidad] = useState(0);

  const { agregarAlCarrito } = useContexto()


  const onAdd = (contador) => {
    setOcultar(false);
    setCantidad(contador );
    console.log(contador)
    agregarAlCarrito(contador,unidad)
  };
  if (ocultar) {

  return (
    <div>
      {unidad.map((u) => {
        return (
          <>
            <h3>detalle: {u.title}</h3>
            <h3>codigo: {u.id}</h3>
            <h3>Precio: ${u.price}</h3>
            <img className="imgdetail" src={u.pictureurl} alt="combo" />
            <div>
            <ItemCount  stock={10} initial={0} onAdd={onAdd} />
            </div>
          </>
        );
      })}
    </div>
  )}
else {
  return (
    <div>
      {unidad.map((u) => {
        return (
          <>
            <h3>Nombre: {u.title}</h3>
            <h3>codigo: {u.id}</h3>
            <h3>Precio: {u.price}</h3>
            <img className="imgdetail" src={u.pictureurl} alt="combo" />
            <div>
           <Link to={`/carrito`}><button variant="primary">ir a carrito</button></Link>
           </div>
          </>
        );
      })}
    </div>
  )}}
    
  export default ItemDetail;
