
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'



const Navigation = () => (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href='/'><i className="fas fa-book"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/genres">Genres</Nav.Link>
              <Nav.Link href="/wishlist/books">Wishlist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>
)


export default Navigation;