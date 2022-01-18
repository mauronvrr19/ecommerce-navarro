import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";


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
  
  const { id } = useParams();

  let [unidad, setUnidad] = useState({});

  useEffect(
    () => {
      const productosQuery = collection(db, "data");

      const consulta = doc(productosQuery, id);

      getDoc(consulta)
        .then((resultado) => {
          setUnidad({ id: id, ...resultado.data() });
         })
        .catch((error) => {
          console.log(error);
        });
    },   [id]
    );


  return (
    <div>
      <ItemDetail unidad={unidad} />
    </div>
  );
};

export default ItemDetailContainer;
