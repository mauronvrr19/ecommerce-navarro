import React from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/componentes/NavBar/NavBar"

function Rc () {
    return <>
    <NavBar nombre={"tutor"}/>
    <ItemListContainer nombre={"articulo"}/>
    </>
}

export default Rc


