import React, { useEffect, useState, useContext } from "react";
import Gallery from "../components/Gallery";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';




import { CarritoContext } from "../context/CarritoContext";



export default function Productos(){

    const [producto, setProductos]=useState(null);

   // const {carrito,agregarCarrito} = useContext(CarritoContext);

    useEffect(()=>{

        fetch("https://68e56dd821dd31f22cc1be29.mockapi.io/producto/articles")
        .then((res)=>res.json())// then es secuencial y se ejecuta una vez que obtiene los datos del fetch
        .then((data)=>{
            setProductos(data);
        });

    },[]);
    
    if(!producto){
        return (
           
             <Spinner animation="border" variant="primary"/>
            
        );
    }


    const articulos= producto.map((pro) => ( <Col> <Gallery  image= {pro.image} 
                                                       id={pro.id} 
                                                       price={pro.price}
                                                       articles={pro.articles}
                                                       //onAdd={agregarCarrito}
                                                       /> </Col>));
      
    
  

    const size = articulos.length;
    
    console.log("tamaño", size);
 
 
     //   console.log("tipo de dato Articulo ",typeof articulos);
   

   let col = 4;  // defino el numero de columnas
   let r=0;
   const resto=(size%col);
   if(resto)
    {
        r= size-(resto);
        r= (r/col);
        r+=1;
    }
    else{
        r= (size/col);
    }

    

    
    const prueba = ( )=>{
                
        let data2=[];
        let a = new Array(col);

        for (let fila = 0; fila < r; fila++) 
        {
            a[fila] = new Array(col);            
            for (let c = 0; c < col; c++) 
            {
                a[fila][c] = articulos[c+(fila*col)];            
            }
            data2.push(Object.assign({}, <Row md={4}> {a[fila]}</Row>) );
        }    
        return(data2);    
        }
    return(       
        <Container>        
            {prueba()}     
        </Container>
 
    );
}