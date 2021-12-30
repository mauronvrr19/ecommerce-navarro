import React from "react";
import { Link } from "react-router-dom";



const Item = (props) => {
    
  return (
    <div className="productos">
            <img className="imgcontainer" src={props.pictureurl} alt="imagen ilustrativa" />
    <ul>
      <li>{props.title}</li>
      <li>codigo del combo :{props.id}</li>
      <li>precio: ${props.price}</li>
      <Link className="boton-producto" to={`/producto/${props.id}`}>ver detalle</Link>
    </ul>
    </div>
  );
};



export default Item
