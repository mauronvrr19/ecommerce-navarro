
import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {

    const [precio_total, setPrecioTotal] = useState(0)
    const [contador_total,setcontadorTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito = (contador,unidad) => {
     
        const copia_unidad = {...unidad}
        //unidad.contador = contador

       
        const copia = unidad.slice(0)
        copia.push(unidad)
        setCarrito(copia) 

        console.log(contador  + " el  contador  funciona ")
     

        const precio_total = () => {
            let total = 0;
            carrito.forEach((item) => (total += item.price * item.contador));
            return total;
            console.log(precio_total)
          };
    }


    const borrarDelCarrito = (id) => {

        const copia_carrito = {...carrito}

        carrito.filter  ((item) => {
if (item.id !==id && item.contador >1 ){
    item.contador --
    console.log(item.contador)
    setCarrito (copia_carrito)
    setcontadorTotal(contador_total - item.contador)
} else {
console.log ("no hay productos")
setCarrito ([])
setcontadorTotal(0)
}})}

    const limpiarCarrito = () => {  setCarrito([])  }

    const isInCarrito = (id) => { 
        return carrito.find(e => e.item.id === id)
    }

    const valorDelContexto = {
        contador_total , 
        carrito , 
        agregarAlCarrito , 
        borrarDelCarrito ,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider