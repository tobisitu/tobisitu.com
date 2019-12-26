import React from 'react';
import  '../css/navigation.css';
import {Navbar, Nav, NavDropdown, NavbarBrand} from 'react-bootstrap';
import {
    NavLink,
    Link
  } from 'react-router-dom'


function Navigation() {
  return (
    <div>

        <Nav.Item className="text-center mb-3 mt-3">  
                <NavbarBrand >
                    <Link to={'/'}> Tobi Situ </Link>
                </NavbarBrand>
        </Nav.Item>
        <div className="nav d-flex justify-content-center">
             <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/projects">
                        Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navigation;