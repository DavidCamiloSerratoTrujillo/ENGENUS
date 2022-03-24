import { useState,useEffect } from "react";
import { GetSedes } from "../helpers/GetSedes";
export const useFetchSedes = (cod) =>{
    const[state,setState] = useState({
        data:[],
        loading:true,
    });

        useEffect(()=>{

            GetSedes (cod).then(response => {
                setState({data:[...response],loading:false});
               });
        },[cod]);
   return(state);
}