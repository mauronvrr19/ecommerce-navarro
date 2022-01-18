
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
                console.log(contador + " contador del cart");
                setCarrito(copia_del_carrito)
    
            } else {
                const unidad_con_contador = {
                    ...unidad,
                    contador,
                } 
                setCarrito([...carrito, unidad_con_contador])

            }
            setcontadorTotal(contador_total + contador)
            console.log(contador + contador_total +  " cantidad total");

        }
         
        const totalAPagar = () => {
            let total = 0;
          //Hacemos un forEach del carrito
            carrito.forEach((item) => (total += item.item.precio * item.contador_total));
          //Retornamos el total => esta funcion tenes que llamarta ( asi: totalAPagar() ) en la funcion de borrar prod para que se actualice el precio
          //A su vez, esta funcion la recuperas directamente en Carrito.js en la parte de total
            return total;
           };
         
        const borrarDelCarrito = (id, contador, price) => {
            let copiaCarrito =carrito.filter(obj=> obj.id !== id)     
            setCarrito(copiaCarrito)
            setcontadorTotal(contador_total - contador)
            setPrecioTotal(precio_total - (price * contador))
            
        }
        

    const limpiarCarrito = () => { 
         setCarrito([]) ;
    setcontadorTotal(0);
         ; }

    const isInCarrito = (id) => { 
        return carrito.some((p) => p.id === id)
}

    const valorDelContexto = {
        contador_total , 
        carrito , 
        totalAPagar,
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



