
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
     

      
    }
const preciototal = () => {
                let total = 0;
                carrito.forEach((item) => (total += item.price * item.contador));
                return total;
              };


    const borrarDelCarrito = (id) => {

        const copia_carrito = {...carrito}

        carrito.filter  ((item) => {
if (item.id !==id && item.contador >1 ){
    item.contador --
    console.log(item.contador)
    setCarrito (copia_carrito)
    setcontadorTotal(contador_total - item.contador)
} else {
console.log ("no hay unidads")
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









// const contexto = createContext()

// export const { Provider } = contexto

// export const useContexto = () => {
//     return useContext(contexto)
// }


// const CustomProvider = ({ children }) => {

//     const [precio_total, setPrecioTotal] = useState(0)
//     const [contador_total, setcontadorTotal] = useState(0)
//     const [carrito, setCarrito] = useState([])

//     // const agregarAlCarrito = (contador, unidad) => {
         
        
//     //     const id = unidad.id
//     //     if (isInCarrito(id)) {
//     //         const copia_del_carrito = [...carrito]
//     //         let match = copia_del_carrito.find((p) => p.id === unidad.id)
//     //         match.contador = match.contador + contador
//     //         setCarrito(copia_del_carrito)

//     //     } else {
//     //         const unidad_con_contador = {
//     //             ...unidad,
//     //             contador
//     //         }
//     //         setCarrito([...carrito, unidad_con_contador])
//     //     }
//     //     setcontadorTotal(contador_total + contador)
//     // }

//     const agregarAlCarrito = (contador, itemNuevo) => {
//         //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
//         //Buscamos si el producto esta dentro del carrito
//         const findPorId = carrito.findIndex(
//          (listaDeItems) => listaDeItems.id === itemNuevo.id
//         );
//        //[...carrito] => sirve para que no se pisen los productos
//       //Si no esta el producto, lo guardamos
//         if (findPorId === -1) {
//          const listaDeItems = [
//           ...carrito,
//           { item: itemNuevo, contador: contador },
//          ];
//          setCarrito(listaDeItems);
//         } else {
//       //Si el producto no esta...
//          const nuevacontador = carrito[findPorId].contador + contador;  
//       //Recuperamos el carrito sin el producto que ya estaba
//         const listaViejaDeItems = carrito.filter(
//           (listaViejaDeItems) =>
//            listaViejaDeItems.item.nombre !== carrito[findPorId].item.nombre
//          );
//       //Agregamos el producto que ya estaba pero con la contador actualizada
//          const listaDeItems = [
//           ...listaViejaDeItems,
//           {
//            item: carrito[findPorId].item,
//            contador:  nuevacontador
//           },
//          ];
//       //Se guarda el prod
//          setCarrito(listaDeItems);
//         }
//        };
//     const borrarDelCarrito = (id,contador) => {
//         let carritoFiltrado = carrito.filter(e => (e.id) !== id)
//         setCarrito(carritoFiltrado)
//         setcontadorTotal(contador_total - contador)
//     }

//     const limpiarCarrito = () => {
//         setCarrito([])
//         setcontadorTotal(0)
//     }
//     const totalAPagar = () => {
//         let total = 0;
//       //Hacemos un forEach del carrito
//         carrito.forEach((item) => (total += item.item.price * item.contador));
//       //Retornamos el total => esta funcion tenes que llamarta ( asi: totalAPagar() ) en la funcion de borrar prod para que se actualice el precio
//       //A su vez, esta funcion la recuperas directamente en Carrito.js en la parte de total
//         return total;
//        }; 

//     const isInCarrito = (id) => {
//         // return carrito.some((p) => p.id === id)
//                 return carrito.find(e => e.item.id === id)

//     }

//     const valorDelContexto = {
//         contador_total,
//         carrito,
//         precio_total,
//         agregarAlCarrito,
//         borrarDelCarrito,
//         limpiarCarrito
//     }

//     return (
//         <Provider value={valorDelContexto}>
//             {children}
//         </Provider>
//     )
// }

// export default CustomProvider