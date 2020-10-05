import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Todo List</NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default connect()(AppNavbar);

