import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import BackButton from '../card/cardBackButton';
import CartSummary from '../card/cardSummary';
import { Link } from "react-router-dom";

const Navi = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link className="link" to="/">reactstrap</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link className="link" to="/saveProduct" >Ürün Ekle</Link>
              </NavLink>
            </NavItem>
            <CartSummary></CartSummary>
          </Nav>
          <NavbarText>
            <BackButton />

          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Navi;
