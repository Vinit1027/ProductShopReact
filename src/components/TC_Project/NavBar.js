import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import './NavBar.css'
import Sale from './Sale';

function NavBar({size}) {
  return (
    <>  
      <Navbar bg="white" variant="dark" className='pdbwee'>
        <Container>
          <Navbar.Brand to='/'>
            <NavLink className='nav-link ftclr' to="/ProductShopReact">Product Shop</NavLink>
          </Navbar.Brand>
          <Nav className="mw-auto">
            <NavLink className='nav-link ftclr2' to="/ProductShopReact">Home</NavLink>
            <NavLink className='nav-link ftclr2' to='/all'>All Products</NavLink>
            <NavLink className='nav-link ftclr2' to='/phones'>Phones</NavLink>
            <NavLink className='nav-link ftclr2' to="/laptops">Laptops</NavLink>
            <NavLink className='nav-link ftclr2' to='./automotives'>Automotives</NavLink>
          </Nav>
          <nav>
            <NavLink className='nav-link ftclr' to='./cart'>
              <span><i className='fas fa-cart-plus crtsz'></i></span>
              <span>{size}</span>
            </NavLink>
          </nav>
        </Container>
      </Navbar>
      <Sale/>
    </>
  );
}

export default NavBar;