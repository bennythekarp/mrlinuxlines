import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import StyledNav from '../styles/StyledNav'

const NavBar = () => {
  return (
    <StyledNav>
      <Nav className='nav-bar'>
        <div className='nav-links boldonse-regular'>
          <Nav.Item>
            <Nav.Link>
              <Link className='link' to='/'>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className='link' to='teams'>Teams</Link>
            </Nav.Link>
          </Nav.Item>
        </div>
        {/* <div className='nav-brand merriweather'>
          <h1>Mr Linux Lines:</h1>
          <h2>NBA stats & betting tools</h2>
        </div> */}
        <div className="nav-img-container"></div>
        {/* <img src='../../images/MrLinuxLinesPenguin.png' alt="" /> */}
      </Nav>
      </StyledNav>
  )
}

export default NavBar