import React from "react";
import {Container, Navbar, Nav, NavbarBrand} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Header(){


    var dato=  451;

return(


    <Container>
      


    <header className="bg-primary text-white py-4 shadow-sm"> 
        <Container>
            <h1 className="mb-1">Proyecto Talento 2025</h1>
            <p className="lead">Componentes React Friendly</p>
        </Container>
       
        
      


       
        

       <Navbar bg="dark" variant="dark" expand="lg" >
            
            

            <Container>
                <Navbar.Brand as={Link} to="/">
                
                    Proyecto 2025
                </Navbar.Brand>
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>

                 <Nav.Link as={Link} to="/productos">
                    Productos
                </Nav.Link>

                 <Nav.Link as={Link} to="/servicios">
                    Servicios
                </Nav.Link>
                <Nav.Link as={Link} to="/contactos">
                    Contactos
                </Nav.Link>
                
                <Navbar.Brand as={Link} to="/carrito"   >
                <img
              alt=""
              src="src/assets/carrito.png"
              width="40"
              height="40"
              
              className="d-inline-block align-top"
            />{' '}Carrito ({dato.toString()})
                </Navbar.Brand>
                 
            </Container>
        </Navbar>

    </header>
    
</Container>

);
};

export default Header;