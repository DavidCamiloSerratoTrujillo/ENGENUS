import { useState,useEffect } from "react";
import { GetInstituciones } from "../helpers/GetInstituciones";
export const useFetchInst = (cod) =>{

     const[state,setState] = useState({
            data:[],
            loading:true,
        });


        useEffect(()=>{

            GetInstituciones (cod).then(response => {
                setState({data:[...response],loading:false});
               });
        },[cod]);
        
   return(state);
    
}