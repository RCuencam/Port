import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md" className="fixed-top header">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto navbar" navbar>
            <NavItem>
              <NavLink  href="#home" className="navbar-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#user" className="navbar-link">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portafolio" className="navbar-link">Portafolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="navbar-link">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Example;