import React from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import ItemCount from "./componentes/ItemCount/ItemCount"


function Rc () {
    return <>
    <NavBar nombre={"E-Commerce"}/>
    <ItemListContainer nombre={"articulo"}/>
    <ItemCount stock={10} initial={1} onAdd={0}/>
    </>
}

export default Rc


