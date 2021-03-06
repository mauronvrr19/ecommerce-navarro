
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

   
    
        const agregarAlCarrito = (contador, unidad) => {
             
            
            const id = unidad.id
            if (isInCarrito(id)) {
                const copia_del_carrito = [...carrito]
                let match = copia_del_carrito.find((p) => p.id === unidad.id)
                match.contador = match.contador + contador
                const precio = unidad.price * contador;

                setCarrito(copia_del_carrito)
                setPrecioTotal(precio_total+precio)

            } else {
                const unidad_con_contador = {
                    ...unidad,
                    contador,
                } 
                const precio = unidad.price * contador;
                setPrecioTotal(precio_total+precio)
                setCarrito([...carrito, unidad_con_contador])

            }
            setcontadorTotal(contador_total + contador)
            

        }
         

         
        const borrarDelCarrito = (id, contador, price) => {
            let copiaCarrito =carrito.filter(obj=> obj.id !== id)     
            setCarrito(copiaCarrito)
            setcontadorTotal(contador_total - contador)
            setPrecioTotal(precio_total - (price * contador))
            
        }
        

    const limpiarCarrito = () => { 
         setCarrito([]) ;
    setcontadorTotal(0);
       setPrecioTotal(0)  ; }

    const isInCarrito = (id) => { 
        return carrito.some((p) => p.id === id)
}

    const valorDelContexto = {
        contador_total , 
        carrito ,
        precio_total, 
        agregarAlCarrito , 
        borrarDelCarrito ,
        limpiarCarrito, 
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider



