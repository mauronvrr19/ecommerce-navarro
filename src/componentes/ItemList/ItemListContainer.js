import ItemCount from "../ItemCount/ItemCount";
import Itemlist from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const data =
 [
    {
        title : "placa madre",
        price : 50000 ,
        id: 1 ,
        pictureurl: "#"
        },
        {
            title : "micros",
            price : 40000 ,
            id: 2,
            pictureurl: "#" 
        },
        {
            title : "memoria",
            price :  30000,
            id: 3,
            pictureurl: "#"
        }]


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
