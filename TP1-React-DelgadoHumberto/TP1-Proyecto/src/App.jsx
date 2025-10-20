import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Contactos from "./pages/Contactos"
import Servicios from "./pages/Servicios"
import Carrito from "./pages/Carrito"

import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

function App() {


  return (

     <Router>
        <Header/>
          <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/contactos" element={<Contactos/>}/>

            <Route path="/servicios" element={<Servicios/>}/>

            <Route path="/productos" element={<Productos/>}/>

             <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
          
          </Container>
        <Footer/>
     </Router>
  )
}

export default App
