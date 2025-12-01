


import { useState, useEffect, createContext } from "react";

export const CarritoContext=createContext(); //exporto el carrito


// forma dinamica, usando children, en vez de hacerlo estatico para cada componente
export const CarritoProvider=({children})=>{
    const[carrito, setCarrito]=useState([]);


    /* agrega elemenos al carrito */
    const agregarCarrito = (producto)=>{

        setCarrito([...carrito, producto])
    }

    /* elimina  elementos al carrito */
    const eliminarCarrito = (index)=>{

        


    }

    /* vacia el  carrito */
    const vaciarCarrito = ()=>{

        setCarrito([]);
        
    }
/*
const fetchRamdomUser=()=>{

    fetch('https://randomuser.me/api')
        .then(res=>res.json()) //convierto a json
        .then(data=>setUser(data.results[0]))// tengo que poner el[0] porque no es un array
        .catch(error=>console.error('Error al cargar usuario',error));  //results es la key del json                       
    }

useEffect(()=>{

    fetchRamdomUser();
},[]);
*/


return(
    <CarritoContext.Provider value={{carrito, agregarCarrito, eliminarCarrito, vaciarCarrito}}>

        {children}

    </CarritoContext.Provider>
);

}