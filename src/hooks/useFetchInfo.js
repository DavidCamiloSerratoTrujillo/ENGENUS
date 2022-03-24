import { useState,useEffect } from "react";
import { GetInfo } from "../helpers/GetInfo";
export const useFetchInfo = (cod) =>{
    const[state,setState] = useState({
        data:[],
        loading:true,
    });
   
        useEffect(()=>{

            GetInfo (cod).then(response => {
                setState({data:[...response],loading:false});
               });
        },[cod]);
   return(state);
}