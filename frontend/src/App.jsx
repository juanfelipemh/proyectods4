import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { useState } from "react"

// Layout
import Layout from "./components/layout/Layout"

// Pages
import Inicio from "./pages/inicio/Inicio"
import Carrito from "./pages/carrito/Carrito"
import Producto from "./pages/producto/Producto"
import Venta from "./pages/venta/Venta"
import ModificarProd from "./pages/modificar/ModificarProd"
import Compras from "./pages/compras/Compras"



function App() {
  const [ carrito, setCarrito] = useState([])



  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> 
            <Route path="inicio" element={<Inicio/>} />
            <Route path="carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="producto" element={<Producto />} />
            <Route path="compras" element={<Compras carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="ventas" element={<Venta/>} />
            <Route path="modificar/:id" element={<ModificarProd />} />
          </Route> 
        </Routes>
      </BrowserRouter>
      
  )
}

export default App
