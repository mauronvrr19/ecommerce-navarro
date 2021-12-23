import React from "react";
import { Link } from "react-router-dom";



const Item = (props) => {
    
  return (
    <ul>
      <li>{props.title}</li>
      <li>{props.id}</li>
      <li>{props.price}</li>
      <Link to={`/ItemDetailContainer/${props.id}`}>ver detalle</Link>
    </ul>
  );
};



export default Item
