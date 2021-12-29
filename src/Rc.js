import React from "react";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import "./Rc.css"
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";


const links = [
    { href: "/productos", nombre: "Productos", id: 3 },
    { href: "/ItemListContainer/categoria/1", nombre: "placa nadre", id: 1 },
    { href: "/categoria/2", nombre: "micros", id: 2 },
]
function Rc () {
    return <>
    <BrowserRouter>
              <NavBar nombre={"E-Commerce"} links={links}/>
            <Routes>
                {/* <Route path="/Home" element={<Home/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>} />
                <Route path="/Itemlistcontainer/" element={<ItemListContainer/>} />
                <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>} /> */}
                
                <Route path="/Home" element={<Home/>}/>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/Itemlistcontainer/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
            </Routes>
    </BrowserRouter>
    </>
}

export default Rc


