import { useState,useEffect } from "react";
import { GetGrupos } from "../helpers/GetGrupos";
export const useFetchGrupos = (cod) =>{
    
    const [grupos,setGrupos]=useState([]);
        useEffect(()=>{

            GetGrupos (cod).then(response => {
                setGrupos([...response]);
               });
        },[cod]);
   return(grupos);
}