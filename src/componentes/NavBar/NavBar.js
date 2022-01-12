import React from "react";
import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"
import  { useContexto }  from "../CartContext";

const NavBar =({ links})=> {
    
    const { cantidad_total } = useContexto()

    return (
       
      <nav id="nav">
                <h1>E-Commerce</h1>

                <nav>
                {links.map((elemento, indice) => {
                    return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
                })}
                <NavLink to="/carrito">
                    <CartWidget></CartWidget>
                </NavLink>
            </nav>
       </nav>
  

    )
    }

export default NavBar

