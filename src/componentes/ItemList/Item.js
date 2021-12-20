import React from "react";

const Item = (props) => {
  return (
    <ul>
      <li>{props.title}</li>
      <li>{props.id}</li>
      <li>{props.price}</li>
    </ul>
  );
};

export default Item;