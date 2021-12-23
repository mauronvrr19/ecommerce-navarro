import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const producto =
[
    {
"title" : "marca de placa:",
"price" : "precio : $" ,
"id": "procesador" ,
"pictureurl": "imagen ilustrativa"}
]

const ItemDetailContainer = (props) => {

    const onAdd = () => console.log("producto anidado")
    const { id } = useParams()

    let [unidad,setUnidad] = useState ([])

            useEffect(()=>{
            const promesa = new Promise ((res, rej)=>{
                setTimeout(() => {
                    res(producto)
                },2000 );
            })
promesa           
.then((producto)=>{
    console.log("+")
    setUnidad (producto)
})
.catch(()=>{
    console.log("-")
})
            },[])

        
return(
    <div>    
       <ItemDetail producto={unidad}/>
   </div>
)

}


export default ItemDetailContainer