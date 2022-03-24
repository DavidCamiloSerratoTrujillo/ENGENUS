import { useState,useEffect } from "react";
import { GetInstituciones } from "../helpers/GetInstituciones";
export const useFetchInst = (cod) =>{
    
    const [instituciones,setInstituciones]=useState([]);
        useEffect(()=>{

            GetInstituciones (cod).then(response => {
                setInstituciones([...response]);
               });
        },[cod]);

   return(instituciones);
    
}