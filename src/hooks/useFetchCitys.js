import { useState,useEffect } from "react";
import { GetCiudades } from "../helpers/GetCiudades";
export const useFetchCitys = () =>{
    const dat = {
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'municipios'
        }

    const [ciudades,setCiudades]=useState([]);
        useEffect(()=>{

            GetCiudades(dat).then(response => {
                setCiudades([...response]);
               });
        },[]);
   return(ciudades);
    
}