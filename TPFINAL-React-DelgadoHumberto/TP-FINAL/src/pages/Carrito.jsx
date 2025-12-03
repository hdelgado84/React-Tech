/* */

import React,{ useContext} from "react";


import { CarritoContext } from "../context/CarritoContext";

export default function Carrito(){




    const {carrito} = useContext(CarritoContext);

  


  
    return(

        <div>

            {
            
            (carrito.lenght > 0) > 0 ?
            (<ol>
               { carrito.map((item,index)=>{
            
                <li key={index}>{item.articles}</li>

                })}
            </ol> ):(<p> Carrito está vacio </p>)
            
            
            }
        </div>
    );
}