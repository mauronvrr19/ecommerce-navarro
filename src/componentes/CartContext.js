
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
        /* if(isInCarrito()){
            
        }else{
        } */
    }

    const borrarDelCarrito = (id) => {
      
        // setCarrito(estadoArray.map())
    }

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