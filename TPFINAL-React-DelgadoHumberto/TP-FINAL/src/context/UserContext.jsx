import {createContext, useContext, useState,useEffect} from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    //busco el token en el localStorage, si no está paso null
    const [token,setToken]=useState(()=>{
        return localStorage.getItem('token') || null;
    });


    /* Usuario: admin Contraseña: 1234*/

    const login = (username, password)=>{

        if(username==='admin' && password==='1234'){
            //lo saco de jwt.io
            const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJhZG1pbiI6MTIzNCwiaWF0IjoxNTE2MjM5MDIyfQ.JUOCWCkGkbZjRKx5F5MB7WkDv7tNp_HHbsOuO7QrqG4';   
            setToken(token);
            localStorage.setItem('token',token); //guardamos el tokenen el localStorage
            return true;
        }
        return false;
    }

    const logout=()=>{

        setToken(null); //elimino el token de useState y del localStorage
        localStorage.removeItem('token'); 


    };

    return(

        <AuthContext.Provider value={{token,login,logout}}>  
            {/* en la prop value le digo que todos los elementos en childre van a poder ver toke, login, logout */}
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth=()=>useContext(AuthContext); 