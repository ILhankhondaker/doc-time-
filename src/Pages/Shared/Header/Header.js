import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar className='menu' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src='https://www.doctime.com.bd/images/logo/doctime_title_logo_tm.svg' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>


                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/service">Services</NavLink>



                            {/* <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>RIVIEWS</NavLink> */}


                            <Nav.Link to="/home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} as={Link} to="about">About</NavLink>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} as={Link} to="login">
                                        Login
                                    </NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;