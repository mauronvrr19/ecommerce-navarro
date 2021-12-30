import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const producto = [
  {
    title: "placa madre",
    price: 500,
    pictureurl: "#",
    id: 1,
  },
  {
    title: "micros",
    price: 400,
    pictureurl: "#",
    id: 2,
  },
  {
    title: "memoria",
    price: 300,
    id: 3,
    pictureurl: "#",
  },
];
const ItemDetailContainer = (props) => {
  const onAdd = () => console.log("producto anidado");
  const { id } = useParams();

  let [unidad, setUnidad] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(producto);
      }, 2000);
    });
    promesa
      .then((producto) => {
        let filterProduct = producto.filter((prod) => prod.id === parseInt(id));
        console.log(filterProduct);
        setUnidad(filterProduct);
      })
      .catch(() => {
        console.log("-");
      });
  }, [id]);

  return (
    <div>
      <ItemDetail unidad={unidad} />
    </div>
  );
};

export default ItemDetailContainer;
