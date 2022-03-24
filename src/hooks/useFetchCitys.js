import { useState,useEffect } from "react";
import { GetCiudades } from "../helpers/GetCiudades";
export const useFetchCitys = () =>{
    

        const[state,setState] = useState({
            data:[],
            loading:true,
        });


        useEffect(()=>{

            GetCiudades().then(response => {
                setState({data:[...response],loading:false});
               });
        },[]);
    
   return(state);
    
}