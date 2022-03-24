import { useState,useEffect } from "react";
import { GetSedes } from "../helpers/GetSedes";
export const useFetchSedes = (cod) =>{
    
    const [sedes,setSedes]=useState([]);
        useEffect(()=>{

            GetSedes (cod).then(response => {
                setSedes([...response]);
               });
        },[cod]);
   return(sedes);
}