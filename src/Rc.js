import React from "react";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import "./Rc.css"
// import ItemDetailContainer from "./componentes/itemdetail/ItemDetailContainer";

function Rc () {
    return <>
    <BrowserRouter>
    <NavBar nombre={"E-Commerce"}/>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="/Itemlistcontainer" element={<ItemListContainer/>} />
                {/* <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>} /> */}

            </Routes>
    </BrowserRouter>
    </>
}

export default Rc


