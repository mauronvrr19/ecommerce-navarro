import Itemlist from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase";
import { getDocs, query, collection , where } from "firebase/firestore"

const data =
 [
    {
        title : "combo 1",
        price : 100000 ,
        id: 1 ,
        pictureurl: "/imagen.png",
    },
        {
            title : "combo 2",
            price :  140000 ,
            id: 2,
            pictureurl: "/imagen.png" 
        },
        {
            title : "combo 3",
            price :  150000,
            id: 3,
            pictureurl: "/imagen.png" 
        },
        {
            title : "combo 4",
            price :  200000,
            id: 4,
            pictureurl: "/imagen.png" 
        },
    ]


const ItemListContainer = (props) =>
{
    const { id } = useParams()


    let [lista,setLista] = useState ([])

    useEffect(() => {

        const productosCollection = collection(db, "data")

        //pedirProductos()

        if (id) {

            const consulta = query(productosCollection,where("data","==",id),where("price",">",100))
            /* await */ getDocs(consulta)
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
