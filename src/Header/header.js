import React from 'react';
import {Navbar,Nav,Container } from "react-bootstrap";
import "./header.css"
import {Link} from "react-router-dom";




function header() {

  return (
     <div className="header">
         <Navbar id='NAVBAR' collapseOnSelect expand="lg" >
  <Container>
<Link to="/" className='LinkHeading'>API CALLING</Link> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="me-auto">
      <Link  to="/myproject" className='link2'>My Project</Link>
      <Link to="/contact" className='link2'>Contact Me</Link>
    
    
    </Nav> */}
    <Nav>
      <Link to="https://www.linkedin.com/in/sagar-208723153"><i className="fa fa-twitter"></i></Link>

      <Link to="https://www.github.com/sagar-host">
      <i className="fa fa-github"></i>
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
  )
}

export default header