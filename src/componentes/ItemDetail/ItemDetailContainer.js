import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const producto =
[
    {
"title" : "placa madre",
"price" : 50000 ,
"id": "I7" ,
"pictureurl": "#"
}]

const ItemDetailContainer = (props) => {

    const onAdd = () => console.log("producto anidado")

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