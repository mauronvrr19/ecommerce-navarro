import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const producto = [
    {
        title : "placa madre",
        price : 500 ,
        pictureurl: "#"
        },
        {     id: 2,
            title : "micros",
            price : 400 ,
            pictureurl: "#" 
        },
        {
            title : "memoria",
            price :  300,
            id: 3,
            pictureurl: "#"
        }]
const ItemDetailContainer = (props) => {

    const onAdd = () => console.log("producto anidado")
    const { id } = useParams()

    let [unidad,setUnidad] = useState ([])

            useEffect(()=>{
            const promesa = new Promise ((res, rej)=>{
                setTimeout(() => {
                    res(producto)
                  return producto.filter(productos=>productos.id==id)

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
            },[id])

        
return(
    <div>    
       <ItemDetail producto={producto}/>
   </div>
)

}



export default ItemDetailContainer