import { useState,useEffect } from "react";
import { GetGrupos } from "../helpers/GetGrupos";
export const useFetchGrupos = (cod) =>{
    const[state,setState] = useState({
        data:[],
        loading:true,
    });
  
        useEffect(()=>{

            GetGrupos (cod).then(response => {
                setState({data:[...response],loading:false});
               });
        },[cod]);
   return(state);
}
