import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import srklogo from '../assets/srk.png'
import './header.css'



function Header() {
  return (
   
   <>
   <div class>
     <Navbar className="bg-body-tertiary" >
          <Container >
            <Navbar.Brand href="#home" >
            
             <h2>Shah Rukh Khan</h2>
            </Navbar.Brand>
          </Container>
        </Navbar>
   </div>
   </>
  )
}

export default Header