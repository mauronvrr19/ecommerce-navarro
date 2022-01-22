import React from "react";
import Item from "./Item";

const Itemlist = (props) => {
  const { data } = props;


  return (
    <div>
      {data.map((item, index) => (
        <Item id={item.id} title={item.title} price={item.price} key={index} pictureurl={item.pictureurl} stock={item.stock}/>
      ))}
      
    </div>
  );
};
export default Itemlist;