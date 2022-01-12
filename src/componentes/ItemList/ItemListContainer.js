import Itemlist from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase";
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
    const onAdd = () => console.log("producto anidado")
    const { id } = useParams()


    let [lista,setLista] = useState ([])

            useEffect(()=>{
            const promesa = new Promise ((res, rej)=>{
                setTimeout(() => {
                    res(data)
                    if (id) {
                        return data.filter(dat=>dat.categoria==id)
                      }else{
                        return data
                      }},2000 );
            })
promesa           
.then((data)=>{
    console.log("aprobado")
    setLista (data)
})
.catch(()=>{
    console.log("desaprobado")
})
            },[id])
    
    return(
        <div>    
           <Itemlist data={lista}/>  
       </div>
    )



}


export default ItemListContainer
