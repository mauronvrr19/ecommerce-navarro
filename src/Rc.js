import React from "react";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import "./Rc.css"
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";


const links = [
    { href: "/home", name: "home", id: 1 },
    { href: "/carrito", name: "carrito", id: 2 },
    { href: "/ItemListContainer", name: "catalogo", id: 3 },
    { href: "/ItemDetailContainer", name: "detalles del producto", id: 4  }
]
function Rc () {
    return <>
    <BrowserRouter>
    <NavBar nombre={"E-Commerce"}/>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>} />
                <Route path="/Itemlistcontainer" element={<ItemListContainer/>} />
                <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>} />

            </Routes>
    </BrowserRouter>
    </>
}

export default Rc


