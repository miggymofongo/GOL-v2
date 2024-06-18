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
              <NavDropdown.Item href="https://miggymofongo.github.io/game_of_life_v2/">
                Game of Life v2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/miggymofongo">
                Git
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://miguelalmodo.com/portfolio">Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="https://nostree.me/npub1ajt9gp0prf4xrp4j07j9rghlcyukahncs0fw5ywr977jccued9nqrcc0cs">
              Tree
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;