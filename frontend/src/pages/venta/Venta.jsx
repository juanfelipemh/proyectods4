import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Venta = () => {
  return (
    <>
    <table className="table table-bordered">
    <thead className="table-dark">
    <tr>
      <th >Fecha </th>
      <th >Id Venta </th>
      <th >Tipo Producto </th>
      <th >Cantidad Vendida</th>
      <th >valor</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >24/10/2022</th>
      <td>4</td>
      <th >Balón de Futbol</th>
      <th >5 </th>
      <td>$50.000</td>
      
    </tr>
    <tr>
      <th >24/10/2022</th>
      <td>5</td>
      <th >Balón de Baloncesto</th>
      <th >3 </th>
      <td>$45.000</td>
      </tr>
      <tr>
      <td colspan="4">Total:</td>
      <td> $95.000</td>
    </tr>
  </tbody>
</table>
</>
  )
}

export default Venta