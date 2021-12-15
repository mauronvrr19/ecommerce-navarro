import react from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {

    const onAdd = () => console.log("producto aniadido")

    let [unidad,setUnidad] = useState ([])

            useEffect(()=>{
            const promesa = new Promise ((res, rej)=>{
                setTimeout(() => {
                    res(data)
                },2000 );
            })
promesa           
.then((data)=>{
    console.log("aprobado")
    setUnidad (data)
})
.catch(()=>{
    console.log("desaprobado")
})
            },[])


    const producto =
[
    {
"title" : "placa madre",
"price" : 50000 ,
"id": "I7" ,
"pictureurl": "#"
}]
return(
    <div>    
       <ItemCount stock={4} initial={1} onAdd={onAdd}/>
       <ItemDetail producto={producto}/>
   </div>
)

}


export default ItemDetailContainer