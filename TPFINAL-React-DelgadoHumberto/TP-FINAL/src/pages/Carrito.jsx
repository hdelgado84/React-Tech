/* */

import React,{ useContext} from "react";


import { CarritoContext } from "../context/CarritoContext";

export default function Carrito(){




    const {carrito} = useContext(CarritoContext);

  
    console.log("dentro de carrito", carrito);

  
    return(

        <div>

            {
            
            (carrito.length > 0) ?
            (<ol>
               { carrito.map((value, index)=>(
            
                <li key={index}><p> item carrito agregado {value}</p></li>

                ))}
            </ol> ):(<p> Carrito está vacio </p>)
            
            
            }
        </div>
    );
}