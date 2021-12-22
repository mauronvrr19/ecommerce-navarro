import ItemCount from "../ItemCount/ItemCount";
import Itemlist from "./ItemList";
import { useState, useEffect } from "react";

const data =
[
    {
"title" : "placa madre",
"price" : 50000 ,
"id": "I7" ,
"pictureurl": "#"
},
{
    "title" : "placa madre",
    "price" : 40000 ,
    "id": "I3",
    "pictureurl": "#" 
},
{
    "title" : "placa madre",
    "price" :  15000,
    "id": "intel celeron",
    "pictureurl": "#"
},
]


const ItemListContainer = (props) =>
{
    const onAdd = () => console.log("producto anidado")

    let [lista,setLista] = useState ([])

            useEffect(()=>{
            const promesa = new Promise ((res, rej)=>{
                setTimeout(() => {
                    res(data)
                },2000 );
            })
promesa           
.then((data)=>{
    console.log("aprobado")
    setLista (data)
})
.catch(()=>{
    console.log("desaprobado")
})
            },[])
    
    return(
        <div>    
           {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
           <Itemlist data={lista}/>
       </div>
    )

}



export default ItemListContainer