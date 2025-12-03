import React from "react";

import {Row, Col, Card,Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
function Gallery(props){




return(
    
    
              <Card className="shadow-sm">
                <Card.Img variant="top" src={props.image}  height="150" width="150"/>
                <Card.Body>
                  <Card.Title>ID: {props.id}</Card.Title>
                  <Card.Text>Imagen {props.articles}</Card.Text>
                  <Button variant="primary" onClick={()=>(alert("boton"))}>Añadir +</Button>
                </Card.Body>
              </Card>
          
   
);
};

export default Gallery;