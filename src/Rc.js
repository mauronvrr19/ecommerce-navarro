import React from "react";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import "./Rc.css"
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import { useState, useEffect, createContext } from 'react'
import CustomProvider from "./componentes/CartContext"; 


function Rc () {
    let [show, setShow] = useState(false)

    const links = [
        { href: "/", name: "home", id: 4},
        { href: "/productos", name: "productos", id: 1 },

    ]
    
    return (
    <CustomProvider>
    <BrowserRouter>
              <NavBar  links={links}/>
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/categoria/:id" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                </Routes>
    </BrowserRouter>
    </CustomProvider>
    )
}

export default Rc


