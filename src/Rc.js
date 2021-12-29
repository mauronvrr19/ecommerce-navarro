import React from "react";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import "./Rc.css"
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import { useState, useEffect } from "react";



function Rc () {
    let [show, setShow] = useState(false)

    const links = [
        { href: "/productos", name: "productos", id: 1 },
        { href: "/categoria/1", name: "placa madre", id: 2 },
        { href: "/categoria/2", name: "micro", id: 3 },
        { href: "/", name: "home", id: 4},

    ]
    
    return (<>
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
    </>)
}

export default Rc


