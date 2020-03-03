import React , { useState } from 'react';
import Restaurant from './restaurants/Restaurant';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const App = () => {

  return(
    <div className="App">
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BibMaestro</NavbarBrand>
      </Navbar>
    </div>
      <Restaurant></Restaurant>
    </div>
  );
};

export default App;
