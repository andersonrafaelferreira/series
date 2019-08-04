import React, { useState } from 'react';
import { Navbar,
Collapse,
NavbarBrand,
Nav,
NavItem,
NavLink,
NavbarToggler
 } from 'reactstrap'

function App() {

  const [open, setOpen] = useState;
  const toggle = () => {
    setOpen(!open)
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Minhas séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav classname="ml-auto">
            <NavItem>
              <NavLink href="/">Minhas séries</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
