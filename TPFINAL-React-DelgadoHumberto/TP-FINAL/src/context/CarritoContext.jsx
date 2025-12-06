


import { useState, useEffect, createContext } from "react";

export const CarritoContext=createContext(); //exporto el carrito


// forma dinamica, usando children, en vez de hacerlo estatico para cada componente
export const CarritoProvider=({children})=>{
    const[carrito, setCarrito]=useState([]);


    /* agrega elemenos al carrito */
    const agregarCarrito = (producto)=>{

        setCarrito([ ...carrito,producto]);
        alert("dentro de contex");
        console.log(carrito);
    }

    /* elimina  elementos al carrito */
    const eliminarCarrito = (index)=>{

        


    }

    /* vacia el  carrito */
    const vaciarCarrito = ()=>{

        setCarrito([]);
        
    }



return(
    <CarritoContext.Provider value={{carrito, agregarCarrito, eliminarCarrito, vaciarCarrito}}>

        {children}

    </CarritoContext.Provider>
);

}