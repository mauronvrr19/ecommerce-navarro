import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props) => {


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
       <ItemDetail producto={producto}/>
   </div>
)

}


export default ItemDetailContainer