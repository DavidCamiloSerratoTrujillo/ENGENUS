import React from "react";
import { useFetchCitys } from "../hooks/useFetchCitys";
 const TablaCitys = ()=> {
 const ciudades = useFetchCitys();

  return (
    <div className='Container'>
<table className="table table-striped table-dark table-hover Contend ">
  <thead>
    <tr>
      <th >Ciudad</th>
      <th >Codigo</th>
    </tr>
  </thead>
  <tbody>
    { 
    ciudades.map(({nombre,dane}) =>{
      return(
      <tr key ={dane}>
        <td >{nombre}</td>
        <td > {dane}</td>
      </tr>)
    })
    }  
    
  </tbody>
</table>
   
    </div>
  )
}
export default TablaCitys;
