import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {




  return (

    

    <>
        <header>
            <h1>TIENDA DEPORTIVA DW4</h1>    
            <nav className='menu-nav'>
            <Link className="menu-nav__item" to="inicio" >Inicio</Link>
            <Link className="menu-nav__item" to="producto" >Lista Productos</Link>
            <Link className="menu-nav__item" to="compras" >Productos</Link>
            <Link className="menu-nav__item" to="carrito" >Carrito de Compras</Link>
            <Link className="menu-nav__item" to="venta" >Lista de Ventas </Link>
        </nav>
        </header>         
    </>

  )
}

export default Header