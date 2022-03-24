import { useState,useEffect } from "react";
import { GetInfo } from "../helpers/GetInfo";
export const useFetchInfo = (cod) =>{
    
    const [info,setInfo]=useState([]);
        useEffect(()=>{

            GetInfo (cod).then(response => {
                setInfo([...response]);
               });
        },[cod]);
   return(info);
}