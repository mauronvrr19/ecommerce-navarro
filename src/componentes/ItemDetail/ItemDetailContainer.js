import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";


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
