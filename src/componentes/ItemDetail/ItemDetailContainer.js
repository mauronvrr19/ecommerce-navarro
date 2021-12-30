import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const producto = [
  {
    title: "CM296 Combo Mother 550 + Ryzen 5 5600G + 16Gb • Motherboard AM4 - Gigabyte GA-B550 AORUS PRO V2 • Procesador Amd Ryzen 5 5600G 4.4 Ghz - AM4 • Memoria Ram DDR4 - 8Gb 2666 Mhz Crucial •",
    price: 100000,
    pictureurl: "/combo12.jpeg",
    id: 1,
  },
  {
    title: "CM298 Combo Mother 450 + Ryzen 5 5600G + 8Gb Blindada• Motherboard AM4 - Gigabyte GA-B450M DS3H • Procesador Amd Ryzen 5 5600G 4.4 Ghz - AM4 • Memoria Ram DDR4 - 8Gb 2666 Mhz Crucial •",
    price: 140000,
    pictureurl: "/combo12.jpeg",
    id: 2,
  },
  {
    title: "CM300 Combo Mother 450 + Ryzen 5 5600G + 8Gb Blindada + 240  • Motherboard AM4 - Gigabyte GA-B450M DS3H • Procesador Amd Ryzen 5 5600G 4.4 Ghz - AM4 • Memoria Ram DDR4 - 8Gb 2666 Mhz Crucial •",
    price: 150000,
    id: 3,
    pictureurl: "/combo3.jpeg"
  },
  {
    title: "CM301 Combo Mother 450 + Ryzen 5 5600G + 16Gb Blindada + 480 • Motherboard AM4 - Gigabyte GA-B450M DS3H • Procesador Amd Ryzen 5 5600G 4.4 Ghz - AM4 • Memoria Ram DDR4 - 8Gb 2666 Mhz Crucial •",
    price: 200000,
    pictureurl: "/combo4.jpeg",
    id: 4,
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
