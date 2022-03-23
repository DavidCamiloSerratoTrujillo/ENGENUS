import React from 'react'
import { useFetchCitys } from "../hooks/useFetchCitys";
export const Fila = () => {
    const ciudades = useFetchCitys();

  return (
    ciudades.map(({nombre,dane}) =>{
      return(
      <tr key ={dane}>
        <td >{nombre}</td>
        <td > {dane}</td>
      </tr>)
    })
  )
}
