
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'



const Navigation = () => (
        <div>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link >
                <NavLink to="/genres"exact >Genres</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink
            to="/wishlist/books" exact >WishList</NavLink>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
        </Navbar>
        </div>
)


export default Navigation;