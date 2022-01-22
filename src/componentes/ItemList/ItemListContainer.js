import Itemlist from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase";
import { getDocs, query, collection , where } from "firebase/firestore"



const ItemListContainer = (props) =>
{
    const { id } = useParams()


    let [lista,setLista] = useState ([])

    useEffect(() => {

        const productosCollection = collection(db, "data")


        if (id) {

            const consulta = query(productosCollection,where("data","==",id),where("price",">",100))
         getDocs(consulta)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {

            getDocs(productosCollection)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        }    }, [id])

    
    return(
        <div>    
           <Itemlist data={lista}/>  
       </div>
    )



}


export default ItemListContainer
