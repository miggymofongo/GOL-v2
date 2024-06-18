import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://miguelalmodo.com">Miguel's Asteroid</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://library.miguelalmodo.com">Bookshelf</Nav.Link>
            <Nav.Link href="https://podcast.miguelalmodo.com">Podcast</Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://miggymofongo.github.io/kh_quote/">Quote Shuffler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Game of Life v2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Git
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;