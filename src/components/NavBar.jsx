import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">PATTYULMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="concepts">Concepts</Nav.Link>
              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item href="productCreate">
                  Create Product
                </NavDropdown.Item>
                <NavDropdown.Item href="conceptCreate">
                  Create Concept
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Orders</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="Register">Register</Nav.Link>
              <Nav.Link href="cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
